"use strict";

// #1 //
function showRandomArray(){
    const result = document.getElementById("random-array-res");
    result.textContent = JSON.stringify(getRandomArray(), null, " ");
}

