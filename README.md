# Algorithm
Algorithm with node

# Permutations in Node.js

Overview
This function check if two strings are permutations of each other. A permutation means that both strings contain the same characters with the same frequencies, but potentially in a different order.

Features
Checks if two strings have the same length (a prerequisite for being permutations).
Uses a frequency counter to track character counts.
Efficiently determines if one string is a permutation of the other.

How to Use
Run the File:
node Permutations.js

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

# Bubble Sort in Node.js

Overview
Bubble Sort is a simple comparison-based sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.

How to Use
Run the Script:
node BubbleSort.js

Expected Output:
The console will output the sorted array:

[1, 2, 5, 6, 7, 8, 10, 18]

Explanation of the Algorithm
The outer loop (i) runs through the array, ensuring that each pass bubbles the largest unsorted element to its correct position.
The inner loop (j) performs comparisons between adjacent elements.
If the current element is greater than the next element, they are swapped.
The process repeats until the array is fully sorted.

Complexity:
Best Case: O(n) (if the array is already sorted).
Worst Case: O(n^2) (if the array is sorted in reverse order).

Limitation: Bubble Sort is inefficient for large datasets compared to other algorithms like Quick Sort or Merge Sort.




License

This code is released under the MIT License. Feel free to use and modify it as needed.


