//2.Add Two Numbers

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

let list_node1 = new ListNode(2, new ListNode(3, new ListNode(4)));
let list_node2 = new ListNode(3, new ListNode(4));

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let first_value = BigInt(toNumberFormatter(l1));
  let second_value = BigInt(toNumberFormatter(l2));
  let sum_val = first_value + second_value;
  return toLinkedList(String(sum_val), String(sum_val).length - 1);
}

function toNumberFormatter(list: ListNode | null): string {
  if (list === null) return "";
  else return toNumberFormatter(list.next) + list?.val;
}

function toLinkedList(value: string, counter: number): ListNode | null {
  if (counter < 0) return null;
  else {
    console.log(value[counter], counter);
    return new ListNode(Number(value[counter]), toLinkedList(value, --counter));
  }
}
