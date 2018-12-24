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


class Stack {
    constructor() {
        this.datastore = []
        this.top = 0    // 记录栈顶的位置
    }

    pop() {
        return this.datastore[--this.top]
    }
    
    push(element) {
        this.datastore[this.top++] = element
    }

    peek() {
        return this.datastore[this.top - 1]
    }

    length() {
        return this.top
    }

    clear() {
        this.top = 0
    }
}

const l = console.log
const stack = new Stack()
stack.push('David')
stack.push('Raymond')
stack.push('Bryan')
l(stack.length())           // 3
l(stack.peek())             // Bryan
const popped = stack.pop()
l('the popped: ', popped)   // the poped: Bryan
l(stack.peek())             // Raymond
stack.push('Cynthia')   
l(stack.peek())             // Cynthia
stack.clear()   
l(stack.length())           // 0
l(stack.peek())             // undefined
stack.push('Clayton')
l(stack.length())           // 1

// 2-9进制转换
function mulBase(num, base) {
    const s = new Stack()
    do {
        s.push(num % base)
        num = Math.floor(num /= base)
    } while(num > 0)

    let result = ''
    while (s.length() > 0) {
        result += s.pop()
    }

    return result
}

let num = 32
let base = 2
let newNum = mulBase(num, base)
l(`${num} converted to base ${base} is ${newNum}`)  // 32 converted to base 2 is 100000

num = 125
base = 8
newNum = mulBase(num, base)
l(`${num} converted to base ${base} is ${newNum}`)  // 125 converted to base 8 is 175

// 简单阶乘
function factorial(n) {
    const s = new Stack()

    while (n > 1) {
        s.push(n--)
    }

    let result = 1
    while (s.length() > 0) {
        result *= s.pop()
    }

    return result
}

l(factorial(5))     // 120
