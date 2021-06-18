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
    const numbers = handleInputInt (inputStr);
    return calcMode(...numbers);
}

function calcMode(...numbers) {
	const numbersArr = [...numbers];															
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

// #3 //
function getAverage(inputStr) {
    const numbers = handleInputInt (inputStr);
    return calcAverage(...numbers);
}

function calcAverage(...numbers) {
    const numbersArr = [...numbers];
    console.log(numbersArr)
    const total = numbersArr.reduce( (total, number) => {
        return total + Number(number);
    }, 0);
    return total / numbersArr.length;
}

// #4 //
function getMedian(inputStr) {
    const numbers = handleInputInt (inputStr);
    return calcMedian(...numbers);
}

function calcMedian(...numbers) {
    const arrSorted = [...numbers].sort( (a, b) => a - b);
    const isArrLengthEven = !arrSorted.length % 2;
    const evenLengthMedian = arrSorted[arrSorted.length/2 - 1] + arrSorted[arrSorted.length/2];
    const oddLengthMedian = arrSorted[Math.floor(arrSorted.length/2)];

    return isArrLengthEven ? evenLengthMedian : oddLengthMedian;
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
function handleInputInt(inputStr) {
    if (!inputStr.length) {
    		throw new Error("Data Set is empty");
    }
    const inputArr = inputStr.split(',').map( item => inputNumberValid(item, "for each array element separated by comma"));
    const numbersArr = inputArr.map( (item => parseFloat(item)))
    return numbersArr.filter ( number => number % 1 === 0);
}

function handleInputNum(inputStr) {
    if (!inputStr.length) {
    		throw new Error("Data Set is empty");
    }
    const inputArr = inputStr.split(',').map( item => inputNumberValid(item, "for each array element separated by comma"));
    return inputArr.map( (item => parseFloat(item)));
}


        

