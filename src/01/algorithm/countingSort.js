/**
 * @description 计数排序
 * @param {Array} arr
 */
function countingSort(arr) {
    const len = arr.length
    const result = []
    const bucketMap = new Map()

    for(let i = 0; i < len; ++i) {
        const val = arr[i]
        if (bucketMap.has(val)) {
            bucketMap.set(val, bucketMap.get(val) + 1)
        } else {
            bucketMap.set(val, 1)
        }
    }

    const keys = [...new Set(arr)].sort((a, b) => a - b)

    for(let j = 0; j < keys.length; ++j) {
        let counts = bucketMap.get(keys[j])
        while(counts && counts > 0) {
            result.push(keys[j])
            --counts
        }
    }

    return result
}

function countingSortV2(arr) {
    const maxValue = Math.max(...arr),
        bucket = new Array(maxValue + 1).fill(0),
        arrLen = arr.length,
        bucketLen = maxValue + 1
    let sortedIndex = 0

    for (let i = 0; i < arrLen; ++i) {
        bucket[arr[i]]++
    }

    for (let j = 0; j < bucketLen; ++j) {
        while(bucket[j] > 0) {
            arr[sortedIndex++] = j
            bucket[j]--
        }
    }

    return arr
}

module.exports = {
    countingSort,
    countingSortV2
}

// const array = [4,4,3,4,4,3,2,3,2,0,1]
// const sortedArray = countingSort(array)
// console.log(sortedArray)    // [ 0, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4 ]
