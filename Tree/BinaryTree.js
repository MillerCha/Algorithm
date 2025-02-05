/*create binary tree*/

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

    if (root.value < value) {
        root.right = InsertNode(root.right, value);
    }
    else {
        root.left = InsertNode(root.left, value);
    }

    return root;
}


const array = [5, 6, 7, 1, 2, 4,];
let tree = null;

array.forEach(i => {
    tree = InsertNode(tree, i);
});


console.log(JSON.stringify(tree, null, 2));
