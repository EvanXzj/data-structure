
const StudyStack = require('./stack');

/**
 * 平衡括号： 每一个左括号对应一个右括号
 *
 * 通过栈来解决问题的主要步骤：
 * 初始化一个空栈 {1}
 * 遍历需要检测的符号 {2}
 * 遍历需要检测的平衡符号都有哪些 {3}
 * 如果字符属于入栈的符号（[ { (...）将其入栈 {3.1}
 * 如果字符属于闭合的符号，先判断栈空间是否为空，空的情况下中断操作，否则进行出栈，如果出栈的字符也不是闭合符号对应的开放符号，检测失败，中断操作跳出循环 {3.2}
 * 每一次循环完成判断当前是否中断，如果已经中断操作，将不合法的字符入栈，中断最外层字符检测循环 {4}
 * 最后检测栈是否为空，如果为空则通过，否则不通过输出 {5}
 */
function isBalanceSymbol(str, detectionStr) {
    let isTerminate = false // 是否要终止
    const stack = new StudyStack() // {1}

    for (const s of str) { // {2}
        for(let i = 0; i < detectionStr.length; i+=2) { // {3}
            const enStackStr = detectionStr[i] // 入栈字符
            const deStackStr = detectionStr[i+1] // 出栈字符

            switch(s) {
                case enStackStr: // 入栈{3, 1}
                    stack.push(s)
                    break
                case deStackStr: // 出栈{3, 2}
                    if (stack.length() === 0) {
                        isTerminate = true
                    } else {
                        const str = stack.pop()
                        if (!str.includes(enStackStr)) {
                            isTerminate = true
                        }
                    }
                    break
            }

            if (isTerminate) break
        }

        if (isTerminate) { // 存在不匹配符号，提前终止 {4}
            stack.push(s)
            break
        }
    }

    return stack.length() === 0
}

module.exports = isBalanceSymbol

// const log = console.log
// const detectionStr = '[]()'; // 定义需要检测的平衡符号
// log(isBalanceSymbol('[()()[]', detectionStr)) // false
// log(isBalanceSymbol('()()][]', detectionStr)) // false
// log(isBalanceSymbol('()()[]', detectionStr)) // true
// log(isBalanceSymbol('(()())', detectionStr)) // true
