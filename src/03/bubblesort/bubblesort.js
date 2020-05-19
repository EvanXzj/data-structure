function bubbleSort(array) {
    const len = array.length;

    for (let i = 0; i < len - 1; ++i) {
        for (let j = 0; j < len - i -1; j++) {
            if (array[j] > array[j+1]) {
                [array[j+1], array[j]] = [array[j], array[j+1]];
            }
        }
    }

    return array;
}

const array = [1, 3, 2, 6, 5, 7, 8, 9, 10, 0]
console.log(bubbleSort(array));
