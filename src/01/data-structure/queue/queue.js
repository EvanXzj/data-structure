/**
 * 队列是一种列表，不同是队列只能在队尾插入元素，在队首删除元素。
 * 以下是用数组实现的队列
 * 是一种先入先出（FIFO, First-In-First-Out）的数据结构
 */

class StudyQueue {
    constructor() {
        this.dataStore = []
    }

    enqueue(element) {
        this.dataStore.push(element)
    }

    dequeue() {
        return this.dataStore.shift()
    }

    // 获取队首的元素
    front() {
        return this.dataStore[0]
    }

    //获取队尾的元素
    back() {
        return this.dataStore[this.dataStore.length - 1]
    }

    print(sep = ',') {
        console.log(this.dataStore.join(sep))
    }

    // 判断队列是否为空
    isEmpty() {
        return this.dataStore.length === 0
    }
}

module.exports = StudyQueue

// const log = console.log
// const queue = new StudyQueue()

// queue.enqueue('Meredith')
// queue.enqueue('Cynthia')
// queue.enqueue('Jennifer')
// queue.print()

// const dequeued = queue.dequeue()
// log('dequeued: %s\n', dequeued)
// queue.print(' | ')
// log(`Front of queue: ${queue.front()}`)
// log(`Back of queue: ${queue.back()}`)

// // Output:
// // Meredith,Cynthia,Jennifer
// // dequeued: Meredith

// // Cynthia | Jennifer
// // Front of queue: Cynthia
// // Back of queue: Jennifer
