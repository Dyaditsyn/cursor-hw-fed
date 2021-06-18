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
    result.textContent = "";;
    try{
        result.classList.remove("text-danger");
        result.textContent = `The average of integers only is: ${averageWrapper(inputStr)}`;
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
    try{
        result.classList.remove("text-danger");
        result.textContent = `The median of integers only is: ${medianWrapper(inputStr)}`;
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

// #6 //
function showPositivesCount() {
    const inputStr = document.getElementById("positive-input").value;
    const result = document.getElementById("positive-res");
    result.textContent = "";
    try{
        result.classList.remove("text-danger");
        result.textContent = `Amount of positive numbers in data set is: ${positivesCountWrapper(inputStr)}`;
    }
    catch(error){
        result.classList.add("text-danger");
        result.innerHTML = error;
    }
}

// #7 //
function showDividedByFive() {
    const inputStr = document.getElementById("devide-input").value;
    const result = document.getElementById("devide-res");
    result.textContent = "";
    let devidedByFive;
    try{
        devidedByFive = devidedByFiveWrapper(inputStr);
        result.classList.remove("text-danger");
        result.textContent = `Numbers in data set is devided by five: ${JSON.stringify(devidedByFive, null, " ")}`;
    }
    catch(error){
        result.classList.add("text-danger");
        result.innerHTML = error;
    }
}

// #8 //
function showReplacedBadWords() {
    const inputStr = document.getElementById("bad-word-input").value;
    const result = document.getElementById("bad-word-res");
    result.textContent = "";
    try{
        result.classList.remove("text-danger");
        result.textContent = replaceBadWords(inputStr);
    }
    catch(error){
        result.classList.add("text-danger");
        result.innerHTML = error;
    }
}

// #9 //
function showDividedByThree() {
    const inputStr = document.getElementById("by-tree-input").value;
    const result = document.getElementById("by-tree-res");
    result.textContent = "";
    let devided;
    try{
        devided = devideByTreeWrapper(inputStr);
        result.classList.remove("text-danger");
        result.textContent = `Devided phrase is: ${JSON.stringify(devided, null, " ")}`;
    }
    catch(error){
        result.classList.add("text-danger");
        result.innerHTML = error;
    }
}

// #10 //
function showCombinations() {
    const inputStr = document.getElementById("combinations-input").value;
    const result = document.getElementById("combinations-res");
    result.textContent = "";
    let combinations;
    try{
        combinations = combinationsWrapper(inputStr);
        result.classList.remove("text-danger");
        result.textContent = `Combinations are: ${JSON.stringify(combinations, null, " ")}`;
    }
    catch(error){
        result.classList.add("text-danger");
        result.innerHTML = error;
    }
}