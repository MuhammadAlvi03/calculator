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
let addproduct;


function myAdd(numOne, numTwo) {
    return numOne + numTwo;
}

function mySubtract(numOne, numTwo) {
    res = numOne - numTwo;
}

function myMultiply(numOne, numTwo) {
    res = numOne * numTwo;
}

function myDivide(numOne, numTwo) {
    res = numOne / numTwo;
}



function operate(operation) {
    if (operation === '+') {
        res = myAdd();
        console.log(alert('hi')); // 
    }
    if (operation === '-') {
        res = mySubtract(numOne, numTwo)
    }
    if (operation === '×') {
        res = myMultiply(numOne, numTwo)
    }
    if (operation === '÷') {
        res = myDivide(numOne, numTwo)
    }
    console.log(res);
}

numButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (display.textContent.length < 12) {
        display.textContent += button.textContent;
        }
    })
})

opButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (!numOne) {
            numOne = Number(display.textContent);
        } else if (numOne) {
            numTwo = Number(display.textContent);
        }
        operation = button.textContent;
        console.log(operation); //
    })
})


clearButton.addEventListener('click', () => {
    display.textContent = '';
})

equalsButton.addEventListener('click', () => {
    numTwo = Number(display.textContent);
    console.log(equalsButton.textContent);
    operate();
});