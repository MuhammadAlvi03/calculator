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