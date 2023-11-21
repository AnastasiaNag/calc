let num1 = +prompt("Введите 1 число");

while (isNaN(num1) | (num1 === null)) {
  const num1 = +prompt("Это не число. Введите 1 число");
  if (!isNaN(num1) | (num1 !== null)) {
    break;
  }
}

let num2 = +prompt("Введите 2 число");

while (isNaN(num2) | (num2 === null)) {
  const num1 = +prompt("Это не число. Введите 2 число");
  if (!isNaN(num2) | (num2 !== null)) {
    break;
  }
}

let oper = prompt("Введите знак");

switch (oper) {
  case "+":
    alert(num1 + num2);
    break;

  case "-":
    alert(num1 - num2);
    break;

  case "/":
    if (num2 === 0) {
      alert("На ноль делить нельзя");
    } else {
      alert(num1 / num2);
    }
    break;

  case "*":
    alert(num1 * num2);
    break;

  default:
    alert("Такого оператора не существует");
}
