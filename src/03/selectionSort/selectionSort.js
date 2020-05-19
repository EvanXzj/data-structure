function selectionSort(array) {
    const len = array.length;

    let minIndex;
    for (let i = 0; i < len - 1; i++) {
        minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }

        [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }

    return array;
}

const array = [1, 3, 2, 6, 5, 7, 8, 9, 10, 0]
console.log(selectionSort(array))
