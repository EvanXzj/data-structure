// 计数排序
function countSort(array) {
    // 1. 计算素组中最大的值
    const max = Math.max(...array)

    // 2. 根据数组最大值确定统计素组长度
    const countArray = Array.from({length: max + 1}, () => 0)

    // 3. 遍历数组填充统计数组
    for(let i = 0; i < array.length; i++) {
        countArray[array[i]]++
    }

    // 4. 遍历统计数组， 输出结果
    let sortedIndex = 0
    const sortedArray = Array.from({length: array.length})
    for(let i = 0; i < countArray.length; i++) {
        for(let j = 0; j < countArray[i]; j++) {
            sortedArray[sortedIndex++] = i
        }
    }

    return sortedArray
}

module.exports = countSort

// const array = [4,4,6,5,3,2,8,1,7,5,6,0,10]
// console.log(countSort(array)) // [ 0, 1, 2, 3, 4, 4, 5, 5, 6, 6, 7, 8, 10 ]

// // 优化的版本查看P140
