/*create binary search tree*/

class Node {
    constructor(value){
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

function Min(root){
    if(root === null)
        return null;
    if(root.left == null)
        return root;
    else 
        return Min(root.left);

}

function Max(root){
    if(root === null)
        return null;
    if(root.right == null)
        return root;
    else 
        return Max(root.right);

}

function Search(root, value){
    if(root === null)
        return null;
    if(root.value === value)
        return root;
    if(value < root.value)
        return Search(root.left,value);
    else
        return Search(root.right,value);
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

function SearchNodeAndParent(root, value, parent = null){
    if(root === null)
        {root, parent};
    if(root.value === value)
        return {root, parent};
    if(value < root.value)
        return SearchNodeAndParent(root.left,value,root);
    else
        return SearchNodeAndParent(root.right,value,root);
}


const array = [5, 6, 7, 1, 2, 4,5];
let tree = null;

array.forEach(i => {
    tree = InsertNode(tree, i);
});


console.log(JSON.stringify(tree, null, 2));

const minNode = Min(tree);
console.log("Min:",minNode.value);

const maxNode = Max(tree);
console.log("Max:",maxNode.value);

const searchNode = Search(tree,5);
console.log("searchNode:",searchNode);


const searchNodeAndParent = SearchNodeAndParent(tree,4);
console.log("searchNodeAndParent:",searchNodeAndParent);
