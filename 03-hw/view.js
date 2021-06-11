"use strict";
// #1 //
function execMaxDigit(){
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

function execPower() {
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

// #3 //

function execCapitalizeName() {
    const inputName = document.getElementById("capitalize-input").value;
    const result = document.getElementById("capitalize-res");
    result.innerHTML = "";
    let capitalized;
    try{
        capitalized = capitalizeName(inputName);
        result.classList.remove("text-danger");
        result.innerHTML = `Result is: ${capitalized}`;
    }
    catch(error){
        result.classList.add("text-danger");
        result.innerHTML = error;
    }
}

// #4 //

function execNetSalary() {
    const grossSalary = document.getElementById("gross-salary").value;
    const result = document.getElementById("net-salary-res");
    result.innerHTML = "";
    let netSalary;
    try{
        netSalary = calcNetSalary(grossSalary);
        result.classList.remove("text-danger");
        result.innerHTML = `Result is: ${netSalary}`;
    }
    catch(error){
        result.classList.add("text-danger");
        result.innerHTML = error;
    }
}