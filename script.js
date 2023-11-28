const zeroButton = document.querySelector('#zero');
const oneButton = document.querySelector('#one');
const twoButton = document.querySelector('#two');
const threeButton = document.querySelector('#three');
const fourButton = document.querySelector('#four');
const fiveButton = document.querySelector('#five');
const sixButton = document.querySelector('#six');
const sevenButton = document.querySelector('#seven');
const eightButton = document.querySelector('#eight');
const nineButton = document.querySelector('#nine');

const numButtons = document.querySelectorAll('.numButton');

const addButton = document.querySelector('.add');
const subtractButton = document.querySelector('.subtract');
const multiplyButton = document.querySelector('.multiply');
const divideButton = document.querySelector('.divide');

const equalsButton = document.querySelector('.equals');

const opButtons = document.querySelectorAll('.opButton');

const clearButton = document.querySelector('.clear');
const negativeButton = document.querySelector('.negative');
const decimalButton = document.querySelector('.decimal');

const display = document.querySelector('.display');

let numOne;
let numTwo;
let operation;
let res;


function myAdd() {
    return numOne + numTwo;
}

function mySubtract() {
    return numOne - numTwo;
}

function myMultiply() {
    return numOne * numTwo;
}

function myDivide() {
    return numOne / numTwo;
}



function operate() {
    if (operation === '+') {
        res = myAdd();
    }
    if (operation === '-') {
        res = mySubtract()
    }
    if (operation === '×') {
        res = myMultiply()
    }
    if (operation === '÷') {
        res = myDivide()
    }
    console.log(res);
}

numButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (display.textContent.length < 12) {
        display.textContent += button.textContent;
        console.log(button.textContent); //
        }
    })
})

// bug below: if there is an operation defined, does not reset display
// maybe solution is: if operation exists && something else, make display to numOne,
// as the previous result would be stored in num

opButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (operation) {
            numTwo = Number(display.textContent);
            operate();
            display.textContent = (Math.round(res * 100000) / 100000);
            numOne = (Math.round(res * 100) / 100);
        }
        if (!numOne) {
            numOne = Number(display.textContent);
        } else if (numOne) {
            numTwo = Number(display.textContent);
        }
        if (!operation) {display.textContent = '';}
        operation = button.textContent;
        console.log(operation); //
    })
})


clearButton.addEventListener('click', () => {
    display.textContent = '';
    numOne = undefined;
    numTwo = undefined;
    operation = undefined;
    res = undefined;
})

equalsButton.addEventListener('click', () => {
    numTwo = Number(display.textContent);
    console.log(equalsButton.textContent); // 
    operate();
    display.textContent = (Math.round(res * 10000) / 10000);
    numOne = (Math.round(res * 100) / 100);
    numTwo = undefined;
    res = undefined;
    operation = undefined;
});

decimalButton.addEventListener('click', () => {
    if (!display.textContent.includes(decimalButton.textContent)) {
        display.textContent += decimalButton.textContent;
    }
})

// debugger: console.log(numOne, numTwo, operation, res);