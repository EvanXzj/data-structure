/**
 * 循环链表：
 * 循环链表和单向链表相似， 节点类型一样。唯一的区别就是在创建循环链表的时候让其头节点的next属性指向自身
 *
 * 遇到过的面试题： 如何判断一个链表是一个环，即循环链表
 */

class Node {
    constructor(element) {
        this.element = element
        this.next = null
    }
}

class LoopLinkedList {
    constructor() {
        this.head = new Node('head')
        this.head.next = this.head
    }

    find(element) {
        let currNode = this.head

        while(currNode.next && currNode.element !== element) {
            if (currNode.next.element === 'head') {
                return currNode
            }

            currNode = currNode.next
        }

        return currNode
    }

    insertAfter(element, item) {
        const newNode = new Node(element)
        const currNode = this.find(item)
        newNode.next = currNode.next
        currNode.next = newNode
    }

    findPrevious(element) {
        let currNode = this.head

        while(currNode.next != null && currNode.next.element != element) {
            if (currNode.next.element === 'head') {
                return currNode
            }

            currNode = currNode.next
        }

        return currNode
    }

    remove(element) {
        const preNode = this.findPrevious(element)

        if (preNode.next != null && preNode.next.element !== 'head') {
            preNode.next = preNode.next.next
        }
    }

    display() {
        let currNode = this.head

        while(currNode.next != null && currNode.next.element != 'head') {
            console.log(currNode.next.element)
            currNode = currNode.next
        }
    }

    // 循环列表检测
    isLoopCheck() {
        let currNode = this.head

        while(currNode.next != null) {
            if (currNode.element != 'head' && currNode.next.element === 'head') {
                return true
            }

            currNode = currNode.next
        }

        return false
    }
}

const log = console.log
const cities = new LoopLinkedList()
cities.insertAfter('Conway', 'head')
cities.insertAfter('Carlisle', 'Russelliville')
cities.insertAfter('Alma', 'Carlisle')
cities.display()
log()
cities.remove('Alma')
cities.display()
log(cities.isLoopCheck())

