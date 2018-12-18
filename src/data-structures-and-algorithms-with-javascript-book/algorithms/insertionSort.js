function insertionSort(arr) {
    const len = arr.length
    let preIndex, current

    for(let i = 1; i < len; ++i) {
        current = arr[i]
        preIndex = i - 1

        while(preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex + 1] = arr[preIndex]

            --preIndex
        }

        arr[preIndex + 1] = current
    }

    return arr
}


const array = [61, 85, 19, 88, 68, 8, 70, 29]
const sortedArray = insertionSort(array)

console.log(sortedArray) // [ 8, 19, 29, 61, 68, 70, 85, 88 ]
