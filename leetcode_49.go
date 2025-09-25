package main

func groupAnagrams(strs []string) [][]string {
	resMap := map[string][]string{}
	for _, i := range strs {
		key := ""
		println(i)
		sortedByteArr := sortString([]byte(i))
		for _, j := range sortedByteArr {
			key += string(j)
		}
		temp := resMap[key]
		resMap[key] = append(temp, i)
	}
	resArr := make([][]string, 0)
	for _, val := range resMap {
		resArr = append(resArr, val)
	}
	return resArr
}

func sortString(val []byte) []byte {
	if len(val) <= 1 {
		return val
	}

	left := []byte{}
	right := []byte{}
	pivot := val[0]

	for i := 0; i < len(val); i++ {
		if i != 0 {

			if pivot > val[i] {
				left = append(left, val[i])
			} else if pivot <= val[i] {
				right = append(right, val[i])
			}
		}
	}

	return append(append([]byte{}, sortString(left)...), append([]byte{pivot}, sortString(right)...)...)
}