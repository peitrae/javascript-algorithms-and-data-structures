/**
 * Given a linked list, swap every two adjacent nodes and return its head.
 * You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)
 *
 * Link: https://leetcode.com/problems/swap-nodes-in-pairs
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var swapPairs = function (head) {
	if (!head || !head.next) {
		return head;
	}

	const tempNode = new ListNode();
	let prev = tempNode;
	let current = head;

	while (current && current.next) {
		prev.next = current.next;
		current.next = prev.next.next;
		prev.next.next = current;

		prev = current;
		current = current.next;
	}

	return tempNode.next;
};
