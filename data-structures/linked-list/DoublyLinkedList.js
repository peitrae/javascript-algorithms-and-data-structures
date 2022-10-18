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

	/**
	 * @returns {Node}
	 */
	pop() {
		/**
		 * IF the list length is 0
		 *    return null
		 *
		 * SET current to the tail
		 * IF the list length is 1
		 *    SET the head to null
		 *    SET the tail to null
		 * ELSE
		 *    SET the tail equal to the prev of the tail
		 *    SET the next of the tail to null
		 *
		 * SET the prev of current to null
		 *
		 * length--
		 * return current
		 *
		 */

		if (this.length === 0) {
			return null;
		}

		const current = this.tail;

		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = this.tail.prev;
			this.tail.next = null;
		}

		current.prev = null;
		this.length--;

		return current;
	}

	/**
	 *
	 * @param {*} val
	 * @returns {DoublyLinkedList}
	 */
	unshift(val) {
		/**
		 * IF the length is 0
		 *    SET the tail to the new node
		 * ELSE
		 *    SET the next of the new node to the head
		 *    SET the prev of the head to the new node
		 *
		 * SET the head to the new node
		 * length++
		 *
		 * return the list
		 */

		const newNode = new Node(val);

		if (this.length === 0) {
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head.prev = newNode;
		}

		this.head = newNode;
		this.length++;

		return this;
	}

	/**
	 * @returns {Node}
	 */
	shift() {
		/**
		 * 30 <-> 20 <-> 10
		 *
		 * IF the length is 0, return null
		 *
		 * SET current to the head
		 *
		 * IF the length is 1
		 *    SET the head to null
		 *    SET the tail to null
		 * ELSE
		 *    SET the head to the next of the head
		 *    SET the prev of the head to null
		 *
		 * SET the next of current to null
		 *
		 * length--
		 * return current
		 *
		 */

		if (this.length === 0) {
			return null;
		}

		const current = this.head;

		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = this.head.next;
			this.head.prev = null;
		}

		current.next = null;
		this.length--;

		return current;
	}

	// get(index)

	// set(val, index)

	// insert(val, index)

	// remove(index)

	// reverse()

	// toArray()
}

const list = new DoublyLinkedList();
