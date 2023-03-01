class Node {
	constructor(val) {
		this.val = val;
	}
	next = null;
	prev = null;
}

class DoublyLinkedList {
	head = null;
	tail = null;
	length = 0;

	push(val) {
		const newNode = new Node(val);

		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = newNode;
		}

		this.length++;

		return this;
	}
}

const list = new DoublyLinkedList();

list.push(1).push(2).push(3);

console.log(list);
