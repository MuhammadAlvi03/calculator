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
const clearEntryButton = document.querySelector('.clearEntry');
const negativeButton = document.querySelector('.negative');
const decimalButton = document.querySelector('.decimal');

const display = document.querySelector('.display');

let numOne;
let numTwo;
let operation;
let res;
let lastInput;
let opArr = [];

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
        opButtons.forEach((button) => {
            button.style.backgroundColor = 'rgb(37,37,38)'
        })
        if (display.textContent.length <= 12) {
            if (typeof(lastInput) === 'string') {   // if it was an operation
                display.textContent = '' + button.textContent;
                lastInput = Number(button.textContent);
            } else if (typeof(lastInput) === 'number' || 'undefined') {
                display.textContent += button.textContent;
                lastInput = Number(button.textContent);
            }
        }
    })
})


opButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (checkPressed() === false) {
            button.style.backgroundColor = 'rgb(78, 78, 78)';
            if (numOne) {   // if a calculation has already been made
                numTwo = Number(display.textContent);
                if (numTwo === 0 && operation === '÷') {
                    display.textContent = 'CAN\'T DIVIDE BY 0!';
                } else {
                    operate();
                    display.textContent = (Math.round(res * 10000) / 10000);
                    numOne = Number(display.textContent);
                }
            } else {
                numOne = Number(display.textContent);
                operation = button.textContent;
            }
            lastInput = button.textContent;
            operation = button.textContent;
        } else if (checkPressed() === true) {
            resetColor();
            button.style.backgroundColor = 'rgb(78, 78, 78)';
            lastInput = button.textContent;
            operation = button.textContent;
        }
    })
})





equalsButton.addEventListener('click', () => {
    if (numOne) {
        numTwo = Number(display.textContent);
        if (numTwo === 0 && operation === '÷') {
            display.textContent = 'CAN\'T DIVIDE BY 0!';
            numOne = undefined;
            numTwo = undefined;
            res = undefined;
            operation = undefined;
            lastInput = 0;
        } else {
            operate();
            display.textContent = (Math.round(res * 10000) / 10000);
            numOne = undefined;
            numTwo = undefined;
            res = undefined;
            operation = undefined;
            lastInput = 0;
        }
    }
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
    lastInput = undefined;
    resetColor();
})

clearEntryButton.addEventListener('click', () => {
    display.textContent = display.textContent.replace(display.textContent[display.textContent.length -1], '');
})


function checkPressed() {
    opArr = Array.from(opButtons);
    return opArr.some(pressed);
}

function pressed(element) {
    return element.style.backgroundColor == 'rgb(78, 78, 78)'
}


function resetColor() {
    opButtons.forEach((button) => {
        button.style.backgroundColor = 'rgb(37,37,38)'
    })
}

// document.addEventListener('keydown', (event) => {
//     let name = event.key;
//     console.log(name)

// })