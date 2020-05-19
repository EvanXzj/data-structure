def selectionSort(array):
    for i in range(len(array) - 1):
        minIndex = i
        for j in range(i+1, len(array)):
            if array[j] < array[minIndex]:
                minIndex = j
        if i != minIndex:
            array[i], array[minIndex] = array[minIndex], array[i]
    return array

array = [1, 3, 2, 6, 5, 7, 8, 9, 10, 0]
print(selectionSort(array))
