import re


def parse_failure_message(raw_output):
    """
    Parse the raw pytest output to extract and format the error message.
    Handles common Python errors such as SyntaxError, NameError, etc.
    """
    lines = raw_output.splitlines()
    error_details = []

    for line in lines:
        if "SyntaxError" in line:
            match = re.search(r"^.*SyntaxError.*:(.*)$", line)
            if match:
                error_details.append(f"Syntax error: {match.group(1).strip()}")
            else:
                error_details.append("Syntax error: Please check your code for typos or invalid syntax.")
            break

        elif "IndentationError" in line:
            match = re.search(r"^.*IndentationError.*:(.*)$", line)
            if match:
                error_details.append(f"Indentation error: {match.group(1).strip()}")
            else:
                error_details.append("Indentation error: Incorrect indentation.")
            break

        elif "NameError" in line:
            match = re.search(r"^.*NameError.*:(.*)$", line)
            if match:
                error_details.append(f"Name error: {match.group(1).strip()}")
            else:
                error_details.append("Name error: A variable is used before being defined.")
            break

        elif "TypeError" in line:
            match = re.search(r"^.*TypeError.*:(.*)$", line)
            if match:
                error_details.append(f"Type error: {match.group(1).strip()}")
            else:
                error_details.append("Type error: Incompatible types used.")
            break

        elif "ValueError" in line:
            match = re.search(r"^.*ValueError.*:(.*)$", line)
            if match:
                error_details.append(f"Value error: {match.group(1).strip()}")
            else:
                error_details.append("Value error: An invalid value was passed.")
            break

        elif "IndexError" in line:
            match = re.search(r"^.*IndexError.*:(.*)$", line)
            if match:
                error_details.append(f"Index error: {match.group(1).strip()}")
            else:
                error_details.append("Index error: Invalid index accessed.")
            break

        elif "KeyError" in line:
            match = re.search(r"^.*KeyError.*:(.*)$", line)
            if match:
                error_details.append(f"Key error: {match.group(1).strip()}")
            else:
                error_details.append("Key error: A non-existent key was accessed.")
            break

        elif "AttributeError" in line:
            match = re.search(r"^.*AttributeError.*:(.*)$", line)
            if match:
                error_details.append(f"Attribute error: {match.group(1).strip()}")
            else:
                error_details.append("Attribute error: Attempted to access a non-existent attribute.")
            break

        elif "E" in line and not error_details:
            error_details.append("Test failed. Please check your code.")

    if not error_details:
        return "Test failed. Please check your code."

    return "\n".join(error_details)
