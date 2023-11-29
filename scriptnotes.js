// debugger: console.log(numOne, numTwo, operation, res, display.textContent, lastInput);

<div class="debugger">debug:
<p class="numOne"></p>
<p class="operation"></p>
<p class="numTwo"></p>
<p class="res"></p>
<p class="lastInput"></p>
</div>

const numOneDisplay = document.querySelector('.numOne');
const numTwoDisplay = document.querySelector('.numTwo');
const opDisplay = document.querySelector('.operation');
const resDisplay = document.querySelector('.res');
const lastInputDisplay = document.querySelector('.lastInput');

time=setInterval(function(){
    numOneDisplay.textContent = 'numOne:' + numOne;
    numTwoDisplay.textContent = 'numTwo:' + numTwo;
    opDisplay.textContent =  'op:' + operation;
    resDisplay.textContent = 'res:' + res;
    lastInputDisplay.textContent = 'inp:' + lastInput;
    },500);


// old numButton function
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




// if button is pressed, for loop, then change stuff
// else do normal stuff:

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



// new try:
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




// V1.0
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


// V2.0
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
            alert('hi!');
        }
    })
})