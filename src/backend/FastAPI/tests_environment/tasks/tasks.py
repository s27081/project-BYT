tasks = [
    {
        "task_id": 1,
        "description": "Write a function `sum_numbers(a, b)` that takes two numbers as arguments and returns their sum.",
        "function_name": "sum_numbers",
        "test_cases": [
            {"input": [2, 3], "expected": 5},
            {"input": [-1, 1], "expected": 0},
            {"input": [0, 0], "expected": 0}
        ]
    },
    {
        "task_id": 2,
        "description": "Write a function `is_even(n)` that takes an integer and returns `True` if the number is even, "
                       "or `False` otherwise.",
        "function_name": "is_even",
        "test_cases": [
            {"input": [2], "expected": True},
            {"input": [3], "expected": False},
            {"input": [0], "expected": True}
        ]
    },
    {
        "task_id": 3,
        "description": "Write a function `numbers that returns an array with numbers from 1 to 10.",
        "function_name": "numbers",
        "test_cases": [
            {"input": [], "expected": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        ]
    },
    {
        "task_id": 4,
        "description": "Write a function `count_letters(string)` that takes a string and returns the number of letters "
                       "(ignoring spaces).",
        "function_name": "count_letters",
        "test_cases": [
            {"input": ["hello world"], "expected": 10},
            {"input": ["abc 123"], "expected": 3},
            {"input": ["a b c"], "expected": 3}
        ]
    },
    {
        "task_id": 5,
        "description": "Write a function `reverse_string(string)` that takes a string and returns it in reverse order.",
        "function_name": "reverse_string",
        "test_cases": [
            {"input": ["hello"], "expected": "olleh"},
            {"input": ["abc"], "expected": "cba"},
            {"input": [""], "expected": ""}
        ]
    },
    {
        "task_id": 6,
        "description": "Write a function `largest_number(list)` that takes a list of numbers and returns the largest "
                       "value from the list.",
        "function_name": "largest_number",
        "test_cases": [
            {"input": [1, 2, 3], "expected": 3},
            {"input": [-1, -2, -3], "expected": -1},
            {"input": [0], "expected": 0}
        ]
    },
    {
        "task_id": 7,
        "description": "Write a function `count_vowels(string)` that returns the number of vowels (a, e, i, o, u, y) "
                       "in the given string.",
        "function_name": "count_vowels",
        "test_cases": [
            {"input": ["hello"], "expected": 2},
            {"input": ["abc"], "expected": 1},
            {"input": ["aeiou"], "expected": 5}
        ]
    },
    {
        "task_id": 8,
        "description": "Write a function `is_palindrome(string)` that checks if the given string is a palindrome "
                       "(reads the same forwards and backwards).",
        "function_name": "is_palindrome",
        "test_cases": [
            {"input": ["racecar"], "expected": True},
            {"input": ["hello"], "expected": False},
            {"input": ["madam"], "expected": True}
        ]
    },
    {
        "task_id": 9,
        "description": "Write a program that generates and prints a multiplication table from 1 to 10.",
        "function_name": "multiplication_table",
        "test_cases": [
            {"input": [], "expected": "\n1 2 3 4 5 6 7 8 9 10\n2 4 6 8 10 12 14 16 18 20\n..."}
        ]
    },
    {
        "task_id": 10,
        "description": "Write a function `celsius_to_fahrenheit(c)` that takes a temperature in Celsius and returns "
                       "the temperature converted to Fahrenheit (formula: F = 9/5 * C + 32).",
        "function_name": "celsius_to_fahrenheit",
        "test_cases": [
            {"input": [0], "expected": 32},
            {"input": [100], "expected": 212},
            {"input": [-40], "expected": -40}
        ]
    },
    {
        "task_id": 11,
        "description": "Write a function `caesar_cipher(string, key)` that encrypts the given string using the Caesar "
                       "cipher."
                       "Each letter should be shifted by `key` positions in the alphabet (preserving case and wrapping around at the end of the alphabet).",
        "function_name": "caesar_cipher",
        "test_cases": [
            {"input": ["abc", 1], "expected": "bcd"},
            {"input": ["abc", 3], "expected": "def"},
            {"input": ["zxy", 2], "expected": "zab"}
        ]
    },
    {
        "task_id": 12,
        "description": "Write a function `find_prime_numbers(n)` that returns a list of all prime numbers smaller "
                       "than `n`."
                       "Use the Sieve of Eratosthenes algorithm to improve efficiency.",
        "function_name": "find_prime_numbers",
        "test_cases": [
            {"input": [10], "expected": [2, 3, 5, 7]},
            {"input": [20], "expected": [2, 3, 5, 7, 11, 13, 17, 19]},
            {"input": [5], "expected": [2, 3]}
        ]
    },
    {
        "task_id": 13,
        "description": "Write a function `anagrams(string1, string2)` that checks if two given strings are anagrams "
                       "(contain the same letters in a different order).",
        "function_name": "anagrams",
        "test_cases": [
            {"input": ["listen", "silent"], "expected": True},
            {"input": ["hello", "world"], "expected": False},
            {"input": ["evil", "vile"], "expected": True}
        ]
    },
    {
        "task_id": 14,
        "description": "Write a function `most_frequent_element(list)` that takes a list of elements and returns the "
                       "most frequent element."
                       "If there is more than one such element, return any of them.",
        "function_name": "most_frequent_element",
        "test_cases": [
            {"input": [1, 2, 3, 2, 4], "expected": 2},
            {"input": [1, 1, 1, 2, 2], "expected": 1},
            {"input": [5, 6, 7], "expected": 5}
        ]
    },
    {
        "task_id": 15,
        "description": "Write a program that generates a random string of length `n` consisting of letters and digits. "
                       "Create a function `random_string(n)`.",
        "function_name": "random_string",
        "test_cases": [
            {"input": [5], "expected": "ab4c1"},
            {"input": [3], "expected": "z9d"},
            {"input": [10], "expected": "a7c1k6h2x0"}
        ]
    },
    {
        "task_id": 16,
        "description": "Write a function `solve_quadratic_equation(a, b, c)` that solves the quadratic equation of the form ax^2 + bx + c = 0. "
                       "Implement handling for different cases (one solution, two solutions, no real solutions).",
        "function_name": "solve_quadratic_equation",
        "test_cases": [
            {"input": [1, -3, 2], "expected": [2, 1]},
            {"input": [1, -2, 1], "expected": [1]},
            {"input": [1, 1, 1], "expected": "No real solution"}
        ]
    },
    {
        "task_id": 17,
        "description": "Write an algorithm `longest_increasing_subsequence(list)` that takes a list of numbers and "
                       "returns the longest increasing subsequence in the list."
                       "Use dynamic programming to optimize the solution.",
        "function_name": "longest_increasing_subsequence",
        "test_cases": [
            {"input": [10, 22, 9, 33, 21, 50], "expected": [10, 22, 33, 50]},
            {"input": [3, 2, 6, 4, 5], "expected": [2, 4, 5]},
            {"input": [3, 10, 2, 1, 20], "expected": [3, 10, 20]}
        ]
    },
    {
        "task_id": 18,
        "description": "Create a function `solve_sudoku(board)` that solves a Sudoku puzzle. "
                       "The function should take a 9x9 board with numbers and empty cells (represented as 0) and "
                       "return the solution or indicate that no solution exists.",
        "function_name": "solve_sudoku",
        "test_cases": [
            {"input": [[5, 3, 0, 0, 7, 0, 0, 0, 0], [6, 0, 0, 1, 9, 5, 0, 0, 0], [0, 9, 8, 0, 0, 0, 0, 6, 0], ...], "expected": "solved board"},
            {"input": [[0, 0, 0, 0, 0, 0, 0, 0, 0], ...], "expected": "solved board"}
        ]
    },
    {
        "task_id": 19,
        "description": "Write a function `find_maze_path(maze, start, end)` that takes a maze in the form of a 2D "
                       "array (0 represents a wall, 1 represents a path)"
                       "along with start and end points. The function should find a path from the start point to the end point using the BFS or DFS algorithm.",
        "function_name": "find_maze_path",
        "test_cases": [
            {
                "input": ([[0, 1, 0], [0, 1, 0], [0, 0, 0]], (0, 0), (2, 2)),
                "expected": "path found"
            },
            {
                "input": ([[0, 0, 0], [1, 1, 1], [0, 0, 0]], (0, 0), (2, 2)),
                "expected": "path found"
            }
        ]
    },
    {
        "task_id": 20,
        "description": "Implement a function `rle_compression(string)` that applies the run-length encoding (RLE) "
                       "compression algorithm."
                       "The function should take a string and return its compressed version, e.g., 'aaabbbbcc' should be converted to 'a3b4c2'.",
        "function_name": "rle_compression",
        "test_cases": [
            {"input": ["aaabbbbcc"], "expected": "a3b4c2"},
            {"input": ["abc"], "expected": "a1b1c1"},
            {"input": [""], "expected": ""}
        ]
    }
]
