const StudyStack = require('./stack')

function factorial(n) {
    const s = new StudyStack()

    while(n > 1) {
        s.push(n--)
    }

    let result = 1
    while(s.length() > 0) {
        result *= s.pop()
    }

    return result
}

module.exports = factorial

// const log = console.log

// log(factorial(3)) // 6
// log(factorial(5)) // 120
// log(factorial(6)) // 720
