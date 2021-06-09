"use strict" 



// main();

// function main(){

    const firstNum = inputValid("first");
    if (firstNum === null) {
        return;
    }

    // const lowLimit = Math.min(firstNum, secondNum);
    // const hightLimit = Math.max(firstNum, secondNum);

    // const isSkipEven = confirm("Skip even numbers for summing-up?");

    // let intervalSum = 0;

    // for (let i = lowLimit; i <= hightLimit; i++){
    //     if(isSkipEven){
    //         if (i % 2){
    //             intervalSum += i;
    //         }
    //     } else {
    //         intervalSum += i;
    //     }
    // }

    // console.log (`The sum of numbers in interval from ${lowLimit} to ${hightLimit} included is: ${intervalSum}. 
    // You chose to skip even numbers? ${isSkipEven}`);

// }

// help function validates user input from prompt. Only numbers allowed for further calculations.
// receives: inputed number order
// returns: number from prompt line. 
// Accepts only numbers in input, filters empty line and sequences include not numeric symbols

function inputNumValid() {

    let inputVal = prompt(`Enter a number`, "0");

    if (inputVal === null){
        alert("You canceled the program. Please refresh the page to try again");
        return null;
    }

    while ( inputVal.trim().length == 0 || isNaN(+inputVal) ){
        inputVal = prompt(`Number is required! Please try again `, "0");
    }

    return +inputVal;
}

