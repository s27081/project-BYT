const taskList = [
    {
        id: 1,
        name: "Task 1",
        description: "Write a function `sum(a, b)` that takes two numbers as arguments and returns their sum."
    },
    {
        id: 2,
        name: "Task 2",
        description: "Write a function `is_even(n)` that takes an integer and returns `True` if the number is even, or `False` otherwise."
    },
    {
        id: 3,
        name: "Task 3",
        description: "Write a program that prints the numbers from 1 to 10, each on a new line."
    },
    {
        id: 4,
        name: "Task 4",
        description: "Write a function `count_letters(string)` that takes a string and returns the number of letters (ignoring spaces)."
    },
    {
        id: 5,
        name: "Task 5",
        description: "Write a function `reverse_string(string)` that takes a string and returns it in reverse order."
    },
    {
        id: 6,
        name: "Task 6",
        description: "Write a function `largest_number(list)` that takes a list of numbers and returns the largest value from the list."
    },
    {
        id: 7,
        name: "Task 7",
        description: "Write a function `count_vowels(string)` that returns the number of vowels (a, e, i, o, u, y) in the given string."
    },
    {
        id: 8,
        name: "Task 8",
        description: "Write a function `is_palindrome(string)` that checks if the given string is a palindrome (reads the same forwards and backwards)."
    },
    {
        id: 9,
        name: "Task 9",
        description: "Write a program that generates and prints a multiplication table from 1 to 10."
    },
    {
        id: 10,
        name: "Task 10",
        description: "Write a function `celsius_to_fahrenheit(c)` that takes a temperature in Celsius and returns the temperature converted to Fahrenheit (formula: F = 9/5 * C + 32)."
    },
    {
        id: 11,
        name: "Task 11",
        description: "Write a function `caesar_cipher(string, key)` that encrypts the given string using the Caesar cipher. Each letter should be shifted by `key` positions in the alphabet (preserving case and wrapping around at the end of the alphabet)."
    },
    {
        id: 12,
        name: "Task 12",
        description: "Write a function `find_prime_numbers(n)` that returns a list of all prime numbers smaller than `n`. Use the Sieve of Eratosthenes algorithm to improve efficiency."
    },
    {
        id: 13,
        name: "Task 13",
        description: "Write a function `anagrams(string1, string2)` that checks if two given strings are anagrams (contain the same letters in a different order)."
    },
    {
        id: 14,
        name: "Task 14",
        description: "Write a function `most_frequent_element(list)` that takes a list of elements and returns the most frequent element. If there is more than one such element, return any of them."
    },
    {
        id: 15,
        name: "Task 15",
        description: "Write a program that generates a random string of length `n` consisting of letters and digits. Create a function `random_string(n)`."
    },
    {
        id: 16,
        name: "Task 16",
        description: "Write a function `solve_quadratic_equation(a, b, c)` that solves the quadratic equation of the form ax^2 + bx + c = 0. Implement handling for different cases (one solution, two solutions, no real solutions)."
    },
    {
        id: 17,
        name: "Task 17",
        description: "Write an algorithm `longest_increasing_subsequence(list)` that takes a list of numbers and returns the longest increasing subsequence in the list. Use dynamic programming to optimize the solution."
    },
    {
        id: 18,
        name: "Task 18",
        description: "Create a function `solve_sudoku(board)` that solves a Sudoku puzzle. The function should take a 9x9 board with numbers and empty cells (represented as 0) and return the solution or indicate that no solution exists."
    },
    {
        id: 19,
        name: "Task 19",
        description: "Write a function `find_maze_path(maze, start, end)` that takes a maze in the form of a 2D array (0 represents a wall, 1 represents a path) along with start and end points. The function should find a path from the start point to the end point using the BFS or DFS algorithm."
    },
    {
        id: 20,
        name: "Task 20",
        description: "Implement a function `rle_compression(string)` that applies the run-length encoding (RLE) compression algorithm. The function should take a string and return its compressed version, e.g., 'aaabbbbcc' should be converted to 'a3b4c2'."
    }
];
export default taskList;