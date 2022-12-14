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
	 * @returns {Node}
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
	 * @returns {Node}
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

	/**
	 * Add item at the beginning of the list
	 * @param {*} val
	 * @returns {SinglyLinkedList}
	 */
	unshift(val) {
		/**
		 * IF this.head is exist
		 *    SET the next of new node to the head
		 *    SET the head to the new node
		 * ELSE
		 *    SET the head to the new node
		 *    SET the tail to the head
		 */

		const newNode = new Node(val);

		if (this.head) {
			newNode.next = this.head;
			this.head = newNode;
		} else {
			this.head = newNode;
			this.tail = this.head;
		}

		this.length++;

		return this;
	}

	/**
	 * Add item at the beginning of the list
	 * @param {Number} index
	 * @returns {Node | null}
	 */
	get(index) {
		/**
		 * IF index less than 0 or more than list length, return null
		 *
		 * WHILE index is more than 0
		 *    SET current to the next of current
		 *    REDUCE index
		 *
		 * RETURN current
		 */

		if (index < 0 || index >= this.length) {
			return null;
		}

		let current = this.head;

		while (index > 0) {
			current = current.next;

			index--;
		}

		return current;
	}

	/**
	 *
	 * @param {*} val
	 * @param {Number} index
	 * @returns {Node}
	 */
	set(val, index) {
		/**
		 * SET current equal to node by index
		 * IF current is not exist, RETURN null
		 *
		 * SET current value to val
		 * RETURN current
		 */
		const current = this.get(index);

		if (!current) {
			return null;
		}

		current.val = val;

		return current;
	}

	/**
	 *
	 * @param {*} val
	 * @param {Number} index
	 * @returns {SinglyLinkedList | null}
	 */
	insert(val, index) {
		/**
		 * IF index is less than 0 or more than the length of the list, return null
		 * ELSE IF index is 0, insert by using unshift
		 * ELSE IF index is equal to the length of the list, insert by using push
		 *
		 * SET prev to the head
		 *
		 * WHILE index - 1 > 0
		 *    SET prev to the next of prev
		 *    index--
		 *
		 * SET the next of new node to the next of the prev
		 * SET the next of the prev to the new node
		 * length++
		 *
		 * return this
		 */

		if (index < 0 || index > this.length) {
			return null;
		} else if (index === 0) {
			return this.unshift(val);
		} else if (index === this.length) {
			return this.push(val);
		}

		const newNode = new Node(val);
		let prev = this.head;

		while (index - 1 > 0) {
			prev = prev.next;
			index--;
		}

		newNode.next = prev.next;
		prev.next = newNode;
		this.length++;

		return this;
	}

	/**
	 *
	 * @param {Number} index
	 * @returns {Node}
	 */
	remove(index) {
		/**
		 * IF index is less than 0 or more than the length of the list, return null
		 * ELSE IF index is 0, remove by using shift
		 * ELSE IF index is equal to the length of the list, remove by using pop
		 *
		 * SET current to the next of head
		 * SET prev to the head
		 *
		 * WHILE index > 1
		 *    SET prev to current
		 *    SET current to the next of current
		 *    index--
		 *
		 * SET the next of prev to the next of current
		 * length--
		 *
		 * return current
		 */

		if (index < 0 || index >= this.length) {
			return null;
		} else if (index === 0) {
			return this.shift();
		} else if (index === this.length - 1) {
			return this.pop();
		}

		let prev = this.head;
		let current = this.head.next;

		while (index > 1) {
			prev = current;
			current = current.next;
			index--;
		}

		prev.next = current.next;
		this.length--;

		return current;
	}

	/**
	 *
	 * @returns {SinglyLinkedList}
	 */
	reverse() {
		/**
		 * Reverse the head and the tail
		 *
		 * SET current to the head
		 * SET prev to null
		 * SET next to null
		 *
		 * Loop through the list
		 *    SET the next to the next of current node
		 *    SET the next of the current node to the prev
		 *    SET the prev to the current node
		 *    SET the current node to the next
		 *
		 * return the list
		 */

		let current = this.head;
		this.head = this.tail;
		this.tail = current;

		let prev = null;
		let next = null;

		for (let i = 0; i < this.length; i++) {
			next = current.next;
			current.next = prev;

			prev = current;
			current = next;
		}

		return this;
	}

	/**
	 *
	 * @returns {any[]}
	 */
	toArray() {
		/**
		 * SET array to empty array
		 * SET current to the head
		 *
		 * Loop through the array
		 *    SET array current index to the val of current
		 *    SET current to the next of current
		 *
		 * return array
		 */

		const arr = new Array(this.length);
		let current = this.head;

		for (let i = 0; i < this.length; i++) {
			arr[i] = current.val;
			current = current.next;
		}

		return arr;
	}
}

const list = new SinglyLinkedList();
