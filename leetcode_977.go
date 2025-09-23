package main

func not_main() {
	result := SquareAndSort([]int{-5, -3, -2, -1})
	for _, i := range result {
		println(i)
	}
}

func SquareAndSort(nums []int) []int {

	result := []int{}

	for _, i := range nums {
		result = append(result, i*i)
	}

	result = QuickSort(result)

	return result
}

func QuickSort(numbers []int) []int {
	if len(numbers) <= 1 {
		return numbers
	}
	middle := int(len(numbers) / 2)
	pivot := numbers[middle]

	right := make([]int, 0)
	left := make([]int, 0)

	for index, i := range numbers {
		if middle != index {
			if i < pivot {
				left = append(left, i)
			} else if i >= pivot {
				right = append(right, i)
			}
		}
	}
	return append(append([]int{}, QuickSort(left)...), append([]int{pivot}, QuickSort(right)...)...)
}
