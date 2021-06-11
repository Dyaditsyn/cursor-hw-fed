"use strict";

function calcMaxDigit(input){
    return Math.max (...(inputNumberValid(input)
                .split('')
                .filter(digit => digit !== ".")));
}

// help function validate input for numbers only. Receives a string from the input.
// Output number string in case original string includes a number or error message otherwise
function inputNumberValid(inputVal) {
    if ( !(inputVal && inputVal.trim().length) || isNaN(Number(inputVal)) ) {
        throw new Error("Invalid input! A number is required");
    }
    return inputVal;
}

