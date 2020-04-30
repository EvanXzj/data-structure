class PriorityQueue {
    constructor() {
        this.elements = []
    }

    enQueue(element, priority) {
        const enQueueElement = { element, priority }

        if (this.isEmpty()) {
            return this.elements.push(enQueueElement)
        }

        let added = false
        for (let i = 0; i < this.elements.length; i++) {
            if (priority < this.elements[i].priority) {
                added = true
                this.elements.splice(i, 0, enQueueElement);
                break
            }
        }

        if (!added) {
            this.elements.push(enQueueElement)
        }
    }

    deQueue() {
        return this.elements.shift()
    }

    isEmpty() {
        return this.elements.length === 0
    }

    print(sep = ',') {
        console.log(this.elements.map(item => item.element).join(sep))
    }

    peek() {
        return this.elements[0]
    }
}

module.exports = PriorityQueue

// const queue = new PriorityQueue();

// queue.enQueue('普通会员1', 5);
// queue.enQueue('普通会员2', 10);
// queue.print()
// queue.enQueue('VIP会员1', 3);
// queue.print()
// queue.enQueue('VIP会员2', 3);
// queue.print()
// queue.deQueue();
// queue.print()
// console.log(queue.peek().element)

// 普通会员1,普通会员2
// VIP会员1,普通会员1,普通会员2
// VIP会员1,VIP会员2,普通会员1,普通会员2
// VIP会员2,普通会员1,普通会员2
// VIP会员2
