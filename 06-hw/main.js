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
const getSubjects = (i) => {
    if ( isNaN(i) ) {
        throw new Error("Please select a student from the list to see subjects!");
    }
    return Object.keys(students[i].subjects)
                        .map( subject => 
                        capitalizeName(subject).replace("_", " ") )};

                        

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

