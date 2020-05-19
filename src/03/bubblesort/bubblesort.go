package main

import (
    "fmt"
)

func bubbleSort(array []int) []int {
    length := len(array)

    for i := 0; i < length - 1; i++ {
        for j := 0; j < length - i - 1; j++ {
            if array[j] > array[j+1] {
                array[j], array[j+1] = array[j+1], array[j]
            }
        }
    }

    return array
}

func main() {
    arr := []int{12,32,52,1,3,56,74,24,8}
    fmt.Println(bubbleSort(arr))
}
