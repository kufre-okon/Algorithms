class TreeNode {
    constructor(value) {
        this.data = value;
        this.left = null;
        this.right = null;
    }
}

var bTree1 = new TreeNode(1);
bTree1.left = new TreeNode(2);
bTree1.right = new TreeNode(3);
bTree1.left.left = new TreeNode(4);
bTree1.left.right = new TreeNode(5);

var bTree2 = new TreeNode(2);
bTree2.left = new TreeNode(4);
bTree2.right = new TreeNode(5);

/**
 * Check whether trees with roots as t1 and t2 are identical
 * @param {*} r1 
 * @param {*} r2 
 */
function areIdentical(r1, r2) {
    if (r1 == null && r2 == null)
        return true;
    if (r1 == null || r2 == null)
        return false;

    // check if the data of both roots is same and also that of the left & right
    // subtrees are same
    return (r1.data == r2.data && areIdentical(r1.left, r2.left) && areIdentical(r1.right, r2.right));
}

/**
 * This function returns true if t2 is a subtree of t1
 */
function isSubtree(t1, t2) {
    if (t2 == null)
        return true;
    if (t1 == null)
        return false;
    if (areIdentical(t1, t2))
        return true;

    // if the tree with root as current node doesn't match 
    // then try left and right subtress one by one
    return isSubtree(t1.left, t2) || isSubtree(t1.right, t2);
}


console.log(isSubtree(bTree1, bTree2));