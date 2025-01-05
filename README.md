# Algorithm
Algorithm with node

Permutations Function in Node.js

Overview
This function check if two strings are permutations of each other. A permutation means that both strings contain the same characters with the same frequencies, but potentially in a different order.

Features
Checks if two strings have the same length (a prerequisite for being permutations).
Uses a frequency counter to track character counts.
Efficiently determines if one string is a permutation of the other.

How to Use

Install Node.js: Ensure Node.js is installed on your system.
Run the File:
node permutations.js

Expected Output:
The program will output false for the given example since str1 and str2 are not permutations.

Example Inputs and Outputs:

Input: Strings "123", "321"
Output: true
Explanation: Both strings contain the same characters.
 
Input: Strings "abc", "cba"
Output: true
Explanation: Both strings contain the same characters.

Input: Strings "abcd", "abce"
Output: false
Explanation: The character sets differ.

Performance:
The function has a time complexity of O(n), where n is the length of the strings. This is due to the two passes over the strings:
One pass to populate the frequency counter.
A second pass to validate against the frequency counter.

License:
This project is licensed under the MIT License. Feel free to use and modify as needed.
