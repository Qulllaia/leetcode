//219. Contains Duplicate II

package main

import (
	"fmt"
)


func main() {
	var input = []int{1,2,3,1,2,3}
	fmt.Println(containsNearbyDuplicate(input, 2));
}

func containsNearbyDuplicate(nums []int, k int) bool {
	for i := 0; i < len(nums); i++ {
		var valsToCheck int;
		if(i + (k+1) >= len(nums)){
			valsToCheck = len(nums)
		}else{
			valsToCheck = i + (k+1)
		}
		for j := (i + 1); j < valsToCheck; j++ {
			if nums[i] == nums[j]{
				return true;
			}
		}
	}
	return false
}
