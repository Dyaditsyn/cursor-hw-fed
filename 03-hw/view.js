"use strict";

function getMaxDigit(){
    const input = document.getElementById("maxDigitInput").value;
    const result = document.getElementById("maxDigit1Res");
    result.innerHTML = "";
    let maxDigit;
    try{
        maxDigit = calcMaxDigit(input);
        result.innerHTML = `The max digit is: ${maxDigit}`;
    }
    catch(error){
        result.innerHTML = `Invalid input. Number is required`;
    }

}