/**
 * ? 归并排序
 * 原理：把一系列拍好序的子序列合并成一个大的完整有序序列
 *
 * 方法一： 先将数据集分解成为一组只有一个元素的数组，然后通过创建一组左右子数组来将他们慢慢合并起来
 * 每次合并都保存一部分排好序的数据，直到最后剩下的这个数组的所有数据都已排好序。
 */
function mergeSort(arr) {
    const len = arr.length

    if (len < 2) {
        return arr
    }

    const midIndex = Math.floor(len / 2)
    const left = arr.slice(0, midIndex)
    const right = arr.slice(midIndex)

    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
    const result = []

    // 两个数组元素比较， 先将最小的压入result
    while(left.length && right.length) {
        if (left[0] < right[0]) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }

    // 将比较之后的剩余的元素压入result, 如不支持...操作符，用while(left.length) {result.push(left.shift())}代替
    if (left.length) {
        result.push(...left)
    } else if (right.length) {
        result.push(...right)
    }

    return result
}

const array = [61, 85, 19, 88, 68, 8, 70, 29]
const sortedArray = mergeSort(array)

console.log(sortedArray) // [ 8, 19, 29, 61, 68, 70, 85, 88 ]
