/**
 * 快速排序是处理大数据集最快的排序算法之一
 * 它是一种分而治之的算法，通过递归的方式将数据一次分解为包含较小元素和较大元素的不同子序列， 重复至有序。
 */

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

const array = [44, 75, 23, 43, 55, 12, 64, 77, 33]
const sortedArray = quickSort(array)
console.log(sortedArray) // [ 12, 23, 33, 43, 45, 55, 64, 75, 77 ]

/**
 * 相对简单一点的写法
 * 算法步骤：
 * 1. 选择一个基准元素，将列表分割成两个子序列
 * 2. 对列表重新排序，将所有小于基准元素的值放在基准值前面，所有大于基准值的元素放在基准值后面
 * 3. 分别对较小元素的子序列和较大元素的子序列重复步骤1，2
 */
function quickSort2(arr) {
    if (arr.length === 0) {
        return []
    }

    const left = []
    const right = []
    const pivot = arr[0]

    for(let i = 1; i < arr.length; i++) { // start from i = 1
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return [...quickSort2(left), pivot, ...quickSort2(right)]
}

const array2= [44, 75, 23, 43, 55, 12, 64, 77, 33]
console.log(quickSort2(array2)) // [ 12, 23, 33, 43, 45, 55, 64, 75, 77 ]
