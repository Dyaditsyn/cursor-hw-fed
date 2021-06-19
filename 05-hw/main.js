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

function modeWrapper(inputStr) {
    const numbers = handleInputInt (inputStr);
    return getMode(...numbers);
}

function getMode(...numbers) {
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
function averageWrapper(inputStr) {
    const numbers = handleInputInt (inputStr);
    return getAverage(...numbers);
}

function getAverage(...numbers) {
    const numbersArr = [...numbers];
    const total = numbersArr.reduce( (total, number) => {
        return total + Number(number);
    }, 0);
    return total / numbersArr.length;
}

// #4 //
function medianWrapper(inputStr) {
    const numbers = handleInputInt (inputStr);
    return getMedian(...numbers);
}

function getMedian(...numbers) {
    const arrSorted = [...numbers].sort( (a, b) => a - b);
    const isArrLengthEven = arrSorted.length % 2 === 0 ;
    const evenLengthMedian = (arrSorted[arrSorted.length/2 - 1] + arrSorted[arrSorted.length/2])/2;
    const oddLengthMedian = arrSorted[Math.floor(arrSorted.length/2)];

    return isArrLengthEven ? evenLengthMedian : oddLengthMedian ;
}

// #5 //
function filterEvenWrapper(inputStr) {
    const numbers = handleInputInt (inputStr);
    return filterEvenNumbers(...numbers);
}

function filterEvenNumbers(...numbers) {
    return [...numbers.filter( (num) => num % 2)];
}

// #6 //
function positivesCountWrapper(inputStr) {
    const numbers = handleInputNum (inputStr);
    
    return countPositiveNumbers(...numbers);
}

function countPositiveNumbers(...numbers) {
    return [...numbers].reduce( (count, num) => {
        return num > 0 ? count + 1 : count;
    }, 0);
}

// #7 //
function devidedByFiveWrapper(inputStr) {
    const numbers = handleInputInt (inputStr);
    return getDividedByFive(...numbers);
}

function getDividedByFive(...numbers) {
    return [...numbers].filter( (num) => num % 5 === 0);
}

// #8 //
function replaceBadWords(inputStr){
    let phrase = inputStringValid(inputStr).split(" ");
    const badWords = ["shit", "fuck"];
    let replacer = "";

    for (let i = 0; i < badWords.length; i++) {
        for (let j = 0; j < phrase.length; j++) {
            if (phrase[j].toLowerCase().includes(badWords[i])) {
                for (let k = 0; k < badWords[i].length; k++) {
                    replacer += "*";   
                }
                const startIndexBad = phrase[j].toLowerCase().indexOf(badWords[i]);
                const tempBadWord = phrase[j].split("");
                tempBadWord.splice(startIndexBad, replacer.length, replacer);
                phrase[j] = tempBadWord.join("");
            } 
        }   
    }
    return phrase.join(" ");
}

// #9 //
function divideByThree(inputStr){
    const string = inputStringValid(inputStr);
    const word = Array.from(string.toLowerCase().replaceAll(' ',''));
    let arrOfTree = [];

     while (word.length > 3) {
        const removed = word.splice(0, 3).join("");
        arrOfTree.push(removed);
     }
    arrOfTree.push(word.join(""));

    return arrOfTree;
}

// #10 //
function generateCombinations(inputStr) {
    const string = inputStringValid(inputStr);
    const word = string.trim().split(" ").join("");
    if (word.length > 10) {
        throw new Error("Invalid input! Please enter a word up to ten letters")
    }
    if (word.length === 1 ) {
        return [word];
    }

    let combinations = [];

    for (let i = 0; i < word.length; i++) {
    
        let char = word[i];
        if (word.indexOf(char) !== i) {
            continue;
        }

        let remainingStr = word.slice(0, i) + word.slice(i + 1, word.length);

        for (let subWord of generateCombinations(remainingStr)) {
            combinations.push(char + subWord) ;
        }
    }
    return combinations;
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
    const numbersArr = inputArr.map( (item => parseFloat(item)))
    return numbersArr;
}

// check string for empty input
function inputStringValid(inputVal) {
    if ( !(inputVal && inputVal.trim().length)  ) {
        throw new Error(`Invalid input! Field can not be empty`);
    }
    return inputVal;
}
        

