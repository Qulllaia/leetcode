//21. Merge Two Sorted Lists

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

let l1 = new ListNode(1, new ListNode(2, new ListNode(4)));
let l2 = new ListNode(1, new ListNode(3, new ListNode(4)));

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  return mergeRecursion(list1, list2);
}

function mergeRecursion(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (!list1 && !list2) return null;
  if ((list1?.val || 0) < (list2?.val || 0))
    return new ListNode(list1?.val, mergeRecursion(list1?.next, list2));
  else return new ListNode(list2?.val, mergeRecursion(list1, list2?.next));
}
function toNumberFormatter(list: ListNode | null): string {
  if (list === null) return "";
  else return toNumberFormatter(list.next) + list?.val;
}
console.log(toNumberFormatter(mergeTwoLists(l1, l2)));
