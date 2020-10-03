function get_level_ave(root) {
    let averages = [],
        queue = [];
    queue.unshift(root);

    while (queue.length) {
        let level_sum = 0;
        let node_count = queue.length;
        for (let i = 0; i < node_count; i++) {
            let node = queue.shift();
            level_sum += node.Val;
            if (node.LeftNode !== null)
                queue.unshift(node.LeftNode);
            if (node.RigthNode !== null)
                queue.unshift(node.RigthNode);
        }
        averages.push(level_sum / node_count);
    }
    return averages;
}

class Tree {
    constructor(value) {
        this.LeftNode = null;
        this.RigthNode = null;
        this.Val = value;
    }
}

var root = new Tree(10);
root.LeftNode = new Tree(5);
root.RigthNode = new Tree(7);
root.RigthNode.LeftNode = new Tree(2);
root.RigthNode.RigthNode = new Tree(4);

console.log(get_level_ave(root))