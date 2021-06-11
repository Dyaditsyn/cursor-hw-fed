"use strict";

// #1 //
function calcMaxDigit(inputNum) {
    return Math.max (...(inputNumberValid(inputNum)
                .split('')
                .filter(digit => digit !== ".")));
}

// #2 //
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

// #3 //
function capitalizeName(inputName) {
    const name = inputStringValid(inputName, "for Name");
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

// #4 //
function calcNetSalary(inputSalary){
    const TAX = 0.195;
    const grossSalary = inputNumberValid(inputSalary, "for gross Salary amount");
    if (grossSalary < 0) {
        throw new Error(`Invalid input! Salary better be represented with positive number`);
    }
    return grossSalary - grossSalary * TAX;
}

// #5 //
function getRandomNumber(inputNum1, inputNum2) {
    const firstNum = inputIntegerValid(inputNum1, "for first limit");
    const secondNum = inputIntegerValid(inputNum2, "for second limit");
    const lowLimit = Math.min(firstNum, secondNum);
    const highLimit = Math.max(firstNum, secondNum);
    return Math.floor (Math.random() * (highLimit - lowLimit + 1) ) + lowLimit;
}

// #6 //
function calcLetterRepetition(inputLetter, inputPhrase) {
    const letter = inputLetterValid(inputLetter).toLowerCase();
    const phrase = inputStringValid(inputPhrase).toLowerCase();
    const phraseArr = phrase.split('');

    let countLetter = 0;
    for (let i = 0; i < phraseArr.length; i++) {
        console.log(phraseArr[i])
        if ( phraseArr[i] === letter ) {
            countLetter++;
        }
    }
    console.log(countLetter);
    return countLetter;
}

//--------------------------------------------------------------------------------------------------------------------//

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

// check string for empty input
function inputStringValid(inputVal) {
    if ( !(inputVal && inputVal.trim().length)  ) {
        throw new Error(`Invalid input! Phrase field can not be empty`);
    }
    return inputVal;
}

// same as previous but limit for 1 symbol only
function inputLetterValid(inputVal) {
    if ( !(inputVal && inputVal.trim().length) || inputVal.trim().length > 1 ) {
        throw new Error(`Invalid input! One letter is only allowed in Letter input`);
    }
    return inputVal;
}
