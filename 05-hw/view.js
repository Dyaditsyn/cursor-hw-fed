"use strict";

// #1 //
function showRandomArray(){
    const inputLength = document.getElementById("length-input").value;
    const inputNum1 = document.getElementById("first-limit-input").value;
    const inputNum2 = document.getElementById("second-limit-input").value;
    const result = document.getElementById("random-array-res");
    result.textContent = "";
    let randomArray;
    try{
        randomArray = getRandomArray(inputLength, inputNum1, inputNum2 );
        result.classList.remove("text-danger");
        result.textContent = `Random numbers array: ${JSON.stringify(randomArray, null, " ")}`;
    }
    catch(error){
        result.classList.add("text-danger");
        result.innerHTML = error;
    }
}

// #2 //
function showMode() {
    const inputStr = document.getElementById("mode-input").value;
const result = document.getElementById("mode-res");
result.textContent = "";
let mode;
try{
    mode = getMode(inputStr);
    result.classList.remove("text-danger");
    result.textContent = `The mode of integers only is: ${JSON.stringify(mode, null, " ")}`;
}
catch(error){
    result.classList.add("text-danger");
    result.innerHTML = error;
}
}
