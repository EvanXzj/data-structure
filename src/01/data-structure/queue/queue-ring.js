const InitSymbol = Symbol('InitSymbol')

/**
 * 环形队列
 * 入队根据tail%capacity进行队尾添加
 * 出队根据head%capacity进行队头出队
 *
 * tail 队尾指针
 * head 对头指针
 * capacity 队列容量
 * 通过queueLen跟踪队列的长度，不然不容易判断队列是空是满
 */
class RingQueue {
    constructor(capacity) {
        if (!capacity) {
            throw new Error('The capacity is required!')
        }

        this.capacity = capacity

        this[InitSymbol]()
    }

    [InitSymbol]() {
        this.queue = Array.from({length: this.capacity})
        this.queueLen = 0
        this.head = 0
        this.tail = 0
    }

    // 清空队列，内存保留
    clear() {
        this[InitSymbol]()
    }

    isEmpty() {
        return this.queueLen === 0
    }

    isOverflow() {
        return this.queueLen === this.capacity
    }

    enQueue(element) {
        if(this.isOverflow()) {
            return false
        }

        this.queue[this.tail] =  element
        this.tail++
        this.tail = this.tail % this.capacity
        this.queueLen++
        return true
    }

    deQueue() {
        if (this.isEmpty()) {
            throw new Error("The queue is empty")
        }

        const element = this.queue[this.head]
        this.head++
        this.head = this.head % this.capacity
        this.queueLen--
        return element
    }

    len() {
        return this.queueLen
    }

    destroy() {
        this.queue = null
    }

    // 元素遍历
    traversing() {
        for(let i = this.head; i < this.head + this.queueLen; i++) {
            console.log(this.queue[i % this.capacity])
        }
    }
}

module.exports = RingQueue

// const q1 = new RingQueue(6);

// q1.enQueue('a');
// q1.traversing();

// q1.enQueue('b');
// q1.enQueue('c');
// q1.enQueue('d');
// q1.enQueue('e');
// q1.enQueue('f');
// q1.traversing();

// console.log('出队: ', q1.deQueue());

// q1.enQueue('g');
// q1.traversing();

// console.log('出队: ', q1.deQueue());
// console.log('出队: ', q1.deQueue());

// q1.enQueue('h');

// console.log('出队: ', q1.deQueue());
// console.log('出队: ', q1.deQueue());
// console.log('出队: ', q1.deQueue());

// q1.traversing();

// q1.clear();
// q1.traversing();
