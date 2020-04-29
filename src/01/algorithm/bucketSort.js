const bubbleSort = require('./bubbleSort')
/**
 * @description 桶排序
 * @param {Array} arr
 *
 * @returns {Array} arr
 */
function bucketSort(arr, bucketSize) {
    const DEFAULT_BUCKET_SIZE = 5

    if (arr.length === 0) {
        return  arr
    }

    const minValue = Math.min(...arr)
    const maxValue = Math.max(...arr)

    // 桶的初始化
    bucketSize = bucketSize || DEFAULT_BUCKET_SIZE
    const bucketCount = Math.ceil((maxValue - minValue) / bucketSize)
    const buckets = Array.from({length: bucketCount})
    for (let i = 0; i < buckets.length; ++i) {
        buckets[i] = []
    }

    // 利用映射函数将数据分配到各个桶中, 映射函数的区分性越大排序速度越快
    for(let val of arr) {
        buckets[Math.floor((val - minValue) / bucketSize)].push(val)
    }

    arr.length = 0
    for (let i = 0; i < buckets.length; ++i) {
        bubbleSort(buckets[i])

        for (let j = 0; j < buckets[i].length; ++j) {
            arr.push(buckets[i][j])
        }
    }

    return arr
}

const array = [61, 85, 19, 88, 68, 8, 70, 29, 2, 10, 38, 40]
const sortedArray = bucketSort(array)
console.log(sortedArray)    // [ 2, 8, 10, 19, 29, 38, 40, 61, 68, 70, 85, 88 ]
