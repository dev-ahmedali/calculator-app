let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll(".button");

let string = "";

let arr = Array.from(buttons);
// console.log(arr)

function calculate(button) {
  console.log(button);
  const value = button.textContent;

  if (value == "=") {
    string = eval(string);
    input.value = string;
  } else if (value == "AC") {
    string = "";
    input.value = string;
  } else if (value == "DEL") {
    string = string.substring(0, string.length - 1);
    input.value = string;
  } else {
    string = string + value;
    input.value = string;
  }
}

buttons.forEach((button) =>
  button.addEventListener("click", () => calculate(button)),
);
