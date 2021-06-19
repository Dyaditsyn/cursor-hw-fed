"use strict";

// #1 //
function showSubjects(){
    const student = document.getElementById("subjects").value;
    const result = document.getElementById("subjects-res");
    result.textContent = "";
    let subjects;
    try{
        subjects = getSubjects(student);
        result.classList.remove("text-danger");
        result.textContent = `${students[student].name}'s subjects: ${JSON.stringify(subjects, null, " ")}`;
    }
    catch(error){
        result.classList.add("text-danger");
        result.innerHTML = error;
    }
}

// #2 //
function showMark(){
    const student = document.getElementById("mark").value;
    const result = document.getElementById("mark-res");
    result.textContent = "";
    let averageMark;
    try{
        averageMark = getAverageMark(student);
        result.classList.remove("text-danger");
        result.textContent = `${students[student].name}'s average mark is: ${averageMark}`;
    }
    catch(error){
        result.classList.add("text-danger");
        result.innerHTML = error;
    }
}

// #3 //
function showInfo(){
    const student = document.getElementById("info").value;
    const result = document.getElementById("info-res");
    result.textContent = "";
    let studentInfo;
    try{
        studentInfo = getStudentInfo(student);
        result.classList.remove("text-danger");
        result.textContent = `Info about ${students[student].name}: ${JSON.stringify(studentInfo, null, " ")}`;
    }
    catch(error){
        result.classList.add("text-danger");
        result.innerHTML = error;
    }
}