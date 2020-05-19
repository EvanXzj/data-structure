package main

import (
	"fmt"
)

func selectionSort(array []int) []int {
	length := len(array)

	for i := 0; i < length-1; i++ {
		minIndex := i
		for j := i + 1; j < length; j++ {
			if array[j] < array[minIndex] {
				minIndex = j
			}
		}
		array[minIndex], array[i] = array[i], array[minIndex]
	}

	return array
}

func main() {
	arr := []int{12, 32, 52, 1, 3, 56, 74, 24, 8}
	fmt.Println(selectionSort(arr))
}
