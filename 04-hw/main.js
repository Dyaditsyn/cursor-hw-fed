"use strict";

const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

// #1 //
const getPairs = students => [[students[0], students[2]], [students[1], students[3]], [students[4], students[5]]];

const pairs = getPairs(students);
console.log(pairs);

// #2 //
const getPairsThemes = (pairs, themes) => {
    let pairsThemes =[];
    for (let i = 0; i < pairs.length; i++) {
        pairsThemes[i] = [pairs[i].join(" і ").split(",").concat(themes[i])];
    }
    return pairsThemes;
}

const pairsThemes = getPairsThemes(pairs, themes);
console.log(pairsThemes);

// #3 //
const getStudentMarks = (students, marks) => {
    let studentMarks =[];
    for (let i = 0; i < students.length; i++) {
        studentMarks[i] = [students[i], marks[i]];
    }
    return studentMarks;
}

const studentMarks = getStudentMarks(students, marks);
console.log(studentMarks);

// #4 //
const getPairsRandomMarks = pairsThemes => {
    let pairsRandomMarks = [...pairsThemes];
    
    for (let i = 0; i < pairsRandomMarks.length; i++) {
        pairsRandomMarks[i].push(randomGrade());
    }
    return pairsRandomMarks;
}

const pairsRandomMarks = getPairsRandomMarks(pairsThemes);
console.log(pairsRandomMarks);

// help function calculates random grade 1...5
function randomGrade() {
    return Math.floor(Math.random() * 5) + 1;
}