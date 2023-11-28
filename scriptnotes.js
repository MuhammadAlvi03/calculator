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


// pressing first number will be numOne, then pressing an operation, then pressing second number will be numTwo
// take numOne, see what the operation is, then operate numTwo onto numOne

// add event listener to each number

// if numOne doesnt exist, make the number numOne, if it does, make it numTwo

// after the operation and numbers are pressed, user will press either equals or another operation,
// so for equals, need to just evaluate function