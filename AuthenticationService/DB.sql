CREATE DATABASE byt;


CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE Tasks (
    id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL
);

INSERT INTO Tasks (id, name, description) VALUES
(1, 'Task 1', 'Write a function `sum(a, b)` that takes two numbers as arguments and returns their sum.'),
(2, 'Task 2', 'Write a function `is_even(n)` that takes an integer and returns `True` if the number is even, or `False` otherwise.'),
(3, 'Task 3', 'Write a program that prints the numbers from 1 to 10, each on a new line.'),
(4, 'Task 4', 'Write a function `count_letters(string)` that takes a string and returns the number of letters (ignoring spaces).'),
(5, 'Task 5', 'Write a function `reverse_string(string)` that takes a string and returns it in reverse order.'),
(6, 'Task 6', 'Write a function `largest_number(list)` that takes a list of numbers and returns the largest value from the list.'),
(7, 'Task 7', 'Write a function `count_vowels(string)` that returns the number of vowels (a, e, i, o, u, y) in the given string.'),
(8, 'Task 8', 'Write a function `is_palindrome(string)` that checks if the given string is a palindrome (reads the same forwards and backwards).'),
(9, 'Task 9', 'Write a program that generates and prints a multiplication table from 1 to 10.'),
(10, 'Task 10', 'Write a function `celsius_to_fahrenheit(c)` that takes a temperature in Celsius and returns the temperature converted to Fahrenheit (formula: F = 9/5 * C + 32).'),
(11, 'Task 11', 'Write a function `caesar_cipher(string, key)` that encrypts the given string using the Caesar cipher. Each letter should be shifted by `key` positions in the alphabet (preserving case and wrapping around at the end of the alphabet).'),
(12, 'Task 12', 'Write a function `find_prime_numbers(n)` that returns a list of all prime numbers smaller than `n`. Use the Sieve of Eratosthenes algorithm to improve efficiency.'),
(13, 'Task 13', 'Write a function `anagrams(string1, string2)` that checks if two given strings are anagrams (contain the same letters in a different order).'),
(14, 'Task 14', 'Write a function `most_frequent_element(list)` that takes a list of elements and returns the most frequent element. If there is more than one such element, return any of them.'),
(15, 'Task 15', 'Write a program that generates a random string of length `n` consisting of letters and digits. Create a function `random_string(n)`.'),
(16, 'Task 16', 'Write a function `solve_quadratic_equation(a, b, c)` that solves the quadratic equation of the form ax^2 + bx + c = 0. Implement handling for different cases (one solution, two solutions, no real solutions).'),
(17, 'Task 17', 'Write an algorithm `longest_increasing_subsequence(list)` that takes a list of numbers and returns the longest increasing subsequence in the list. Use dynamic programming to optimize the solution.'),
(18, 'Task 18', 'Create a function `solve_sudoku(board)` that solves a Sudoku puzzle. The function should take a 9x9 board with numbers and empty cells (represented as 0) and return the solution or indicate that no solution exists.'),
(19, 'Task 19', 'Write a function `find_maze_path(maze, start, end)` that takes a maze in the form of a 2D array (0 represents a wall, 1 represents a path) along with start and end points. The function should find a path from the start point to the end point using the BFS or DFS algorithm.'),
(20, 'Task 20', 'Implement a function `rle_compression(string)` that applies the run-length encoding (RLE) compression algorithm. The function should take a string and return its compressed version, e.g., ''aaabbbbcc'' should be converted to ''a3b4c2''.');


CREATE TABLE Groups (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    admin_id INT NOT NULL,
    join_code VARCHAR(10) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (admin_id) REFERENCES Users(id) ON DELETE CASCADE
);

CREATE TABLE GroupMembers (
    id SERIAL PRIMARY KEY,
    group_id INT NOT NULL,
    user_id INT NOT NULL,
    role ENUM('admin', 'member') DEFAULT 'member',
    joined_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (group_id) REFERENCES Groups(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE
);

CREATE TABLE CompletedTasks (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    task_id INT NOT NULL,
    completed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE,
    FOREIGN KEY (task_id) REFERENCES Tasks(id) ON DELETE CASCADE
);