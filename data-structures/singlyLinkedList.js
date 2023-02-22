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

	pop() {
		if (this.length === 0) return;
		if (this.length === 1) {
			const poppped = this.head;

			this.head = null;
			this.tail = null;
			this.length = 0;

			return poppped;
		}

		let pre = this.head;
		let last = this.head;

		while (last.next) {
			pre = last;
			last = last.next;
		}

		pre.next = null;
		this.tail = pre;
		this.length -= 1;

		return last;
	}
}

const list = new SinglyLinkedList();
list.push(3).push(6).push(1);

console.log(list.pop());
console.log(list);
