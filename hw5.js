class Calculator {
  constructor(x, y) {
    if (!x || !y || typeof x !== "number" || typeof y !== "number") {
      throw new Error("Невалидные вводные данные");
    }
    this.x = x;
    this.y = y;
  }

  setX = (number) => {
    if (!number || typeof number !== "number") {
      throw new Error("Невалидное число");
    }
    this.x = number;
  };

  setY = (number) => {
    if (!number || typeof number !== "number") {
      throw new Error("Невалидное число");
    }
    this.y = number;
  };

  logSum = () => {
    console.log(this.x + this.y);
  };

  logMul = () => {
    console.log(this.x * this.y);
  };

  logSub = () => {
    console.log(this.x - this.y);
  };

  logDiv = () => {
    if (this.y === 0) {
      throw new Error("На ноль делить нельзя");
    }
    console.log(this.x / this.y);
  };
}
