/**
 * 堆排序算法步骤：
 * 1. 把无序数组构建成二叉堆。需要从小到大排序，则构建最大堆；需要从大到小排序，则构建最小堆。
 * 2. 循环删除堆顶元素，替换到二叉堆的末尾，调整堆产生新的堆顶。
 */

class HeapSorter {
    constructor(array, order = 'ASC') {
        this.order = order.toUpperCase()
        this.array = array
    }

    swap(i, j) {
        [this.array[i], this.array[j]] = [this.array[j], this.array[i]]
    }

    adjust(parentIndex, length) {
        const temp = this.array[parentIndex]
        let childIndex = 2 * parentIndex + 1

        while(childIndex < length) {
            if (this.order === 'ASC') {
                if (childIndex + 1 < length && this.array[childIndex + 1] > this.array[childIndex]) {
                    childIndex++
                }

                if (temp >= this.array[childIndex]) {
                    break
                }
            } else {
                if (childIndex + 1 < length && this.array[childIndex + 1] < this.array[childIndex]) {
                    childIndex++
                }

                if (temp <= this.array[childIndex]) {
                    break
                }
            }

            this.array[parentIndex] = this.array[childIndex]
            parentIndex = childIndex
            childIndex = 2 * parentIndex + 1
        }

        this.array[parentIndex] = temp
    }

    sort() {
        for(let i = Math.floor((this.array.length - 2) / 2); i >= 0; i--) {
            this.adjust(i, this.array.length)
        }

        // 循环删除堆顶元素，移到集合尾部，调整堆产生新的堆顶。
        for(let i = this.array.length - 1; i > 0; i--) {
            // 最后一个元素和第一个元素互换
            this.swap(i, 0)
            // 下沉调整堆
            this.adjust(0, i)  // 注意这里的i, 把已经从堆顶删除了的元素排除了
        }
    }
}

const array1 = [1,3,2,6,5,7,8,9,10,0]
const heapSorter = new HeapSorter(array1)
heapSorter.sort()
console.log(array1)

const array2 = [1,3,2,6,5,7,8,9,10,0]
const heapSorter2 = new HeapSorter(array2, 'DESC')
heapSorter2.sort()
console.log(array2)

function downAdjust(array, parentIndex, length) {
    const temp = array[parentIndex]
    let childIndex = 2 * parentIndex + 1

    while(childIndex < length) {
        if (childIndex + 1 < length && array[childIndex + 1] > array[childIndex]) {
            childIndex++
        }

        if (temp >= array[childIndex]) {
            break
        }

        array[parentIndex] = array[childIndex]
        parentIndex = childIndex
        childIndex = 2 * parentIndex + 1
    }

    array[parentIndex] = temp
}

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}

function heapSort(array) {
    // 构建堆 {1}
    // 从最后一个非叶子节点开始，依次做下沉调整
    // 最后一个非叶子节点是最后一个节点(index = array.length - 1)的双亲， 又 parent = (child - 1) / 2,
    //  所以最后一个非叶子节点的下标是 (array.length - 2 ) / 2
    for(let i = Math.floor((array.length - 2)/ 2); i >= 0; i--) {
        downAdjust(array, i, array.length)
    }

    // 循环删除堆顶元素，移到集合尾部，调整堆产生新的堆顶。
    for(let i = array.length - 1; i > 0; i--) {
        // 最后一个元素和第一个元素互换
        swap(array, i, 0)
        // 下沉调整堆
        downAdjust(array, 0, i)  // 注意这里的i, 把已经从堆顶删除了的元素排除了
    }
}

const array = [1,3,2,6,5,7,8,9,10,0]
heapSort(array)
console.log(array)

