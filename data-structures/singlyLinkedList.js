class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList {
	head = null;
	tail = null;
	length = 0;

	push(val) {
		const node = new Node(val);

		if (!this.head) {
			this.head = node;
		} else {
			// currently last node should point to new one
			this.tail.next = node;
		}

		// set new tail node
		this.tail = node;
		this.length += 1;

		// Returning this allows you to chain methods on the instance e.g. list.push().sthElse().push()
		return this;
	}
}

const list = new SinglyLinkedList();
list.push(3).push(6).push(1);

console.log(list);
