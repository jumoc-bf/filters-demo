interface TreeNode {
    value: string;
    color: string;
    parent: TreeNode | null;
    children: TreeNode[];
}

// Create a node with a given value
// Create a node with a given value
function createNode(value: string, color = ""): TreeNode {
    return {
        value: value,
        color: color,
        parent: null,
        children: []
    };
}

// Add a child to a node
function addChild(parent: TreeNode, child: TreeNode, color = ""): void {
    child.parent = parent;
    parent.children.push(child);
    child.color = color || parent.color;
    parent.color = color || parent.color;
}

// Remove a child from a node
function removeChild(parent: TreeNode, child: TreeNode): void {
    const index = parent.children.indexOf(child);
    if (index !== -1) {
        child.parent = null;
        parent.children.splice(index, 1);
    }
}

// Set the root of the tree
function setRoot(value: string): TreeNode {
    return createNode(value, "red");
}

// Search for a node in the tree (recursively)
function searchNode(root: TreeNode, value: string): TreeNode | null {
    if (root.value === value) return root;

    for (const child of root.children) {
        const result = searchNode(child, value);
        if (result !== null) return result;
    }
    return null;
}

// Move a node to a new parent
function moveNode(root: TreeNode, nodeValue: string, newParentValue: string): void {
    const node = searchNode(root, nodeValue);
    const newParent = searchNode(root, newParentValue);

    if (node && newParent) {
        if (node.parent) {
            removeChild(node.parent, node);
        }
        addChild(newParent, node);
    } else {
        console.log("Node or new parent not found");
    }
}

// Print the tree (for debugging)
function printTree(node: TreeNode, level: number = 0): void {
    console.log(" ".repeat(level * 2) + node.value);
    for (const child of node.children) {
        printTree(child, level + 1);
    }
}

// Example usage
const tree = setRoot("A");
const nodeB = createNode("B");
const nodeC = createNode("C");
const nodeD = createNode("D");
const nodeE = createNode("E");
const nodeF = createNode("F");
const nodeH = createNode("H");

addChild(tree, nodeB);
addChild(tree, nodeC);
addChild(nodeB, nodeD, "green");
addChild(nodeB, nodeH);
addChild(nodeC, nodeE, "yellow");
addChild(nodeC, nodeF);

printTree(tree);

// Move node "D" from "B" to "C"
moveNode(tree, "D", "C");
printTree(tree);
console.log(tree);