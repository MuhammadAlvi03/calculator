const zeroButton = document.querySelector('.zero');
const oneButton = document.querySelector('.one');
const twoButton = document.querySelector('.two');
const threeButton = document.querySelector('.three');
const fourButton = document.querySelector('.four');
const fiveButton = document.querySelector('.five');
const sixButton = document.querySelector('.six');
const sevenButton = document.querySelector('.seven');
const eightButton = document.querySelector('.eight');
const nineButton = document.querySelector('.nine');

const addButton = document.querySelector('.add');
const subtractButton = document.querySelector('.subtract');
const multiplyButton = document.querySelector('.multiply');
const divideButton = document.querySelector('.divide');

const equalsButton = document.querySelector('.equals');

const clearButton = document.querySelector('.clear');
const negativeButton = document.querySelector('.negative');
const decimalButton = document.querySelector('.decimal');



function myAdd(numOne, numTwo) {
    return numOne + numTwo;
}

function mySubtract(numOne, numTwo) {
    return numOne - numTwo;
}

function myMultiply(numOne, numTwo) {
    return numOne * numTwo;
}

function myDivide(numOne, numTwo) {
    return numOne / numTwo;
}

let numOne;
let numTwo;
let operation;


function operate(numOne, numTwo, operation) {
    let res;
    if (operation === 'add') {
        res = myAdd(numOne, numTwo)
    }
    if (operation === 'subtract') {
        res = mySubtract(numOne, numTwo)
    }
    if (operation === 'multiply') {
        res = myMultiply(numOne, numTwo)
    }
    if (operation === 'divide') {
        res = myDivide(numOne, numTwo)
    }
    return res
}

