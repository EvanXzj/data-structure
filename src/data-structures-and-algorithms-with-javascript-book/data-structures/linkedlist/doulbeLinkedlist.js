/**
 * 单向列表从头结点到尾节点遍历很简单，但是反过来从后向前遍历就没那么简单了。
 * 双向链表可以解决这个问题： 给每个节点增加一个指向前驱节点的属性。
 */

class Node {
    constructor(element) {
        this.element = element
        this.previous = null
        this.next = null
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = new Node('head')
    }

    findLast() {
        let currNode = this.head

        while (currNode.next != null) {
            currNode = currNode.next
        }

        return currNode
    }

    // 反向遍历输出链表元素
    displayReverse() {
        let currNode = this.findLast()

        while (currNode.previous != null) {
            console.log(currNode.element)
            currNode = currNode.previous
        }
    }

    find(element) {
        let currNode = this.head

        while(currNode.next && currNode.element !== element) {
            currNode = currNode.next
        }

        return currNode
    }

    insertAfter(element, item) {
        const newNode = new Node(element)
        const currNode = this.find(item)
        newNode.next = currNode.next
        newNode.previous = currNode
        if (newNode.next != null) {
            newNode.next.previous = newNode
        }
        currNode.next = newNode
    }

    remove(element) {
        const currNode = this.find(element)

        if (currNode.next != null) {
            currNode.previous.next = currNode.next
            currNode.next.previous = currNode.previous

            currNode.next = null
            currNode.previous = null
        }
    }

    display() {
        let currNode = this.head

        while(currNode.next != null) {
            console.log(currNode.next.element)
            currNode = currNode.next
        }
    }
}

const log = console.log
const cities = new DoubleLinkedList()
cities.insertAfter('A', 'head')
cities.insertAfter('B', 'A')
cities.insertAfter('C', 'B')
cities.display()
log()
cities.displayReverse()

log()
cities.remove('B')
cities.display()
log()
cities.displayReverse()

log()
cities.insertAfter('B', 'A')
cities.display()
log()
cities.displayReverse()
