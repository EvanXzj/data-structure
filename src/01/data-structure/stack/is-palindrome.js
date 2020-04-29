/**
 * 判断是否为回文
 */

const StudyStack = require('./stack');

// version 0: 对于四个字节的字符处理有问题
function isPalindromeV0(str) {
    return str === str.split('').reverse().join('')
}

function isPalindrome(str) {
    const s = new StudyStack()
    for (const v of str) {
        s.push(v)
    }

    let rStr = ''
    while(s.length() > 0) {
        rStr += s.pop()
    }

    return str === rStr
}

module.exports = {
    isPalindromeV0,
    isPalindrome
}

// const log = console.log

// let str = 'a𠮷a'
// log(isPalindromeV0(str)) // false
// log(isPalindrome(str))  // true

// str = 'abcba'
// log(isPalindromeV0(str)) // true
// log(isPalindrome(str))  // true
