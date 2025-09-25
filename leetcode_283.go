package main

func moveZeroes(nums []int) {
	counter := 0
	for i := 0; i < len(nums); i++ {
		if nums[i] == 0 {
			nums = append(nums[:i], nums[i+1:]...)
			counter++
			i--
		}
	}
	for i := 0; i < counter; i++ {
		nums = append(nums, 0)
	}
}
