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
    },1000);


function myAdd(...nums) {
    let res = 0;
    for (const num of nums) {
        res += num;
    }
    return res;
}

function mySubtract(initial, ...nums) {
    let res = initial;
    for (const num of nums) {
        res -= num;
    }
    return res;
}

function myMultiply(initial, ...nums) {
    let res = initial;
    for (const num of nums) {
        res *= num;
    }
    return res;
}

function myDivide(initial, ...nums) {
    let res = initial;
    for (const num of nums) {
        res *= (1/num);
    }
    return res;
}

numButtons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.textContent);    //
        if (!numOne) {
            numOne = Number(button.textContent);
        } else if (numOne) {
            numTwo = Number(button.textContent);
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


/*

in case 1: the equal sign should operate, and set res to numOne
in case 2: the 2nd plus sigbn should operate, and set res to numOne
in case 3: the 2nd and 3rd plus signs should operate, and set res to numOne

case 1 at eval: has a numOne, but not numTwo. the equals should assign
numTwo to the current display

case 2 at eval: has a 


evaluation should basically set numOne to the res, and

*/

numButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (display.textContent.length < 12) {
        if (!operation) {
            display.textContent += button.textContent;
        }
        }
    console.log(button.textContent); //
    lastInput = button.textContent;
    })
})



opButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (!numOne) {
            numOne = Number(display.textContent);
            operation = button.textContent;
        } else if (numOne) {
            operation = button.textContent;
            operate();
            display.textContent = (Math.round(res * 10000) / 10000);
        }
        console.log(button.textContent); //
        lastInput = button.textContent;
        if (lastInput == button.textContent) {
            button.style.backgroundColor = 'rgb(78,78,78)'
        }
    })
})


opButtons.forEach((button) => {
    button.addEventListener('click', () => {
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
    })
})




// if button is pressed, for loop, then change shit
// else do normal shit:

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



for (const button of opButtons) {
    if (button.style.backgroundColor == 'rgb(78, 78, 78)') {
        button.style.backgroundColor = 'rgb(37, 37, 38)'
        operation = button.textContent;
        lastInput = button.textContent;
    }
}

// new try:
