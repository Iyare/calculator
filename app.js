// Get elements from the DOM
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero");
// operators
const add = document.querySelector("#add");
const subtract = document.querySelector("#subtract");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#divide");
const equals = document.querySelector("#equals");
const clear = document.querySelector("#clear");
const decimal = document.querySelector("#decimal");
const percent = document.querySelector("#percent");
const deleteBtn = document.querySelector("#delete");
const extraFeaturesBtn = document.querySelector("#extra-features");    
const leftBracket = document.querySelector("#left-bracket");
const rightBracket = document.querySelector("#right-bracket");
const squareRoot = document.querySelector("#square-root");
const power = document.querySelector("#power");

// display
const inputDisplay = document.querySelector("#inputs");
const resultDisplay = document.querySelector("#results");
let subTotal = "";
let currentInput = "";

// Add evenetlisteners
extraFeaturesBtn.addEventListener("click", function () {
    const firstRowButtons = document.querySelectorAll(".extra-features");
    firstRowButtons.forEach(button => {
        button.classList.toggle("hidden");
    });
});

leftBracket.addEventListener("click", function () {
    inputDisplay.textContent += "(";
});

rightBracket.addEventListener("click", function () {
    inputDisplay.textContent += ")";
});

squareRoot.addEventListener("click", function () {
    inputDisplay.textContent += "Math.sqrt(";
});

power.addEventListener("click", function () {
    inputDisplay.textContent += "**";
});

one.addEventListener("click", function () {
    inputDisplay.textContent += "1";
});
two.addEventListener("click", function () {
  inputDisplay.textContent += "2";
});
three.addEventListener("click", function () {
  inputDisplay.textContent += "3";
});
four.addEventListener("click", function () {
  inputDisplay.textContent += "4";
});
five.addEventListener("click", function () {
  inputDisplay.textContent += "5";
});
six.addEventListener("click", function () {
  inputDisplay.textContent += "6";
});
seven.addEventListener("click", function () {
  inputDisplay.textContent += "7";
});
eight.addEventListener("click", function () {
  inputDisplay.textContent += "8";
});
nine.addEventListener("click", function () {
  inputDisplay.textContent += "9";
});
zero.addEventListener("click", function () {
  inputDisplay.textContent += "0";
});
add.addEventListener("click", function () {
  checkOperator();
  checkTotal();
  inputDisplay.textContent += "+";
});
subtract.addEventListener("click", function () {
  checkTotal();
  checkOperator();
  inputDisplay.textContent += "-";
});
multiply.addEventListener("click", function () {
  checkTotal();
  checkOperator();
  inputDisplay.textContent += "*";
});

divide.addEventListener("click", function () {
  checkTotal();
  checkOperator();
  inputDisplay.textContent += "/";
});
decimal.addEventListener("click", function () {
  inputDisplay.textContent += ".";
});

percent.addEventListener("click", function () {
  inputDisplay.textContent += "%";
  let percentIndex = inputDisplay.textContent.indexOf("%");
  // Get the last operator before the percentage sign
  let lastOperator = inputDisplay.textContent
    .slice(0, percentIndex)
    .match(/[\+\-\*\/](?!.*[\+\-\*\/])/);
  let percentValue = "";
  // Slice the string from the beginning to the percentage sign
  if (lastOperator === null) {
    percentValue = inputDisplay.textContent.slice(0, percentIndex);
  } else {
    percentValue = inputDisplay.textContent.slice(
      inputDisplay.textContent.lastIndexOf(lastOperator[0]) + 1,
      percentIndex
    );
  }
  // Convert the percentage value to a decimal
  let percentResult = percentValue / 100;

  // Replace the percentage value with the decimal value
  inputDisplay.textContent = inputDisplay.textContent.replace(
    percentValue + "%",
    percentResult
  );
});

clear.addEventListener("click", function () {
  inputDisplay.textContent = "";
  resultDisplay.textContent = "";
  subTotal = "";
});

equals.addEventListener("click", function () {
  let result = evaluate();
  if (result === Infinity || isNaN(result) || result === -Infinity) {
    resultDisplay.textContent = "Cannot divide by zero";
    subTotal = "0";
  } else {
    resultDisplay.textContent = result;
    subTotal = result;
  }
});

deleteBtn.addEventListener("click", function () {
  inputDisplay.textContent = inputDisplay.textContent.slice(0, -1);
});

function evaluate() {
  const myEval = eval;
  return myEval(inputDisplay.textContent);
}

function checkTotal() {
  if (
    resultDisplay.textContent !== "" &&
    resultDisplay.textContent !== "Cannot divide by zero" &&
    !isNaN(resultDisplay.textContent)
  ) {
    subTotal = resultDisplay.textContent;
    inputDisplay.textContent = subTotal;
  } else {
    resultDisplay.textContent = "";
    
  }
}

function getCurrentInput() {
  currentInput = inputDisplay.textContent;
  return currentInput;
}
function checkOperator() {
  let lastChar = inputDisplay.textContent.slice(-1);
    console.log(lastChar);
    if (
      lastChar === "+" ||
      lastChar === "-" ||
      lastChar === "*" ||
      lastChar === "/"
    ) {
      inputDisplay.textContent = inputDisplay.textContent.slice(0, -1);
      console.log("last character is an operator");
    } else {
      console.log("last character is not an operator");
    }
}

