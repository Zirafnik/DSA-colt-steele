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

	shift() {
		if (this.length === 0) return;

		const removed = this.head;

		this.head = this.head.next;
		this.length -= 1;

		// if we shifted the last node, turn the tail to null also
		if (this.length === 0) {
			this.tail = null;
		}

		// sever lingering bond before returning
		removed.next = null;
		return removed;
	}

	unshift(val) {
		const node = new Node(val);

		node.next = this.head;

		this.head = node;
		if (this.length === 0) this.tail = node;
		this.length += 1;

		return this;
	}

	get(idx) {
		if (idx >= this.length || idx < 0) return null;
		if (idx === this.length - 1) return this.tail; // slight optimization, when we know its the tail

		let currentNode = this.head;
		for (let i = 0; i < idx; i++) {
			currentNode = currentNode.next;
		}

		return currentNode;
	}

	set(value, idx) {
		const desiredNode = this.get(idx);

		if (!desiredNode) return false;

		desiredNode.val = value;

		return true;
	}

	insert(value, idx) {
		if (idx > this.length || idx < 0) return false;
		if (idx === this.length) return Boolean(this.push(value));
		if (idx === 0) return Boolean(this.unshift(value));

		let prevNode = this.get(idx - 1);
		let nextNode = prevNode.next;

		const newNode = new Node(value);

		newNode.next = nextNode;
		prevNode.next = newNode;

		this.length += 1;

		return true;
	}

	remove(idx) {
		if (idx >= this.length || idx < 0) return;
		if (idx === this.length - 1) return this.pop();
		if (idx === 0) return this.shift();

		const prevNode = this.get(idx - 1);
		const currentNode = prevNode.next;
		const nextNode = prevNode.next.next;

		prevNode.next = nextNode;
		this.length -= 1;

		currentNode.next = null;
		return currentNode;
	}

	reverse() {
		let prevNode = null;
		let currentNode = this.head;

		// set new tail
		this.tail = currentNode;

		while (currentNode) {
			const nextNode = currentNode.next;

			// point current node backwards
			currentNode.next = prevNode;

			// iterate all variables one forward
			prevNode = currentNode;
			currentNode = nextNode;
		}

		// set new head
		this.head = prevNode;

		return this;
	}
}

const list = new SinglyLinkedList();
list.push(1).push(2).push(3);

// console.log(list.pop());
// console.log(list.shift());

// list.unshift(0).unshift(-1);

// console.log(list.set(999, 1));
// console.log(list.set(111, 6));
// console.log(list.get(2));

// console.log(list.insert('inserted', 0));
// console.log(list.remove(1));

console.log(list);
list.reverse();
console.log(list);
