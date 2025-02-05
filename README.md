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


# Binary Search Tree (BST) Implementation
This project implements a Binary Search Tree (BST) in JavaScript. The Node class represents a tree node with left and right children, where values smaller than the parent go to the left, and larger values go to the right.

The InsertNode function recursively inserts values into the tree, ensuring proper BST structure. The script initializes a tree from an array of numbers and prints the resulting tree in JSON format.

Performance:
The time complexity of inserting a value into a BST depends on the tree's balance:
Best case (Balanced tree): 
O(logn) – Each insertion follows a binary search pattern, reducing the search space by half at each step.
Worst case (Skewed tree): 
O(n) – If the tree becomes unbalanced (e.g., inserting sorted values without balancing), insertion degrades to linear time, resembling a linked list.
For optimal performance, self-balancing BSTs (e.g., AVL Tree, Red-Black Tree) should be used in scenarios requiring frequent insertions and lookups.

How to Use
Run the Script:
node Tree\BinaryTree

This implementation provides a simple and efficient way to build a BST from an unordered list of numbers. 🚀




License

This code is released under the MIT License. Feel free to use and modify it as needed.


