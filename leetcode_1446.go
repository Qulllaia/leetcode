package main

func main_1446() {
	println(maxPower("cc"))
}

func maxPower(s string) int {
	if len(s) == 1 {
		return 1
	}
	maxVal := 1
	counter := 1
	runes := []rune(s)
	currentRune := runes[0]
	for i := 1; i < len(runes); i++ {
		if currentRune != runes[i] {
			if counter > maxVal {
				maxVal = counter
			}
			counter = 1
			currentRune = runes[i]
		} else {
			counter++
		}
	}
	if counter > maxVal {
		return counter
	}
	return maxVal
}