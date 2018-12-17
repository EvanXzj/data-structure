// 交换元素
function swap(arr, i, j) {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

// 分区
function partition(arr, left, right) {
    const pivot = left
    let index = pivot + 1

    for(let i = index; i <= right; ++i) {
        if (arr[i] < arr[pivot]) {
            swap(arr, i, index)     // 将较小的值移到基准值后面
            index++                 // 记录下一个可交换的位置
        }
    }
    swap(arr, pivot, index - 1)     // 将基准值放到“中间”， 即与较小值中的最后一个交换位置

    return index -1
}

// 递归分区，排序
function _quickSort(arr, left, right) {
    if (left < right) {
        const partitionIndex = partition(arr, left, right)
        _quickSort(arr, left, partitionIndex - 1)
        _quickSort(arr, partitionIndex + 1, right)
    }
}

function quickSort(arr) {
    _quickSort(arr, 0, arr.length - 1)

    return arr
}

const array = [61, 85, 19, 88, 68, 8, 70, 29]
const sortedArray = quickSort(array)

console.log(sortedArray) // [ 8, 19, 29, 61, 68, 70, 85, 88 ]