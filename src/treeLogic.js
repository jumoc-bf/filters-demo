// Create a node with a given value
function createNode(value) {
    return {
        value: value,
        parent: null,
        children: []
    };
}
// Add a child to a node
function addChild(parent, child) {
    child.parent = parent;
    parent.children.push(child);
}
// Remove a child from a node
function removeChild(parent, child) {
    var index = parent.children.indexOf(child);
    if (index !== -1) {
        child.parent = null;
        parent.children.splice(index, 1);
    }
}
// Set the root of the tree
function setRoot(value) {
    return createNode(value);
}
// Search for a node in the tree (recursively)
function searchNode(root, value) {
    if (root === null)
        return null;
    if (root.value === value)
        return root;
    for (var _i = 0, _a = root.children; _i < _a.length; _i++) {
        var child = _a[_i];
        var result = searchNode(child, value);
        if (result !== null)
            return result;
    }
    return null;
}
// Move a node to a new parent
function moveNode(root, nodeValue, newParentValue) {
    var node = searchNode(root, nodeValue);
    var newParent = searchNode(root, newParentValue);
    if (node && newParent) {
        if (node.parent) {
            removeChild(node.parent, node);
        }
        addChild(newParent, node);
    }
    else {
        console.log("Node or new parent not found");
    }
}
// Print the tree (for debugging)
function printTree(node, level) {
    if (level === void 0) { level = 0; }
    if (node !== null) {
        console.log(" ".repeat(level * 2) + node.value);
        for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
            var child = _a[_i];
            printTree(child, level + 1);
        }
    }
}
// Example usage
var tree = setRoot("A");
var nodeB = createNode("B");
var nodeC = createNode("C");
var nodeD = createNode("D");
var nodeE = createNode("E");
var nodeF = createNode("F");
var nodeG = createNode("G");
addChild(tree, nodeB);
addChild(tree, nodeC);
addChild(nodeB, nodeD);
addChild(nodeC, nodeE);
addChild(nodeC, nodeF);
printTree(tree);
// Move node "D" from "B" to "C"
moveNode(tree, "D", "C");
printTree(tree);
console.log(tree);
