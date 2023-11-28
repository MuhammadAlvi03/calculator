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
let lastInput;


function myAdd() {
    return numOne + numTwo;
}

function mySubtract() {
    return numOne - Number(numTwo);
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
            (lastInput === ('+' || '-' || '×' || '÷')) ?
            display.textContent = '' + button.textContent:
            display.textContent += button.textContent;
        }
        lastInput = button.textContent;
    })
})



opButtons.forEach((button) => {
    button.addEventListener('click', () => {
        operation = button.textContent;
        if (numOne) {
            numTwo = Number(display.textContent);
            operate();
            display.textContent = (Math.round(res * 10000) / 10000);
            numOne = Number(display.textContent);
        } else {
            numOne = Number(display.textContent);
        }
        lastInput = button.textContent;
    })
})



equalsButton.addEventListener('click', () => {
    numTwo = Number(display.textContent);
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


let negativeSign = '-';
negativeButton.addEventListener('click', () => {
    if (!display.textContent.includes(negativeSign, 0)) {
        display.textContent = negativeSign.concat(display.textContent);
    } else if (display.textContent.includes(negativeSign, 0)) {
        display.textContent = display.textContent.replace(negativeSign, '');
    }
})

clearButton.addEventListener('click', () => {
    display.textContent = '';
    numOne = undefined;
    numTwo = undefined;
    operation = undefined;
    res = undefined;
})

// debugger: console.log(numOne, numTwo, operation, res, display.textContent);
const numOneDisplay = document.querySelector('.numOne');
const numTwoDisplay = document.querySelector('.numTwo');
const opDisplay = document.querySelector('.operation');
const resDisplay = document.querySelector('.res');

time=setInterval(function(){
    numOneDisplay.textContent = 'numOne:' + numOne;
    numTwoDisplay.textContent = 'numTwo:' + numTwo;
    opDisplay.textContent =  'op:' + operation;
    resDisplay.textContent = 'res:' + res;
    },250);


// styles

