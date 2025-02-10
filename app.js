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
const negative = document.querySelector("#negative");
const deleteBtn = document.querySelector("#delete");

// display
const inputDisplay = document.querySelector("#inputs");
const resultDisplay = document.querySelector("#results");
let subTotal = "";




// Add evenetlisteners

one.addEventListener("click", function() {
    inputDisplay.textContent += "1";
});
two.addEventListener("click", function() {
    inputDisplay.textContent += "2";
});
three.addEventListener("click", function() {
    inputDisplay.textContent += "3";
});
four.addEventListener("click", function() {
    inputDisplay.textContent += "4";
});
five.addEventListener("click", function() {
    inputDisplay.textContent += "5";
});
six.addEventListener("click", function() {
    inputDisplay.textContent += "6";
});
seven.addEventListener("click", function() {
    inputDisplay.textContent += "7";
});
eight.addEventListener("click", function() {
    inputDisplay.textContent += "8";
});
nine.addEventListener("click", function() {
    inputDisplay.textContent += "9";
});
zero.addEventListener("click", function() {
    inputDisplay.textContent += "0";
});
add.addEventListener("click", function () {
    let operator = add.value;
    checkTotal();
    checkOperator(operator);
    inputDisplay.textContent += "+";
});
subtract.addEventListener("click", function () {
    let operator = subtract.value;
    checkTotal();
    checkOperator(operator);
    inputDisplay.textContent += "-";
    
});
multiply.addEventListener("click", function () {
    let operator = multiply.value;
    checkTotal();

    checkOperator(operator);
    inputDisplay.textContent += "*";
});

divide.addEventListener("click", function () {
    let operator = divide.value;
    checkTotal();
    inputDisplay.textContent += "/";  
});
decimal.addEventListener("click", function() {
    inputDisplay.textContent += ".";
});

percent.addEventListener("click", function () {
    inputDisplay.textContent += "%";
    let percentIndex = inputDisplay.textContent.indexOf("%");
    let percentValue = inputDisplay.textContent.slice(0, percentIndex);
    let percentResult = percentValue / 100;
    inputDisplay.textContent = percentResult;
});

clear.addEventListener("click", function() {
    inputDisplay.textContent = "";
    resultDisplay.textContent = "";
    subTotal = "";
});

equals.addEventListener("click", function () {
    const myEval = eval;
    let result = evaluate()
    if (result === Infinity || result === NaN || result === -Infinity) {
        resultDisplay.textContent = "Cannot divide by zero";
        subTotal = "0";
    } else {
        resultDisplay.textContent = result
        subTotal = myEval(inputDisplay.textContent);
    }
});

deleteBtn.addEventListener("click", function() {
    inputDisplay.textContent = inputDisplay.textContent.slice(0, -1);

});

function evaluate() {
      return eval(inputDisplay.textContent);
}

function checkTotal() {
    if (resultDisplay.textContent !== "" && resultDisplay.textContent !== "Cannot divide by zero") {
        subTotal = resultDisplay.textContent;
        inputDisplay.textContent = subTotal;
    } else {
        resultDisplay.textContent = "";
        subTotal = inputDisplay.textContent;
    }
}
function getLastChar() { 
    let lastChar = inputDisplay.textContent.slice(-1);
    return lastChar;
}

function checkOperator(operator) {
    let lastChar = getLastChar()
    console.log(lastChar);
    if (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/") {
        inputDisplay.textContent = inputDisplay.textContent.slice(0, -1);
        console.log("last character is an operator");
    } else {
        console.log("can't identify last character");
    }
}