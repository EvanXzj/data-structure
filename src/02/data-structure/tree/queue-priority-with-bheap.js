/**
 * 使用二叉堆来实现优先队列
 * 对于最大堆来说
 */
class PriorityQueueWithHeap {
    constructor() {
        this.array = []
    }

    // 向上调整
    upAdjust() {
        let childIndex = this.array.length - 1
        let parentIndex = Math.floor((childIndex - 1) / 2)

        const temp = this.array[childIndex]

        while(childIndex > 0 && temp > this.array[parentIndex]) {
            this.array[childIndex] = this.array[parentIndex]
            childIndex = parentIndex
            parentIndex = Math.floor((childIndex - 1) / 2)
        }

        this.array[childIndex] = temp
    }

    // 入队
    enQueue(data) {
        this.array.push(data)
        this.upAdjust()
    }

    // 向下调整
    downAdjust() {
        let parentIndex = 0
        const temp = this.array[parentIndex]

        let childIndex = 2 * parentIndex + 1 // left child
        while(childIndex < this.array.length) {
            // 如果右孩子存在，且右孩子的值大于左孩子的值则定位到右孩子
            if(childIndex + 1 < this.array.length && this.array[childIndex + 1] > this.array[childIndex]) {
                childIndex++
            }

            // 如果父节点大于或等于任何一个孩子的值，则直接跳出
            if (temp >= this.array[childIndex]) {
                break
            }

            this.array[parentIndex] = this.array[childIndex]
            parentIndex = childIndex
            childIndex = 2 * parentIndex + 1
        }
        this.array[parentIndex] = temp
        this.array.length--
    }

    // 出队
    deQueue() {
        const head = this.array[0]
        // 让最后一个元素移动到堆顶
        this.array[0] = this.array[this.array.length - 1]
        this.downAdjust()
        return head
    }
}

module.exports = PriorityQueueWithHeap

// const priorityQueue = new PriorityQueueWithHeap()
// priorityQueue.enQueue(3)
// priorityQueue.enQueue(5)
// priorityQueue.enQueue(10)
// priorityQueue.enQueue(2)
// priorityQueue.enQueue(7)
// console.log(priorityQueue.deQueue()) // 10
// console.log(priorityQueue.deQueue()) // 7
