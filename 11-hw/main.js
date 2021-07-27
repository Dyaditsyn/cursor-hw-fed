"use strict";

getRandomChinese(length) 

// ------------------------------------------------------------------------------------------------------------------ //

// help function 
function getRandomNumber(highLimit, lowLimit) {
    return Math.floor (Math.random() * (highLimit - lowLimit + 1) ) + lowLimit;
}

// help function check input for numbers only
function inputNumberValid(inputVal) {
    if ( !(inputVal && inputVal.trim().length) || isNaN(Number(inputVal)) || inputVal < 0) {
            throw new Error("Invalid input! A positive numbers only accepted");
    }
    return inputVal;
}