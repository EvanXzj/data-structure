function selectionSort(arr) {
    const len = arr.length
    let minIndex, temp

    for(let i = 0; i < len - 1; ++i) {
        minIndex = i
        for (let j = i + 1; j < len; ++j) {
            if (arr[j] < arr[minIndex]) { // 寻找最小的数
               minIndex = j
            }
        }
        temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }

    return arr
}

const array = [61, 85, 19, 88, 68, 8, 70, 29]
const sortedArray = selectionSort(array)

console.log(sortedArray) // [ 8, 19, 29, 61, 68, 70, 85, 88 ]
