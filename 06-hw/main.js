"use strict";

const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }];

// #1 //
const getSubjects = (studentIndex) => {
    if ( isNaN(studentIndex) ) {
        throw new Error("Please select a student from the list to see subjects!");
    }
    return Object.keys(students[studentIndex].subjects).map( subject => 
            capitalizeName(subject).replace("_", " ") );
}

                        
// #2 //
const getAverageMark = (studentIndex) => {
    if ( isNaN(studentIndex) ) {
        throw new Error("Please select a student from the list to see subjects!");
    }
    const studentMarks = Object.values(students[studentIndex].subjects).join(",").split(",");
    return Number(getAverage(...studentMarks).toFixed(2));
}

// #3 //
const getStudentInfo = (studentIndex) => {
    if ( isNaN(studentIndex) ) {
        throw new Error("Please select a student from the list to see subjects!");
    }
    const {name, course} = students[studentIndex];
    const studentInfo = {name, course};
    studentInfo.averageMark = getAverageMark(studentIndex);

    return studentInfo;
}

// #4 //
const getStudentsNames = (students) => students.map( student => student.name).sort();

// #5 //
const getBestStudent = (students) => {
    const averages = students.map( (student, index) => getAverageMark(index));
    const bestAverage = Math.max(...averages);
    return students[averages.indexOf(bestAverage)].name;
}

// #6 //
const calculateWordLetters = (inputWord) => {
    const word = inputStringValid(inputWord).split(" ").join("");
    const lettersCount = {}
    for (let i = 0; i < word.length; i++) {
        lettersCount[word[i]] ? lettersCount[word[i]] += 1 : lettersCount[word[i]] = 1
    }
    return lettersCount;
}


// ------------------------------------------------------------------------------------------------------------------ //


function capitalizeName(value) {
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
}

function getAverage(...numbers) {
    const numbersArr = [...numbers];
    const total = numbersArr.reduce( (total, number) => {
        return total + Number(number);
    }, 0);
    return total / numbersArr.length;
}

function inputStringValid(inputVal) {
    if ( !(inputVal && inputVal.trim().length)  ) {
        throw new Error(`Invalid input! Field can not be empty`);
    }
    return inputVal.trim();
}