const screen = document.querySelector('.screen');
const numbers = document.querySelectorAll(".buttons");

const operator = document.querySelectorAll('.operators');
const add = document.querySelector('.add');
const multiply = document.querySelector('.multiply');
const subtract = document.querySelector('.subtract');
const divide = document.querySelector('.divide');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');

let displayValue = [];

const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const zero = document.querySelector('.zero');

let a;
let b;
let operation;
let result;
let counterAdd = 0;
let counter = 0;
let toClear = 0;

one.addEventListener("click",() => {if (toClear > 0) {displayValue = []; toClear = 0}; {displayValue.push(1); display()}});
two.addEventListener("click",() => {if (toClear > 0) {displayValue = []; toClear = 0}; displayValue.push(2); display()});
three.addEventListener("click",() => {if (toClear > 0) {displayValue = []; toClear = 0}; displayValue.push(3); display()});
four.addEventListener("click",() => {if (toClear > 0) {displayValue = []; toClear = 0}; displayValue.push(4); display()});
five.addEventListener("click",() => {if (toClear > 0) {displayValue = []; toClear = 0}; displayValue.push(5); display()});
six.addEventListener("click",() => {if (toClear > 0) {displayValue = []; toClear = 0}; displayValue.push(6); display()});
seven.addEventListener("click",() => {if (toClear > 0) {displayValue = []; toClear = 0}; displayValue.push(7); display()});
eight.addEventListener("click",() => {if (toClear > 0) {displayValue = []; toClear = 0}; displayValue.push(8); display()});
nine.addEventListener("click",() => {if (toClear > 0) {displayValue = []; toClear = 0}; displayValue.push(9); display()})
zero.addEventListener("click", () => {if (toClear > 0) {displayValue = []; toClear = 0}; displayValue.push(0); display()});

clear.addEventListener("click", () => {screen.textContent = ""; displayValue = []});

function display() {
    screen.textContent = displayValue.join('');
}



add.addEventListener("click",
    () => {operation = "+"; toClear ++;
        if(counterAdd % 2 === 0 && counterAdd > 0) {
            a = a + b; 
            b = parseInt(displayValue.join(''));
            console.log(`a: ${a} b: ${b}`);
        } else if (counterAdd > 0) { 
            b = parseInt(displayValue.join(''));
            operate(a, b, operation);
            screen.textContent = result;
            a = result;
            console.log(`a: ${a} b: ${b}`);
        } else {
            a = parseInt(displayValue.join(''));
            counterAdd = counterAdd + 1;
            console.log(`a: ${a}`)
        }
    }); 

multiply.addEventListener("click", 
    () => {operation = "*"; toClear ++;
        if(counter % 2 === 0 && counter > 0) {
            a = a * b; 
            b = parseInt(displayValue.join(''));
            console.log(`a: ${a} b: ${b}`);
        } else if (counter > 0) { 
            b = parseInt(displayValue.join(''));
            operate(a, b, operation);
            screen.textContent = result;
            a = result;
            console.log(`a: ${a} b: ${b}`);
        } else {
            a = parseInt(displayValue.join(''));
            counter = counter + 1;
            console.log(`a: ${a}`)
        }
    }); 

divide.addEventListener("click",     
    () => {operation = "/"; toClear ++;
        if(counter % 2 === 0 && counter > 0) {
            a = a / b; 
            b = parseInt(displayValue.join(''));
            console.log(`a: ${a} b: ${b}`);
        } else if (counter > 0) { 
            b = parseInt(displayValue.join(''));
            operate(a, b, operation);
            screen.textContent = result;
            a = result;
            console.log(`a: ${a} b: ${b}`);
        } else {
            a = parseInt(displayValue.join(''));
            counter = counter + 1;
            console.log(`a: ${a}`)
        }
    }); 

subtract.addEventListener("click", 
    () => {operation = "-"; toClear ++;
        if (counter % 2 === 0 && counter > 0) {
            a = a - b; 
            b = parseInt(displayValue.join(''));
            console.log(`a: ${a} b: ${b}`);
        } else if (counter > 0) { 
            a = result;
            b = parseInt(displayValue.join(''));
            operate(a, b, operation);
            screen.textContent = result;
            console.log(`a: ${a} b: ${b}`);
        } else {
            a = parseInt(displayValue.join(''));
            counter = counter + 1;
            console.log(`a: ${a}`)
        }
    }); 

equals.addEventListener("click", () => 
    {b = parseInt(displayValue.join('')); 
        operate(a, b, operation); 
        console.log(`a: ${a} b: ${b}`); 
        console.log(`result is ${result}`)});

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
    result = a + b;
    screen.textContent = result;
}

function multiplication (a, b) {
    result = a * b;
    screen.textContent = result;
} 

function subtraction (a, b) {
    result = a - b;
    screen.textContent = result;
}

function division (a, b) {
    result = a / b;
    screen.textContent = result;
}

function negative(a) {
    number = a * -1;
}