def insertionSort(array):
    for i in range(1, len(array)):
        preIndex = i - 1
        current = array[i]
        while preIndex >= 0 and array[preIndex] > current:
            array[preIndex+1] = array[preIndex]
            preIndex-=1
        array[preIndex+1] = current
    return array

array = [1, 3, 2, 6, 5, 7, 8, 9, 10, 0]
print(insertionSort(array))
