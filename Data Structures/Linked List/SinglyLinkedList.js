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
   * @param {Node} val
   * @returns {SinglyLinkedList}
   */
	push (val) {
    const newNode = new Node(val);

    if(this.length) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = this.head;
    }

    this.length++;
    
    return this
  }

	// TODO: pop ()

	// TODO: shift ()

	// TODO: unshift (val)

	// TODO: get (index)

	// TODO: set (val, index)

	// TODO: insert (val, index)

	// TODO: remove (index)

	// TODO: reverse ()

	// TODO: print ()
}