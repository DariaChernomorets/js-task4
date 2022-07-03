const num1 = Number(prompt("Please enter the first number"));
const num2 = Number(prompt("Please enter the second number"));
const action = prompt("Please choose type of math operation: \n '+' for sum, \n '-' for subtract, \n '*' for multiply, \n ':' or '/' for divide");

if (num1 === null || num1 === 0) {
    alert("You didn't enter the first number. Please try again!");
}

if (num2 === null || num2 === 0) {
    alert("You didn't enter the second number. Please try again!");
}


function sum(num1,num2){
    return num1 + num2;
}

function subtract(num1,num2){
    return num1 - num2;
}

function multiply(num1,num2){
    return num1 * num2;
}

function divide(num1,num2){
    return num1 / num2;
}

if (action === '+') {
    alert(`Result: ${num1} + ${num2}  = ${sum(num1,num2)}`);
}

else if (action === '-') {
    alert(`Result: ${num1} - ${num2}  = ${subtract(num1,num2)}`);
}

else if (action === '*') {
    alert(`Result: ${num1} * ${num2}  = ${multiply(num1,num2)}`);
}

else if (action === ':') {
    alert(`Result: ${num1} : ${num2}  = ${divide(num1,num2)}`);
}

else if (action === '/') {
    alert(`Result: ${num1} : ${num2}  = ${divide(num1,num2)}`);
}

else {
    alert('Wrong info were submitted. Please try again!')
}
