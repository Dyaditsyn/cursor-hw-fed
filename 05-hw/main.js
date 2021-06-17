"use strict";

// #1 //
function getRandomArray(inputLength, inputNum1, inputNum2) {
    const length = inputIntegerValid(inputLength, "for Length");
    let randomNumbers = [];
    if (length <= 0) {
        throw new Error(`Invalid input! An array length must be positive integer`);
    }
    for (let i = 0; i < length; i++) {
        randomNumbers.push(getRandomNumber(inputNum1, inputNum2));
    }
    return randomNumbers;
}

// #2 //

function getMode(inputStr) {
    const numbers = handleInput (inputStr);
    return calcMode(...numbers);
}

function calcMode(...numbers) {
    if (!numbers.length) {
    		throw new Error("Data Set is empty");
    }
    let numbersArr = [...numbers].map( number => inputNumberValid(number.toString(), "for each array element"));
    numbersArr = numbersArr.filter ( number => number % 1 === 0);
    																

    const frequencyTable = {};
    numbersArr.forEach(elem => frequencyTable[elem] = frequencyTable[elem] + 1 || 1);

    let mode;
    let maxFrequency = 0;

    for (const key in frequencyTable) {
        if (frequencyTable[key] > maxFrequency) {
            mode = [Number(key)];
            maxFrequency = frequencyTable[key];
        } else if (frequencyTable[key] === maxFrequency) {
            mode.push(Number(key));
        }
    }

    if (mode.length == Object.keys(frequencyTable).length) {
        mode = 'No mode in current data set'
    }
    return mode;
}

// -------------------------------------------------------------------------------------------------------------------//

// help function 
function getRandomNumber(inputNum1, inputNum2) {
    const firstNum = inputIntegerValid(inputNum1, "for first limit");
    const secondNum = inputIntegerValid(inputNum2, "for second limit");
    const lowLimit = Math.min(firstNum, secondNum);
    const highLimit = Math.max(firstNum, secondNum);
    return Math.floor (Math.random() * (highLimit - lowLimit + 1) ) + lowLimit;
}

// help function check input for integers only
function inputIntegerValid(inputVal, clarify = "") {
    if ( !(inputVal && inputVal.trim().length) || +inputVal % 1 !== 0 || isNaN(Number(inputVal)) ) {
        throw new Error(`Invalid input! An INTEGER number ${clarify} is required`);
    }
    return inputVal;
}

// help function check input for numbers only
function inputNumberValid(inputVal, clarify = "") {
    if ( !(inputVal && inputVal.trim().length) || isNaN(Number(inputVal)) ) {
            throw new Error(`Invalid input! A number ${clarify} is required`);
    }
    return inputVal;
}

// help function for numeric functions. 
// receives: string from input in format values separated by commas
// transforms a string to array of numbers if possible and filter it to integers only or breaks with error
// output: array of integers
function handleInput(inputStr) {
    if (!inputStr.length) {
    		throw new Error("Data Set is empty");
    }
    const inputArr = inputStr.split(',').map( item => inputNumberValid(item, "for each array element separated by comma"));
    return inputArr.filter ( number => number % 1 === 0);
}


        

