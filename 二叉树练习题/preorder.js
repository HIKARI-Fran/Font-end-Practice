// var preorderTraversal = function (root) {
//     let res = [];
//     let stack = [];
//     if (root) stack.push(root);
//     while (stack.length) {
//         let n = stack.pop();
//         res.push(n.val);
//         if (n.right) stack.push(n.right)
//         if (n.left) stack.push(n.left)
//     }

//     return res
// };
var preorderTraversal = function (root, array = []) {
    if (root) {
        array.push(root.val);
        preorderTraversal(root.left, array);
        preorderTraversal(root.right, array);
    }
    return array;
};
const root = [1, null, 2, 3];
preorderTraversal(root)