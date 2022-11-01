/**
 * Given the head of a sorted linked list, delete all nodes that have duplicate numbers,
 * leaving only distinct numbers from the original list. Return the linked list sorted as well.
 *
 * Link: https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/
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
  
  SET tempNode to a new node
  SET the next of the tempNode to the head

  SET fast to the tempNode 
  SET slow to the tempNode
  
  LOOP through the list
      IF fast.val !== fast.next.val && fast.next.next === null || fast.next.val !== fast.next.next.val
          SET the next of slow to the next of fast
          SET slow to the its next node
          
      SET fast to the its next node

  SET the next of slow to the next of fast

  RETURN the next of the tempNode
  */

	const tempNode = new ListNode(null);
	tempNode.next = head;

	let fast = tempNode;
	let slow = tempNode;

	while (fast.next) {
		if (
			fast.val !== fast.next.val &&
			(fast.next.next === null || fast.next.val !== fast.next.next.val)
		) {
			slow.next = fast.next;
			slow = slow.next;
		}

		fast = fast.next;
	}

	slow.next = fast.next;

	return tempNode.next;
};
