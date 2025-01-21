import sys
import os
from tests_environment.sandbox import sandbox


def generate_dynamic_test_file(task_id, function_name, temp_module_name):
    """
    Generate a test file dynamically for the specified task based on test cases.
    """
    task = sandbox.get_task_by_id(task_id)
    if not task:
        raise Exception(f"Task with id {task_id} not found.")

    test_cases = task['test_cases']
    test_file_path = f"tests/test_task{task_id}.py"

    os.makedirs(os.path.dirname(test_file_path), exist_ok=True)

    module_directory = os.getcwd()
    sys.path.append(r'{module_directory}')

    test_code = f"""
import sys
sys.path.append(r'{module_directory}')  # Ensure the correct module path
from {temp_module_name} import {function_name}

import pytest
"""

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
