/**
 * TODO: 重写
 * 堆排序（Heap Sort）就是对简单选择排序的一种改进。
 *  在每次选择最小记录的同时，并根据比较结果对其他记录做出相应的调整。
 */
function swap(arr, i, j) {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

function heapAdjust(arr, s, m) {
    let temp, j
    temp = arr[s] // 需要调整的元素， 因为他是被交换过的元素

    for (let j = 2 * s; j <= m; j *= 2) { // 沿关键字较大的孩子节点向下筛选
        if (j < m && arr[j] < arr[j+1]) ++j

        if (temp > arr[j]) break

        arr[s] = arr[j]
        s = j
    }
    arr[s] = temp
}

function heapSort(arr) {
    // 将待排序列构成一个大顶堆
    for(let i = Math.floor(arr.length / 2); i > 0; i--){
        heapAdjust(arr, i, arr.length)
    }
    console.log(arr)
    // 逐步将每个最大值的根节点与末尾元素交换，并且再将剩余序列构成为大顶堆
    for(let i = arr.length; i > 0; i--) {
        swap(arr, 1, i) // 将堆顶记录和当前未排序序列的最后一个记录交换
        heapAdjust(arr, 1, i - 1)
    }

    return arr
}

module.exports = heapSort

// const arr = [,50, 10, 90, 30, 70, 40, 80, 60, 20]
// console.log(heapSort(arr))
