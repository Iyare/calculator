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



// Get display from the DOM

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
add.addEventListener("click", function() {
    inputDisplay.textContent += " + ";
});
subtract.addEventListener("click", function() {
    inputDisplay.textContent += " - ";
});
multiply.addEventListener("click", function() {
    inputDisplay.textContent += " * ";
});
divide.addEventListener("click", function() {
    inputDisplay.textContent += " / ";
});
decimal.addEventListener("click", function() {
    inputDisplay.textContent += ".";
});
clear.addEventListener("click", function() {
    inputDisplay.textContent = "";
    resultDisplay.textContent = "";
});
equals.addEventListener("click", function () {
    const myEval = eval;
    resultDisplay.textContent = myEval(inputDisplay.textContent);
});

deleteBtn.addEventListener("click", function() {
    inputDisplay.textContent = inputDisplay.textContent.slice(0, -1);

});