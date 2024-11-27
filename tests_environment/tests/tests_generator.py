from tests_environment.sandbox.sandbox import get_task_by_id


def generate_dynamic_test_file(task_id, function_name, temp_module_name):
    """
    Generate a test file dynamically for the specified task based on test cases.
    """
    task = get_task_by_id(task_id)
    if not task:
        raise Exception(f"Task with id {task_id} not found.")

    test_cases = task['test_cases']
    test_file_path = f"tests/test_task{task_id}.py"

    test_code = f"import pytest\nfrom {temp_module_name} import {function_name}\n\n"

    for i, case in enumerate(test_cases):
        test_input = ", ".join(map(str, case['input']))
        expected_output = case['expected']
        test_code += f"""
def test_task_{task_id}_case_{i}():
    assert {function_name}({test_input}) == {expected_output}
"""

    with open(test_file_path, "w") as f:
        f.write(test_code)

    return test_file_path
