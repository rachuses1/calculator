const screen = document.querySelector('.screen');
const numbers = document.querySelectorAll(".buttons");

const operator = document.querySelectorAll('.operators');
const add = document.querySelector('.add');
const multiply = document.querySelector('.multiply');
const subtract = document.querySelector('.subtract');
const divide = document.querySelector('.divide');


numbers.forEach((number) =>{number.addEventListener("click",display)});

function display() {
    screen.textContent = numbers[0].innerHTML;
}

let a = 10;
let b = 2;
let operation;

add.addEventListener("click",() => operation = "+");
multiply.addEventListener("click", () => operation = "*");
divide.addEventListener("click", () => operation = "/");
subtract.addEventListener("click",() => operation = "-");

function operate(a, b, operation) {
    if (operation === "+") {
        addition(a, b);
    } else if (operation === "*") {
        multiplication(a, b);
    } else if (operation === "/") {
        division(a, b);
    } else if (operation === "-") {
        subtraction(a, b);
    }
}

function addition(a, b) {
    return a + b;
}

function multiplication (a, b) {
    return a * b;
} 

function subtraction (a, b) {
    return a - b;
}

function division (a, b) {
    return a / b;
}
