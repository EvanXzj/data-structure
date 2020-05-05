const {bubbleSort}= require('./bubblesort.js')

/**
 * 桶排序
 */
function bucketSort(array, bucketSize = 5) {
    if (array.length <= 0) {
        return array
    }

    const minValue = Math.min(...array)
    const maxValue = Math.max(...array)

    const bucketCount = Math.ceil((maxValue - minValue) / bucketSize)
    const buckets = Array.from({length: bucketCount}, () => [])
    // 入桶
    for (const val of array) {
        buckets[Math.floor((val - minValue)/ bucketSize)].push(val)
    }

    array.length = 0
    // 对每个桶内的元素进行排序
    for(const b of buckets) {
        bubbleSort(b)

        for(const val of b) {
            array.push(val)
        }
    }

    return array
}

module.exports = bucketSort

// const array = [61, 85, 19, 88, 68, 8, 70, 29, 2, 10, 38, 40]
// const sortedArray = bucketSort(array)
// console.log(sortedArray)    // [ 2, 8, 10, 19, 29, 38, 40, 61, 68, 70, 85, 88 ]
