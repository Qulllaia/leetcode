package main

import "fmt"

type ListNode struct {
	Val  int
	Next *ListNode
}

func main() {
	fmt.Println(mergeTwoLists(&ListNode{1, nil}, &ListNode{1, nil}).Next.Val)
}

func mergeTwoLists(list1 *ListNode, list2 *ListNode) *ListNode {
	pre_finalListNode := ListNode{}
	ListSearcher(&pre_finalListNode, list1, list2)
	finalListNode := pre_finalListNode.Next
	return finalListNode
}

func ListSearcher(finalListNode, l1, l2 *ListNode) (*ListNode, *ListNode, *ListNode) {
	if l1 != nil && l2 != nil {
		if l1.Val > l2.Val {
			finalListNode.Next = &ListNode{Val: l2.Val, Next: nil}
			return ListSearcher(finalListNode.Next, l1, l2.Next)
		} else {
			finalListNode.Next = &ListNode{Val: l1.Val, Next: nil}
			return ListSearcher(finalListNode.Next, l1.Next, l2)
		}
	} else {
		if l1 != nil {
			finalListNode.Next = &ListNode{Val: l1.Val, Next: nil}
			return ListSearcher(finalListNode.Next, l1.Next, l2)
		} else if l2 != nil {
			finalListNode.Next = &ListNode{Val: l2.Val, Next: nil}
			return ListSearcher(finalListNode.Next, l1, l2.Next)
		} else {
			return finalListNode, nil, nil
		}
	}
}
