"use strict";

function calcMaxDigit(inputNum) {
    return Math.max (...(inputNumberValid(inputNum)
                .split('')
                .filter(digit => digit !== ".")));
}

function calcPower(inputBase, inputPower) {
    const base = inputNumberValid(inputBase, "for Base");
    const power = inputIntegerValid(inputPower, "for Power");

    let res = 1;
    if (base === "0" && power === "0") {
        return res;
    }
    for (let i = 0; i < Math.abs(power); i++) {
        power >= 0 ? res *= base : res /= base;
    }
    return res;
}

// help function validate input for numbers only. Receives a string from the input.
// Output number string in case original string includes a number or error message otherwise
function inputNumberValid(inputVal, clarify ="") {
    if ( !(inputVal && inputVal.trim().length) || isNaN(Number(inputVal)) ) {
        throw new Error(`Invalid input! A number ${clarify} is required`);
    }
    return inputVal;
}

// same as previous but for INTEGERS only
function inputIntegerValid(inputVal, clarify = "") {
    if ( !(inputVal && inputVal.trim().length) || +inputVal % 1 !== 0 || isNaN(Number(inputVal)) ) {
        throw new Error(`Invalid input! An INTEGER number ${clarify} is required`);
    }
    return inputVal;
}
