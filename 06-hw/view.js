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

