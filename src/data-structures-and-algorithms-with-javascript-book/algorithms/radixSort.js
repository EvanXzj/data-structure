/**
 * @description 基数排序
 * @param {Array} arr 
 */
function radixSort(arr) {
    const counter = []
    const maxDigit = `${Math.max(...arr)}`.length
    let [dev, mod] = [1, 10]

    for (let i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {
        // 入桶
        for (let j = 0; j < arr.length; ++j) {
            const bucketNo = Number.parseInt(arr[j] % mod / dev)
            if (counter[bucketNo] == null) {
                counter[bucketNo] = []
            }

            counter[bucketNo].push(arr[j])
        }

        let pos = 0
        // 出桶
        for (let k = 0; k < counter.length; ++k) {
            let value
            if (counter[k] != null) {
                while((value = counter[k].shift()) != null) {
                    arr[pos++] = value
                }
            }
        }
    }

    return arr
}

const array = [3, 44, 5, 15, 36, 26, 48, 38, 44, 50, 46, 2, 19]
const sortedArray = radixSort(array)
console.log(sortedArray)    // [ 2, 3, 5, 15, 19, 26, 36, 38, 44, 44, 46, 48, 50 ]
