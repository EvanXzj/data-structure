// 最小堆
// 上浮调整
function upAdjust(array) {
    let childIndex = array.length - 1 // 新插入的元素都是在数组最后一个位置
    let parentIndex = Math.floor((childIndex - 1) / 2)

    // temp 保存插入的叶子节点，用于最后的赋值
    const temp = array[childIndex]
    while(childIndex > 0 && temp < array[parentIndex]) {
        array[childIndex] = array[parentIndex]
        childIndex = parentIndex
        parentIndex = Math.floor((childIndex - 1) / 2)
    }

    array[childIndex] = temp
}

// 递归方式的向上调整
function upAdjustRecursion(array, index) {
    if (index === 0) { // 堆顶了， 直接退出
        return;
    }

    const parentIndex = Math.floor((index - 1) / 2)

    // 与父亲结点相比较
    // 如果父亲节点的值大，就交换位置，否则就不调整了
    if (array[parentIndex] > array[index]) {
        [array[parentIndex], array[index]] = [array[index], array[parentIndex]]
        // 继续向上调整
        upAdjustRecursion(array, parentIndex)
    }
}

// const array = [1, 3, 2, 6, 5, 7, 8, 9, 10, 0]
// // upAdjust(array) // 新插入节点0
// upAdjustRecursion(array, 9)
// console.log(array)

/**
 * @description 下沉调整
 *
 * @param {*} array 待调整的堆
 * @param {*} parentIndex 要“下沉”的父节点
 * @param {*} length 堆的有效大小
 */
function downAdjust(array, parentIndex, length) {
    const temp = array[parentIndex]

    let childIndex = 2 * parentIndex + 1
    while(childIndex < length) {
        // 如果有右孩子，且右孩子小于左孩子的值，则定位到右孩子
        if (childIndex + 1 < length && array[childIndex] > array[childIndex + 1]) {
            childIndex++
        }

        // 如果父节点小于或等于任何一个孩子的值，则直接跳出
        if (temp <= array[childIndex]) {
            break
        }

        array[parentIndex] = array[childIndex]
        parentIndex = childIndex
        childIndex = 2 * parentIndex + 1
    }

    array[parentIndex] = temp
}

// 构建堆
function buildHeap(array) {
    // 从最后一个非叶子节点开始，依次做下沉调整
    // 最后一个非叶子节点是最后一个节点(index = array.length - 1)的双亲， 又 parent = (child - 1) / 2,
    //  所以最后一个非叶子节点的下标是 (array.length - 2 ) / 2
    for(let i = Math.floor((array.length - 2)/ 2); i >= 0; i--) {
        downAdjust(array, i, array.length)
    }
}

// const array2 = [7,1,3,10,5,2,8,9,6]
// buildHeap(array2)
// console.log(array2)
