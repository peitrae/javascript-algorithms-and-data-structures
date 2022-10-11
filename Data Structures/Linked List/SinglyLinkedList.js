class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	/**
	 * Add item to the end of linked list
	 * @param {any} val
	 * @returns {SinglyLinkedList}
	 */
	push(val) {
		/**
		 * IF the length is not 0
		 *    SET the next of tail to the new node
		 *    SET the new node to be the new tail
		 * ELSE
		 *    SET the new node to be the head and the tail
		 */

		const newNode = new Node(val);

		if (this.length) {
			this.tail.next = newNode;
			this.tail = newNode;
		} else {
			this.head = newNode;
			this.tail = this.head;
		}

		this.length++;

		return this;
	}

	/**
	 * Remove item at the end of linked list
	 * @returns {any}
	 */
	pop() {
		/**
		 * IF length is 0, return null
		 * SET current to the head
		 * SET new tail to current
		 * IF length is 1, set the head and the tail to null and return current
		 *
		 * WHILE the next of current is exist
		 *    SET the new tail the current
		 *    SET current to the next of current
		 *
		 * SET the tail to the new tail
		 *
		 * return current
		 */

		if (this.length === 0) {
			return null;
		}

		let current = this.head;
		let newTail = current;

		if (this.length === 1) {
			this.head = null;
			this.tail = null;
			this.length = 0;

			return current;
		}

		while (current.next) {
			newTail = current;
			current = current.next;
		}

		this.tail = newTail;
		this.tail.next = null;

		this.length--;

		return current;
	}

	/**
	 * Remove item at the beginning of linked list
	 * @returns {any}
	 */
	shift() {
		/**
		 * IF the length is less than 2, use pop method
		 * SET current to the head
		 * SET the head to the next of head
		 * IF the tail is 0, SET the tail value to be null
		 *
		 * return the current
		 */

		if (this.length < 2) {
			return this.pop();
		}

		const current = this.head;
		this.head = this.head.next;
		this.length--;

		if (this.length === 0) {
			this.tail = null;
		}

		return current;
	}

	// TODO: unshift (val)

	// TODO: get (index)

	// TODO: set (val, index)

	// TODO: insert (val, index)

	// TODO: remove (index)

	// TODO: reverse ()

	// TODO: print ()
}

const list = new SinglyLinkedList();
