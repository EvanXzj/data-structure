/**
 * 链表的简单实现
 */

class Node {
    constructor(element) {
        this.element = element
        this.next = null
    }
}

// 单向列表
class LinkedList {
    constructor() {
        this.head = new Node('head')
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
        currNode.next = newNode
    }

    findPrevious(element) {
        let currNode = this.head

        while(currNode.next != null && currNode.next.element != element) {
            currNode = currNode.next
        }

        return currNode
    }

    remove(element) {
        const preNode = this.findPrevious(element)

        if (preNode.next != null) {
            preNode.next = preNode.next.next
        }
    }

    display() {
        let currNode = this.head

        while(currNode.next != null) {
            console.log(currNode.next.element)
            currNode = currNode.next
        }
    }

    // 判断链表是否是一个环
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

module.exports = LinkedList

// const log = console.log
// const cities = new LinkedList()
// cities.insertAfter('Conway', 'head')
// cities.insertAfter('Russelliville', 'Conway')
// cities.insertAfter('Carlisle', 'Russelliville')
// cities.insertAfter('Alma', 'Carlisle')
// cities.display()
// cities.remove('Carlisle')
// log()
// cities.display()
// log(cities.isLoopCheck())

// Output:
// Conway
// Russelliville
// Carlisle
// Alma

// Conway
// Russelliville
// Alma
// false
