class Queue {
  storage = {};
  last = 0;
  first = 0;

  enqueue(item) {
    this.storage[this.last] = item;
    this.last++;
  }

  dequeue() {
    if (this.size === 0) {
      return;
    }

    const value = this.storage[this.first];
    delete this.storage[this.first];
    this.first++;
    return value;
  }

  get front() {
    return this.storage[this.first];
  }
  get size() {
    return this.last - this.first;
  }
  isEmpty() {
    return this.size ? "queue not empty" : "queue is empty";
  }
}

// const table = new Queue();

// table.enqueue(1);
// table.enqueue(2);
// table.enqueue(3);
// console.log(table.isEmpty());
// console.log(table.front);
// console.log(table.dequeue());
// console.log(table.storage);
