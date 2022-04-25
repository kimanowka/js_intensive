let myIterable = {
  from: 1,
  to: 5,
};

myIterable[Symbol.iterator] = function () {
  if (!Number.isInteger(this.from) || !Number.isInteger(this.to)) {
    throw new Error("From or to must be a number");
  }
  if (this.from > this.to) {
    throw new Error("From must be a bigger then to");
  }
  return {
    current: this.from,
    last: this.to,

    next() {
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    },
  };
};

for (let num of myIterable) {
  console.log(num);
}
