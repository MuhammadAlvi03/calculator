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