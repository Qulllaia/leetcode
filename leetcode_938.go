package main

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func main938() {
	root := TreeNode{
		Val: 10,
		Left: &TreeNode{Val: 5,
			Left:  &TreeNode{Val: 3},
			Right: &TreeNode{Val: 7},
		},
		Right: &TreeNode{Val: 15,
			Left:  nil,
			Right: &TreeNode{Val: 18},
		},
	}

	println(rangeSumBST(&root, 7, 15))
}

func rangeSumBST(root *TreeNode, low int, high int) int {
	returnValue := 0

	if root.Val >= low && root.Val <= high {
		returnValue = root.Val

	}
	if root.Left == nil && root.Right == nil {
		return returnValue
	}

	if root.Left != nil && root.Right != nil {
		return returnValue + rangeSumBST(root.Left, low, high) + rangeSumBST(root.Right, low, high)
	}

	if root.Left != nil {
		return returnValue + rangeSumBST(root.Left, low, high)
	} else {
		return returnValue + rangeSumBST(root.Right, low, high)
	}

}