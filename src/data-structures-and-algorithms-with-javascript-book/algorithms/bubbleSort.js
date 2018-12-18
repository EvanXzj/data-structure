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

const array = [61, 85, 19, 88, 68, 8, 70, 29]
const sortedArray = bubbleSort(array)

console.log(sortedArray)    // [ 8, 19, 29, 61, 68, 70, 85, 88 ]
