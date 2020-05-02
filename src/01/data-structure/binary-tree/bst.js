class Node {
    constructor(data, left, right) {
        this.data = data
        this.left = left
        this.right = right
    }

    showData() {
        return this.data
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
        this.knots = 0 // 节点数
    }

    /**
     * ! 插入元素步骤:
     *
     * ! 1. 检查改树是否为一个新树， 如果是，那么该节点就是根节点； 反之下一步
     * ! 2. 遍历树设置根节点为当前节点
     * ! 3. 如果待插入节点保存的节点小于当前节点，则设置新的当前节点为原节点的左节点； 反之，执行第5步。
     * ! 4. 如果当前节点的左节点为null，就将新的节点插入这个位置，退出循环； 反之执行下一次循环。
     * ! 5. 设置新的当前节点为原节点的右节点
     * ! 6. 如果当前节点的右节点为null，就将新的节点插入这个位置，退出循环； 反之执行下一次循环。
     */
    insert(data) {
        const newNode = new Node(data, null, null)
        this.knots++

        if (this.root == null) {
            this.root = newNode // {1}
        } else {
            let currNode = this.root // {2}
            let parent
            while(true) {
                parent = currNode
                if (data < currNode.data) { // {3}
                    currNode = currNode.left
                    if (currNode == null) { // {4}
                        parent.left = newNode
                        break
                    }
                } else {
                    currNode = currNode.right // {5}
                    if (currNode == null) { // {6}
                        parent.right = newNode
                        break
                    }
                }
            }
        }
    }

    // 中序遍历
    inOrder(node) {
        if (node != null) {
            this.inOrder(node.left)
            console.log(node.showData())
            this.inOrder(node.right)
        }
    }

    // 先序遍历
    preOrder(node) {
        if (node != null) {
            console.log(node.showData())
            this.preOrder(node.left)
            this.preOrder(node.right)
        }
    }

    // 后序遍历
    postOrder(node) {
        if (node != null) {
            this.postOrder(node.left)
            this.postOrder(node.right)
            console.log(node.showData())
        }
    }

    // 查找最小值
    getMin() {
        const minNode = this.findMinNode(this.root)

        return minNode.data
        // or return minNode
    }

    // 查找最大值
    getMax() {
        const maxNode = this.findMaxNode(this.root)

        return maxNode.data
        // or return maxNode
    }

    // 查找指定值节点
    find(data) {
        let currNode = this.root
        while(currNode != null) {
            if (currNode.data === data) {
                return currNode
            } else if (data < currNode.data) {
                currNode = currNode.left
            } else {
                currNode = currNode.right
            }
        }

        return null
    }

    // 删除节点三中情况
    // 1. 被删除节点为叶子节点；
    // 2. 被删除节点仅有一个子节点（子树）；
    // 3. 被删除节点有两个子节点（子树）
    // 若果待删除节点包含连个子节点，做法有二： 1. 查找待删节点左子树最大值； 2. 查找待删节点右子树最小值
    // 通过最大(小)创建临时变量，将临时变量的值复制到待删除节点上，然后再删除临时节点
    remove(data) {
        this.root = this.removeNode(this.root, data)
        this.knots--
    }

    removeNode(currNode, data) {
        if (currNode == null) {
            return null
        }

        if (data == currNode.data) {
            // 删除叶子节点: 待删除节点的父节点指向null
            if (currNode.left == null && currNode.right == null) {
                return null
            }

            // 待删除节点没有左子节点, 其父节点指向右子节点
            if (currNode.left == null) {
                return currNode.right
            }

            // 待删除节点没有右子节点, 其父节点指向左子节点
            if (currNode.left == null) {
                return currNode.right
            }

            // 有两个子节点的节点
            const tempNode = this.findMinNode(currNode.right)
            currNode.data = tempNode.data
            currNode.right = this.removeNode(currNode.right, tempNode.data)
            return currNode
        } else if (data < currNode.data) {
            currNode.left = this.removeNode(currNode.left, data)
            return currNode
        } else {
            currNode.right = this.removeNode(currNode.right, data)
            return currNode
        }
    }

    findMinNode(node) {
        while(node && node.left != null) {
            node = node.left
        }

        return node
    }

    findMaxNode(node) {
        while(node && node.right != null) {
            node = node.right
        }

        return node
    }

    getTreeDepth(node) {
        let deep = 0
        if (node) {
            const ldepth = this.getTreeDepth(node.left)
            const rdepth = this.getTreeDepth(node.right)
            deep = (ldepth > rdepth ? ldepth : rdepth ) + 1
        }

        return deep
    }
}

module.exports = BinarySearchTree

// const bst = new BinarySearchTree()
// bst.insert(23)
// bst.insert(45)
// bst.insert(16)
// bst.insert(37)
// bst.insert(3)
// bst.insert(99)
// bst.insert(22)

// bst.inOrder(bst.root) // 3 16 22 23 37 45 99
// bst.preOrder(bst.root) // 23 16 3 22 45 37 99
// bst.postOrder(bst.root) // 3 22 16 37 99 45 23

// console.log(bst.getMin()) // 3
// console.log(bst.getMax()) // 99
// console.log(bst.find(3)) // Node { data: 3, left: null, right: null }
// console.log(bst.find(16))
// // Node {
// //     data: 16,
// //     left: Node { data: 3, left: null, right: null },
// //     right: Node { data: 22, left: null, right: null }
// // }

// bst.remove(45)
// bst.inOrder(bst.root) // 3 16 22 23 37 99
// bst.preOrder(bst.root) // 23 16 3 22 99 37
// bst.postOrder(bst.root) // 3 22 16 37 99 23
// console.log(bst.getTreeDepth(bst.root)) // 3
// bst.remove(3)
// bst.remove(22)
// bst.remove(37)
// console.log(bst.getTreeDepth(bst.root)) // 2
// bst.remove(16)
// console.log(bst.getTreeDepth(bst.root)) // 2
// bst.remove(99)
// console.log(bst.getTreeDepth(bst.root)) // 1
// bst.remove(23)
// console.log(bst.getTreeDepth(bst.root)) // 0
