import os.path
import subprocess
import importlib

from RestrictedPython import compile_restricted, safe_globals
from tests_environment.tasks import tasks



def wrap_code_in_function(user_code: str, function_name: str):
    """
    Wrap user code in function, to make validating easier.
    :param user_code: user code to wrap
    :param function_name: function name to wrap
    :return: user code wrapped in function
    """

    return f"""
def {function_name}(*args, **kwargs):
    {user_code}
"""

def get_task_by_id(task_id: int):
    """
    Returns the task with the given task_id.
    :param task_id: The ID of the task to fetch.
    :return: The task dictionary.
    """
    for task in tasks:
        if task['task_id'] == task_id:
            return task
    return None


def run_code_and_tests(user_code: str, task_id: int):
    """
        Execute user code in safe environment and test it.
    :param user_code: user code to wrap
    :param task_id: data for testing params
    :return:tests result
    """
    try:
        task = get_task_by_id(task_id)
        if not task:
            raise Exception(f"Task with id {task_id} not found.")

        if "def" not in user_code:
            user_code = wrap_code_in_function(user_code, task['function_name'])

        env_code = user_code.strip()

        compile_env_code = compile_restricted(env_code, "<string>", "exec")

        restricted_globals = safe_globals.copy()

        exec(compile_env_code, restricted_globals)

        user_function = restricted_globals.get(task['function_name'])
        if not user_function:
            raise Exception(f"Function {task['function_name']} is not defined")

        test_file_path = f"tests/test_task{task['task_id']}.py"

        if not os.path.exists(test_file_path):
            raise Exception(f"There are no existing tests for this task")

        temp_module_name = f"temp_module_{task_id}"
        temp_module_path = f"{temp_module_name}.py"

        with open(temp_module_path, "w") as f:
            f.write(user_code)

        temp_module = importlib.import_module(temp_module_name)

        user_function = getattr(temp_module, task['function_name'])

        result = subprocess.run(
            ["pytest", test_file_path, "--maxfail=1", "--disable-warnings", "-q"],
            capture_output=True,
            text=True,
        )

        if result.returncode == 0:
            return {"status": "succes", "message": "Test passed"}
        else:
            return {"status": "failure", "message": result.stdout}

    except Exception as e:
        return {"status": "error", "message": str(e)}

    finally:
        os.remove(temp_module_path)
