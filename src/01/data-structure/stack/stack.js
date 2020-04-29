/**
 * 栈的简单实现
 *
 * 栈是一种特殊的列表，栈内的元素只能通过列表的一端访问，这一端称为栈顶。
 * 是一种后入先出（LIFO, later-in-first-out）的数据结构
 *
 * push
 * pop
 * peek  预览栈顶元素
 * length 返回栈内元素数量
 * clear 清空当前栈
 */
class StudyStack {
    constructor() {
        this.stack = []
        this.top = 0
    }

    pop() {
        return this.stack[--this.top]
    }

    push(element) {
        this.stack[this.top++] = element
    }

    peek() {
        return this.stack[this.top - 1]
    }

    length() {
        return this.top
    }

    clear() {
        this.top = 0
    }

    destroy() {
        this.stack = null
    }

    traversing(isBottom = false, sep = ',') {
        const temp = []
        if (isBottom) {
            for (let i = 0; i < this.top; i++) {
                temp.push(this.stack[i])
            }
        } else {
            for (let i = this.top - 1; i >= 0; i--) {
                temp.push(this.stack[i])
            }
        }

        console.log(temp.join(sep))
    }

    isEmpty() {
        return this.top === 0
    }
}

module.exports = StudyStack

// const log = console.log
// const stack = new StudyStack()
// stack.push('David')
// stack.push('Raymond')
// stack.push('Bryan')
// log(stack.length())           // 3
// log(stack.peek())             // Bryan
// const popped = stack.pop()
// log('the popped: ', popped)   // the poped: Bryan
// log(stack.peek())             // Raymond
// stack.push('Cynthia')
// log(stack.peek())             // Cynthia
// stack.clear()
// log(stack.length())           // 0
// log(stack.peek())             // undefined
// stack.push('Clayton')
// log(stack.length())           // 1
