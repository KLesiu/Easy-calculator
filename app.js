const inputOne = document.querySelector("#number1");
const inputTwo = document.querySelector("#number2");
const buttons = document.querySelectorAll("button");
const result = document.querySelector("span");
let numberOne = 0;
let numberTwo = 0;

buttons[0].addEventListener("click", () => {
  numberOne = parseInt(inputOne.value);
  numberTwo = parseInt(inputTwo.value);
  result.innerHTML = numberOne + numberTwo;
});
buttons[1].addEventListener("click", () => {
  result.innerHTML = inputOne.value - inputTwo.value;
});
buttons[2].addEventListener("click", () => {
  result.innerHTML = inputOne.value * inputTwo.value;
});
buttons[3].addEventListener("click", () => {
  result.innerHTML = inputOne.value / inputTwo.value;
});
