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
        mode = modeWrapper(inputStr);
        result.classList.remove("text-danger");
        result.textContent = `The mode of integers only is: ${JSON.stringify(mode, null, " ")}`;
    }
    catch(error){
        result.classList.add("text-danger");
        result.innerHTML = error;
    }
}

// #3 //
function showAverage() {
    const inputStr = document.getElementById("ave-input").value;
    const result = document.getElementById("ave-res");
    result.textContent = "";
    let average;
    try{
        average = averageWrapper(inputStr);
        result.classList.remove("text-danger");
        result.textContent = `The average of integers only is: ${JSON.stringify(average, null, " ")}`;
    }
    catch(error){
        result.classList.add("text-danger");
        result.innerHTML = error;
    }
}

// #4 //
function showMedian() {
    const inputStr = document.getElementById("median-input").value;
    const result = document.getElementById("median-res");
    result.textContent = "";
    let median;
    try{
        median = medianWrapper(inputStr);
        result.classList.remove("text-danger");
        result.textContent = `The median of integers only is: ${JSON.stringify(median, null, " ")}`;
    }
    catch(error){
        result.classList.add("text-danger");
        result.innerHTML = error;
    }
}

// #5 //
function showFilteredEven() {
    const inputStr = document.getElementById("even-input").value;
    const result = document.getElementById("even-res");
    result.textContent = "";
    let filteredArr;
    try{
        filteredArr = filterEvenWrapper(inputStr);
        result.classList.remove("text-danger");
        result.textContent = `Your data filtered out even numbers: ${JSON.stringify(filteredArr, null, " ")}`;
    }
    catch(error){
        result.classList.add("text-danger");
        result.innerHTML = error;
    }
}