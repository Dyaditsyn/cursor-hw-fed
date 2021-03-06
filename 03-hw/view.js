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

// #5 //
function execRandomNumber() {
    const inputNum1 = document.getElementById("first-num").value;
    const inputNum2 = document.getElementById("second-num").value;
    const result = document.getElementById("random-num-res");
    result.innerHTML = "";
    let randomNum;
    try{
        randomNum = getRandomNumber(inputNum1, inputNum2);
        result.classList.remove("text-danger");
        result.innerHTML = `Result is: ${randomNum}`;
    }
    catch(error){
        result.classList.add("text-danger");
        result.innerHTML = error;
    }
}

// #6 //
function execCalcLetterRepetition() {
    const letter = document.getElementById("calc-letter").value;
    const phrase = document.getElementById("calc-phrase").value;
    const result = document.getElementById("calc-letter-res");
    result.innerHTML = "";
    let letterCount;
    try{
        letterCount = calcLetterRepetition(letter, phrase);
        result.classList.remove("text-danger");
        result.innerHTML = `Letter "${letter}" appears ${letterCount} times`;
    }
    catch(error){
        result.classList.add("text-danger");
        result.innerHTML = error;
    }
}

// #7 //
function execConvertCurrency() {
    const currency = document.getElementById("currency-input").value;
    const result = document.getElementById("currency-res");
    result.innerHTML = "";
    let convertedRes;
    try{
        convertedRes = convertCurrency(currency);
        result.classList.remove("text-danger");
        result.innerHTML = `Converted result is: ${convertedRes}`;
    }
    catch(error){
        result.classList.add("text-danger");
        result.innerHTML = error;
    }
}

// #8 // 
function execPassGen() {
    const passLength = document.getElementById("pass-input").value;
    const result = document.getElementById("pass-res");
    result.innerHTML = "";
    let pass;
    try{
        pass = passGen(passLength);
        result.classList.remove("text-danger");
        result.innerHTML = `Your password is: ${pass}`;
    }
    catch(error){
        result.classList.add("text-danger");
        result.innerHTML = error;
    }
}

// #9 // 
function execRemoveLetter() {
    const letter = document.getElementById("remove-letter").value;
    const phrase = document.getElementById("remove-phrase").value;
    const result = document.getElementById("remove-letter-res");
    result.innerHTML = "";
    let res;
    try{
        res = removeLetter(letter, phrase);
        result.classList.remove("text-danger");
        result.innerHTML = `Result is: ${res}`;
    }
    catch(error){
        result.classList.add("text-danger");
        result.innerHTML = error;
    }
}

// #10 // 
function execPalindrom() {
    const isPalInput = document.getElementById("palindrom").value;
    const result = document.getElementById("palindrom-res");
    result.innerHTML = "";
    let isPalindrom;
    try{
        isPalindrom = checkPalindrom(isPalInput);
        result.classList.remove("text-danger");
        result.innerHTML = `Is it palindrom? ${isPalindrom}`;
    }
    catch(error){
        result.classList.add("text-danger");
        result.innerHTML = error;
    }
}

// #11 // 
function execRemoveDuplicateLetter() {
    const inputPhrase = document.getElementById("remove-duplicate").value;
    const result = document.getElementById("remove-duplicate-res");
    result.innerHTML = "";
    let noDublicates;
    try{
        noDublicates = RemoveDuplicateLetter(inputPhrase);
        result.classList.remove("text-danger");
        result.innerHTML = `Result is: ${noDublicates}`;
    }
    catch(error){
        result.classList.add("text-danger");
        result.innerHTML = error;
    }
}