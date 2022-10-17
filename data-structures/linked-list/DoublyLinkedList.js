class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = null;
	}

	/**
	 *
	 * @param {*} val
	 * @returns {DoublyLinkedList}
	 */
	push(val) {
		/**
		 * IF the list is still empty
		 *    SET the head and the tail to the new node
		 * ELSE
		 *    SET the next of the tail to the new node
		 *    SET the prev of the new node to the tail
		 *    SET the tail to the new node
		 *
		 * length++
		 * return the list
		 */

		const newNode = new Node(val);

		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = newNode;
		}

		this.length++;

		return this;
	}

	// pop()

	// unshift(val)

	// shift()

	// get(index)

	// set(val, index)

	// insert(val, index)

	// remove(index)

	// reverse()

	// toArray()
}

const list = new DoublyLinkedList();
