/**
 * Given the head of a sorted linked list, delete all duplicates such that each element appears only once.
 * Return the linked list sorted as well.
 *
 * Link: https://leetcode.com/problems/remove-duplicates-from-sorted-list
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
var deleteDuplicates = function (head) {
	/**
	 * SET current to the head
	 *
	 * Loop through the list
	 *    IF current value is the same as the next current value
	 *        SET the next of current to the next of the next of current
	 *    ELSE
	 *        SET current to the next of current
	 *
	 * RETURN the head
	 *
	 */

	if (!head || !head.next) {
		return head;
	}

	let current = head;

	while (current.next) {
		if (current.val === current.next.val) {
			current.next = current.next.next;
		} else {
			current = current.next;
		}
	}

	return head;
};
