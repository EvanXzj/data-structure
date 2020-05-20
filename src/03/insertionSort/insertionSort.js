function insertionSort(array) {
    const len = array.length;

    let preIndex, current
    for (let i = 1; i < len; ++i) {
        preIndex = i - 1;
        current = array[i];

        while (preIndex >= 0 && array[preIndex] > current) {
            array[preIndex + 1] = array[preIndex]
            preIndex--
        }

        array[preIndex+1] = current
    }

    return array
}

const array = [1, 3, 2, 6, 5, 7, 8, 9, 10, 0]
console.log(insertionSort(array))
