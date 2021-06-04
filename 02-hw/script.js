"use strict" 

const firstNum = inputValid("first");
const secondNum = inputValid("second");

const lowLimit = Math.min(firstNum, secondNum);
const hightLimit = Math.max(firstNum, secondNum);

const isSkipEven = confirm("Skip even numbers for summing-up?");

let intervalSum = 0;

for (let i = lowLimit; i <= hightLimit; i++){
    if(isSkipEven){
        if (i % 2){
            intervalSum += i;
        }
    }
    else {
        intervalSum += i;
    }
}

console.log(`The sum of numbers in interval from ${lowLimit} to ${hightLimit} included is: ${intervalSum}. You chose to skip even numbers? ${isSkipEven}`)

// help function validates user input from prompt. Only integer numbers allowed for further calculations.
// receives: inputed number order (first or second to make function more generic)
// returns: integer from prompt line. 
// In case of fractional number in promt line parseInt converts to integer. In case of not numeric input user has another choice for input.
function inputValid(order) {
    let inputVal;
    do {
        inputVal = parseInt(prompt(`Enter a ${order} number`, "0"), 10);
    } while (isNaN(inputVal));
    return inputVal;
}


