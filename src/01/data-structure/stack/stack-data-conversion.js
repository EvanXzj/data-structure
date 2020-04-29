/**
 * 进制转换，算法步骤如下：
 * 1. 最高位为num%base,余数入栈
 * 2. num = Math.floor(num/base)
 * 3. 重复 1，2直至没有余数
 * 4. 余数出栈拼接就得到转换后数字的字符串形式
 *
 * 注: base 为2-9， 如果超过9需要用字符替换
 */

const StudyStack = require('./stack')
const validStr = '0123456789ABCDEF' // 2 =< base <= 1

function dataConversion(num, base) {
    const s = new StudyStack()

    while(num != 0) {
        s.push(num%base)
        num = Math.floor(num/base)
    }

    let result = ''
    while(s.length() > 0) {
        result += validStr[s.pop()]
    }

    return result
}

module.exports = dataConversion

// const log = console.log

// let num = 1024
// let base = 8
// let newNum = dataConversion(num, base)
// log(`${num} converted to base ${base} is ${newNum}`)  // 32 converted to base 2 is 100000

// num = 125
// base = 8
// newNum = dataConversion(num, base)
// log(`${num} converted to base ${base} is ${newNum}`)  // 125 converted to base 8 is 175

// num = 1024
// base = 16
// newNum = dataConversion(num, base)
// log(`${num} converted to base ${base} is ${newNum}`)  // 1024 converted to base 16 is 400

// num = 3000
// base = 16
// newNum = dataConversion(num, base)
// log(`${num} converted to base ${base} is ${newNum}`)  // 3000 converted to base 16 is BB8
