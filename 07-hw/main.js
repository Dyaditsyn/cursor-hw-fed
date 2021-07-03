"use strict";

const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

// #1 //
function getMyTaxes(inputSal) {
    const salary = +inputNumberValid(inputSal);
    return salary * this.tax;
}                   

// #2 //

function getMiddleTaxes() {
    return Number((this.middleSalary * this.tax).toFixed(2));
}  

// #3 // 

function getTotalTaxes() {
    return Number((this.middleSalary * this.tax * this.vacancies).toFixed(2));
}

// #4 // 

function getMySalary() {
    const salary = getRandomNumber(1500, 2000);
    const taxes = Number((salary * this.tax).toFixed(2));
    const salaryObj = {  
        salary: salary,
        taxes: taxes,
        profit: salary - taxes
    }
    setInterval( () => console.log(salaryObj), 10000 ) 
    return salaryObj;
}

console.log('Function 1 tests - Your taxes according to your country');
console.log(getMyTaxes.call(ukraine, '1000'));
console.log(getMyTaxes.call(latvia, '2000'));
console.log(getMyTaxes.call(litva, '3000'));

console.log('Function 2 tests - MIddle taxes for IT-specialists per country');
console.log(getMiddleTaxes.call(ukraine));
console.log(getMiddleTaxes.call(latvia));
console.log(getMiddleTaxes.call(litva));

console.log('Function 3 tests - Overall IT-specialists taxes per country');
console.log(getTotalTaxes.call(ukraine));
console.log(getTotalTaxes.call(latvia));
console.log(getTotalTaxes.call(litva));

console.log('Function 4 tests - profit per country ');
console.log('Ukraine', getMySalary.call(ukraine));
console.log('Latvia', getMySalary.call(latvia));
console.log('Litva', getMySalary.call(litva));



// ------------------------------------------------------------------------------------------------------------------ //

// help function 
function getRandomNumber(highLimit, lowLimit) {
    return Math.floor (Math.random() * (highLimit - lowLimit + 1) ) + lowLimit;
}

// help function check input for numbers only
function inputNumberValid(inputVal) {
    if ( !(inputVal && inputVal.trim().length) || isNaN(Number(inputVal)) || inputVal < 0) {
            throw new Error("Invalid input! A positive numbers only accepted");
    }
    return inputVal;
}

function capitalizeName(value) {
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
}
