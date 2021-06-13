"use strict";

// #1 //
function showPairs(){
    const result = document.getElementById("task1-res");
    result.textContent = JSON.stringify(getPairs(students), null, " ");
}

// #2 //
function showPairsSubject(){
    const result = document.getElementById("task2-res");
    result.textContent = JSON.stringify(getPairsThemes(pairs, themes), null, " ");
}

// #3 //
function showStudentGrade(){
    const result = document.getElementById("task3-res");
    result.textContent = JSON.stringify(getStudentMarks(students, marks), null, " ");
}

// #4 //
function showRandomGrade(){
    const result = document.getElementById("task4-res");
    result.textContent = JSON.stringify(getPairsRandomMarks(pairsThemes), null, " ");
}
