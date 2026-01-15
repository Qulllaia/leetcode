package main

func main_1446() {
	println(maxPower("cc"))
}

func maxPower(s string) int {
	maxCounter := 1
	counter := 1
	var prevSymbol byte = s[0]
	for i := 1; i != len(s); i++ {
		if s[i] != prevSymbol {
			prevSymbol = s[i]
			counter = 1
		} else {

			counter++
			if maxCounter < counter {
				maxCounter = counter
			}
		}
	}

	return maxCounter
}

