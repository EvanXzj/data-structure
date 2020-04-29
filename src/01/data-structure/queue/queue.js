/**
 * 队列是一种列表，不同是队列只能在队尾插入元素，在队首删除元素。
 * 以下是用数组实现的队列
 * 是一种先入先出（FIFO, First-In-First-Out）的数据结构
 */

class Queue {
    constructor() {
        this.datastore = []
    }

    enqueue(element) {
        this.datastore.push(element)
    }

    dequeue() {
        return this.datastore.shift()
    }

    // 获取队首的元素
    front() {
        return this.datastore[0]
    }

    //获取队尾的元素
    back() {
        return this.datastore[this.datastore.length - 1]
    }

    print() {
        let str = ''
        for (let val of this.datastore) {
            str += `${val}\n`
        }

        return str
    }

    // 判断队列是否为空
    isEmpty() {
        return this.datastore.length <= 0
    }
}

const log = console.log

const queue = new Queue()
queue.enqueue('Meredith')
queue.enqueue('Cynthia')
queue.enqueue('Jennifer')
log(queue.print())
const dequeued = queue.dequeue()
log('dequeued: %s\n', dequeued)
log(queue.print())
log(`Front of queue: ${queue.front()}`)
log(`Back of queue: ${queue.back()}`)

/**
 * 优先队列，为每个元素设置权重，出队的时候按权重大的优先出列。
 */
