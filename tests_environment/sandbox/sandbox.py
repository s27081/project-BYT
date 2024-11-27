import os
import subprocess
import importlib.util
from RestrictedPython import compile_restricted, safe_globals, utility_builtins
from RestrictedPython.Eval import default_guarded_getitem, default_guarded_getiter
from tests_environment.tasks import tasks
from tests_environment.tests.tests_generator import generate_dynamic_test_file


def get_task_by_id(task_id):
    """
    Returns the task with the given task_id.
    """
    for task in tasks:
        if task['task_id'] == task_id:
            return task
    return None


def wrap_code_in_function(user_code, function_name):
    """
    Wrap user code in a function.
    """
    return f"""
def {function_name}(*args, **kwargs):
    {user_code}
"""

def run_code_and_tests(user_code, task_id):
    """
    Execute user code and run tests dynamically.
    """
    temp_module_name = f"temp_module_{task_id}"
    temp_module_path = f"{temp_module_name}.py"

    try:
        task = get_task_by_id(task_id)
        if not task:
            raise Exception(f"Task with id {task_id} not found.")

        function_name = task['function_name']

        if "def" not in user_code:
            user_code = wrap_code_in_function(user_code, function_name)

        compiled_code = compile_restricted(user_code, filename="<string>", mode="exec")

        restricted_globals = safe_globals.copy()
        restricted_globals.update({
            "__builtins__": utility_builtins,
            "_getitem_": default_guarded_getitem,
            "_getiter_": default_guarded_getiter,
        })

        exec(compiled_code, restricted_globals)

        if function_name not in restricted_globals:
            raise Exception(f"Function {function_name} is not defined.")

        with open(temp_module_path, "w") as f:
            f.write(user_code)

        test_file_path = generate_dynamic_test_file(task_id, function_name, temp_module_name)

        result = subprocess.run(
            ["pytest", test_file_path, "--maxfail=1", "--disable-warnings", "-q"],
            capture_output=True,
            text=True,
        )

        if result.returncode == 0:
            return {"status": "success", "message": "All tests passed!"}
        else:
            return {"status": "failure", "message": result.stdout}

    except Exception as e:
        return {"status": "error", "message": str(e)}

    finally:
        if os.path.exists(temp_module_path):
            os.remove(temp_module_path)
        test_file_path = f"tests/test_task{task_id}.py"
        if os.path.exists(test_file_path):
            os.remove(test_file_path)
