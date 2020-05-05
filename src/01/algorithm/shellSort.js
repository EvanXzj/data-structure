/**
 * 第一层循环gap递减到1
 * 第二层循环从i = gap开始遍历到数组末尾
 * 第三层循环判断间隔为gap，范围[0,gap)内对应位置元素的大小，是否需要替换
 *
 * 在开始做最后一次（gap=1）处理时，大部分元素都会在正确的位置，算法就不需要对很多元素进行交换
 * 这就是希尔排序比插入排序更高效的地方
 */
function  shellSort(arr) {
    const len = arr.length
    let i, j, temp, gap = 1

    while(gap < len / 3) {
        gap = 3 * gap + 1
    }

    // for(gap; gap >= 1; gap = (gap - 1) / 3) {
    // }

    while(gap >= 1) {
        for ( i = gap; i < len; ++i) {
            temp = arr[i]
            for(j = i; j >= gap && arr[j - gap] > temp; j -= gap) { // 从i=gap开始往会找
                arr[j] = arr[j - gap]
            }
            arr[j] = temp
        }
        console.log('%O   // gap %d', arr, gap)

        gap = (gap - 1) / 3
    }

    return arr
}

module.exports = shellSort

// const array = [61, 85, 19, 88, 68, 8, 70, 29]
// const sortedArray = shellSort(array)
// console.log(sortedArray) // [ 8, 19, 29, 61, 68, 70, 85, 88 ]
