package main

import (
    "fmt"
)

func insertionSort(array []int) []int {
    length := len(array)

    for i := 1; i < length; i++ {
        preIndex := i-1
        current := array[i]

        for preIndex >= 0 && current < array[preIndex] {
            array[preIndex+1] = array[preIndex]
            preIndex--
        }

        array[preIndex+1] = current
    }

    return array
}

func main() {
    arr := []int{12,32,52,1,3,56,74,24,8}
    fmt.Println(insertionSort(arr))
}
