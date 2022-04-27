class Stack {
  storage = {};
  last = 0;
  first = 0;

  push(item) {
    this.storage[this.first] = item;
    this.first++;
  }

  pop() {
    if (this.size === 0) {
      return;
    }

    const value = this.storage[this.first - 1];
    delete this.storage[this.first - 1];
    this.first--;
    return value;
  }
  get peek() {
    return this.storage[this.first - 1];
  }
  get length() {
    return this.first - this.last;
  }
}

// const table1 = new Stack();
// console.log(table1.length);
// table1.push(1);
// table1.push(2);
// table1.push(3);
// console.log(table1.peek);
// console.log(table1.pop());
// console.log(table1.pop());
// console.log(table1.storage);
