function  shellSort(arr) {
    const len = arr.length
    let i, j, temp, gap = 1

    while(gap < len / 3) {
        gap = 3 * gap + 1
    }

    for(gap; gap >= 1; gap = (gap - 1) / 3) {
        for ( i = gap; i < len; ++i) {
            temp = arr[i]
            for(j = i; j >= 0 && arr[j - gap] > temp; j -= gap) {
                arr[j] = arr[j - gap]
            }
            arr[j] = temp
        }
        console.log('%O   // gap %d', arr, gap)
    }
}

const array = [61, 85, 19, 88, 68, 8, 70, 29]
shellSort(array)