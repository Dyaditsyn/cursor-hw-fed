"use strict" 

let firstNum;
let secondNum;

try {
    main();
}
catch(error){
    console.log(error);
}

function main() {

    firstNum = inputValid("first");
    secondNum = inputValid("second");    

    const lowLimit = Math.min(firstNum, secondNum);
    const hightLimit = Math.max(firstNum, secondNum);

    const isSkipEven = confirm("Skip even numbers for summing-up?");

    let intervalSum = 0;

    for (let i = lowLimit; i <= hightLimit; i++){
        if (isSkipEven &&  !(i % 2) ) {
            continue;
        }
        intervalSum += i;
    }

    const message = `The sum of numbers in interval from ${lowLimit} to ${hightLimit} included is: ${intervalSum}.
    You chose to skip even numbers - ${isSkipEven}`

    document.writeln(message);
}

// help function validates user input from prompt. Only integer numbers allowed for further calculations.
// receives: inputed number order (first or second to make function more generic)
// returns: integer from prompt line. 
// Accepts only integer input, filters empty line, fractional numbers and sequences include not numeric symbols

function inputValid(order) {

    let inputVal = prompt(`Enter a ${order} number`, "0");

    if (!inputVal && inputVal !==0){
        alert("You canceled the program. Please refresh the page to try again");
        throw new Error("Program aborted by user");
    }

    while ( !(inputVal && inputVal.trim().length) || +inputVal % 1 !== 0 || isNaN(+inputVal) ){
        inputVal = prompt(`Integer is required for ${order} number! Please try again `, "0");
    }

    return +inputVal;
}
