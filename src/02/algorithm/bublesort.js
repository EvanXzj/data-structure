function bubbleSort(arr) {
    const len = arr.length
    let temp

    for(let i = 0; i < len - 1; ++i) {
        for(let j = 0; j < len - 1 - i; ++j) { // 注意这里i的含义
            if (arr[j] > arr[j + 1]) {
                temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }

    return arr
}

function bubbleSortV2(arr) {
    const len = arr.length
    let temp

    for(let i = 0; i < len - 1; ++i) {
        let isSorted = true // 有序标记值， 每一轮的初始值为true
        for(let j = 0; j < len - 1 - i; ++j) { // 注意这里i的含义
            if (arr[j] > arr[j + 1]) {
                temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                isSorted = false // 因为有元素进行交换，所以不是有序的， 标记变为false
            }
        }
        if (isSorted) {
            break
        }
    }

    return arr
}

function bubbleSortV3(arr) {
    const len = arr.length
    let temp
    let lastExchangeIndex = 0 // 记录最后一次交换的位置
    let sortBorder = arr.length - 1 // 无序数组的边界，每次比较都需要比到这个位置为止

    for(let i = 0; i < len - 1; ++i) {
        let isSorted = true // 有序标记值， 每一轮的初始值为true
        for(let j = 0; j < sortBorder; ++j) { // 注意这里i的含义
            if (arr[j] > arr[j + 1]) {
                temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp

                isSorted = false // 因为有元素进行交换，所以不是有序的， 标记变为false
                lastExchangeIndex = j // 更新为最后一次交换元素的位置
            }
        }
        sortBorder = lastExchangeIndex
        if (isSorted) {
            break
        }
    }

    return arr
}

// 鸡尾酒排序
function bubbleSortV4(arr) {
    for(let i = 0; i < Math.floor(arr.length / 2); i++) {
        let isSorted = true

        // 去(左到右遍历)
        for (let j = i; j < arr.length - i  - 1; j++) {
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
                isSorted = false
            }
        }

        if (isSorted) {
            break
        }

        // 回（右到左遍历）
        for(let j = arr.length-i-1; j > i; j--) {
            if (arr[j] < arr[j-1]) {
                [arr[j], arr[j-1]] = [arr[j-1], arr[j]]
                isSorted = false
            }
        }

        if (isSorted) {
            break
        }
    }

    return arr
}

// let array = [5,8,6,3,9,2,1,7]
// console.log(bubbleSortV2(array))

// array = [3,4,2,1,5,6,7,8]
// console.log(bubbleSortV3(array))

// array = [2,3,4,5,6,7,8,1]
// console.log(bubbleSortV4(array))


module.exports = {
    bubbleSort,
    bubbleSortV2,
    bubbleSortV3,
    bubbleSortV4
}
