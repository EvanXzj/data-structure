const StudyStack = require('../../01/data-structure/stack/stack')

// pivot = array[0] 如果数组原来是逆序的就起不到分治的效果，可通过随机选择来解决
function quickSort(array) {
    if (array.length === 0) {
        return []
    }

    const left = []
    const right = []
    const pivot = array[0]

    for(let i = 1; i < array.length; ++i) {
        if (array[i] < pivot) {
            left.push(array[i])
        } else {
            right.push(array[i])
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)]
}

// 非递归实现快速排序(Stack)
function quickSortWithStack(array) {
    // 使用栈来代替递归的函数栈
    const quickSortStack = new StudyStack()
    const rootElement = { left: 0, right: array.length - 1}
    quickSortStack.push(rootElement)

    // 循环结束条件： 栈为空
    while(!quickSortStack.isEmpty()) {
        // 栈顶元素出栈，得到起止上下标
        const param = quickSortStack.pop()
        // 获取分区index
        const partitionIndex = partition(array, param.left, param.right)

        // 根据基准值Index分区入栈
        if (param.left < partitionIndex - 1) {
            quickSortStack.push({left: param.left, right: partitionIndex - 1})
        }

        if (partitionIndex + 1 < param.right) {
            quickSortStack.push({left: partitionIndex + 1, right: param.right})
        }
    }
}

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

const array = [4,7,6,5,3,2,8,1]
quickSortWithStack(array)
console.log(array)

let array2 = [4,7,6,5,3,2,8,1]
array2 = quickSort(array2)
console.log(array2)
