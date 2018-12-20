function bubbleSort(arr) {
    const len = arr.length
    let temp

    for(let i = 0; i < len - 1; ++i) {
        for(let j = 0; j < len - 1 - i; ++j) { // 注意这里i的含义
            if (arr[j] > arr[j + 1]) {
                temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }

    return arr
}

module.exports = bubbleSort
