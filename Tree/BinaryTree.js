/*create binary search tree*/

class Node {
    constructor(value) {
        this.value = value;
        this.left = null; // smaller
        this.right = null; // bigger
    }
}

function InsertNode(root, value) {
    if (root === null) {
        return new Node(value);
    }

    if (root.value <= value) {
        root.right = InsertNode(root.right, value);
    }
    else {
        root.left = InsertNode(root.left, value);
    }

    return root;
}

function Min(root, parent = null) {
    if (root === null)
        return { node: null, parent: null };
    if (root.left == null)
        return { node: root, parent };
    else
        return Min(root.left, root);

}

function Max(root, parent = null) {
    if (root === null)
        return { node: null, parent: null };
    if (root.right == null)
        return { node: root, parent };
    else
        return Max(root.right, root);

}

function Search(root, value) {
    if (root === null)
        return null;
    if (root.value === value)
        return root;
    if (value < root.value)
        return Search(root.left, value);
    else
        return Search(root.right, value);
}
/*
  Finds a node with the given value in a Binary Search Tree (BST) 
  and returns both the node and its parent.
 
  This function is useful for operations like deletion, where knowing 
  the parent node helps in restructuring the tree efficiently.
 
  @param {Node} node - The current node being searched.
  @param {number} value - The value to search for in the tree.
  @param {Node|null} parent - The parent of the current node (default: null).
  @returns {Object} An object containing:
    - {Node|null} node: The found node, or null if not found.
    - {Node|null} parent: The parent of the found node (or the last visited node if not found).
 */

function SearchNodeAndParent(root, value, parent = null) {
    if (root === null)
        return { node: root, parent };
    if (root.value === value)
        return { node: root, parent };
    if (value < root.value)
        return SearchNodeAndParent(root.left, value, root);
    else
        return SearchNodeAndParent(root.right, value, root);
}

function Delete(root, value) {
    const { node, parent } = SearchNodeAndParent(root, value);

    if (node === null)
        return root;  // If the value is not found, return the original tree unchanged.

    // Deleting the root of the tree
    if (parent === null) {
        if (node.right == null && node.left == null) return null;
        if (node.right == null) return node.left;
        if (node.left == null) return node.right;


        const successor = Min(node.right, node);// Find the successor (smallest value in the right subtree).

        // If the successor is not the direct child of the deleted node
        if (node.right !== successor.node) {
            // The successor's right child takes its place.
            successor.parent.left = successor.node.right;
            // The successor takes the right subtree of the deleted node
            successor.node.right = node.right;

        }

        // The successor takes the left subtree of the deleted node
        successor.node.left = node.left;

        return successor.node;

    }// Determine whether the deleted node is the left or right child of its parent
    const side = node.value < parent.value ? 'left' : 'right';

    if (node.right == null && node.left == null) {
        parent[side] = null;
        return root;
    }

    if (node.right == null) {
        parent[side] = node.left;
        return root;
    }

    if (node.left == null) {
        parent[side] = node.right;
        return root;
    }

    const successor = Min(node.right, node);// Find the successor (smallest value in the right subtree).
    parent[side] = successor.node;// Connect the successor to the deleted node's parent.

     // If the successor is not the direct child of the deleted node
    if (node.right !== successor.node) {
        // The successor's right child takes its place.
        successor.parent.left = successor.node.right;
        // The successor takes the right subtree of the deleted node.
        successor.node.right = node.right;
    }
    successor.node.left = node.left;// The successor takes the left subtree of the deleted node.

    return root;

}

const array = [5, 6, 7, 1, 2, 4, 6];
let tree = null;

array.forEach(i => {
    tree = InsertNode(tree, i);
});


console.log(JSON.stringify(tree, null, 2));

// const min = Min(tree);
// console.log("Min:", min.node.value,'Parent:',min.parent);

// const max = Max(tree);
// console.log("Max:", max.node.value,'Parent:', max.parent);

// const searchNode = Search(tree, 5);
// console.log("searchNode:", searchNode);


// const searchNodeAndParent = SearchNodeAndParent(tree, 4);
// console.log("searchNodeAndParent:", searchNodeAndParent);

console.log('before delete', JSON.stringify(tree, null, 2));
tree = Delete(tree, 6)
console.log('after delete', JSON.stringify(tree, null, 2));
