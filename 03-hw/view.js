"use strict";
// #1 //
function getMaxDigit(){
    const input = document.getElementById("max-digit-input").value;
    const result = document.getElementById("max-digit-res");
    result.innerHTML = "";
    let maxDigit;
    try{
        maxDigit = calcMaxDigit(input);
        result.classList.remove("text-danger");
        result.innerHTML = `The max digit is: ${maxDigit}`;
    }
    catch(error){
        result.classList.add("text-danger");
        result.innerHTML = error;
    }
}

// #2 //

function getPower() {
    const inputBase = document.getElementById("base-input").value;
    const inputPower = document.getElementById("power-input").value;
    const result = document.getElementById("power-res");
    result.innerHTML = "";
    let power;
    try{
        power = calcPower(inputBase, inputPower);
        result.classList.remove("text-danger");
        result.innerHTML = `Result is: ${power}`;
    }
    catch(error){
        result.classList.add("text-danger");
        result.innerHTML = error;
    }
}