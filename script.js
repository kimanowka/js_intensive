// FIRST TASK

const firstNumber = +prompt("Введите число");
const secondNumber = +prompt("Введите число");

function handlePromt(num1, num2) {
  if (num1 && num2 && typeof num1 === "number" && typeof num2 === "number") {
    alert(Number(num1).toString(num2));
  } else {
    console.log("Некорректный код");
    return;
  }
}

handlePromt(firstNumber, secondNumber);

// SECOND TASK

const firstNumber1 = +prompt("Введите число");

function handlePromt1(num1) {
  if (num1 && typeof num1 === "number") {
    const secondNumber1 = +prompt("Введите число");
    if (secondNumber1 && typeof secondNumber1 === "number") {
      console.log(`${num1 + secondNumber1},${num1 / secondNumber1}`);
    }
  } else {
    console.log("Некорректный код");
    return;
  }
}
handlePromt1(firstNumber1);
