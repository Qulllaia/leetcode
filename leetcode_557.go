package main

import "strings"

func main_557() {
	println(reverseWords("Let's take LeetCode contest"))
}

func reverseWords(s string) string {
	string_vector := strings.Split(s, " ");
	temp_vector := []string{};
	for _, i := range(string_vector) {
		temp_vector = append(temp_vector, reverse(i))
	}

	return strings.Join(temp_vector, " ");
}

func reverse(s string) string {
	runes := []rune(s);
	pointer_1 := 0;
	pointer_2 := len(s)-1;

	for pointer_1 < pointer_2 {
		runes[pointer_1], runes[pointer_2] = runes[pointer_2], runes[pointer_1]
		pointer_1++;
		pointer_2--;
	}

	return string(runes)
}