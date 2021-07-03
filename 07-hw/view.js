"use strict";

// #1 //
function showMyTaxes() {
    const salary = document.getElementById("salary").value;
    const inputCountry = document.getElementById("taxes").value;
    const result = document.getElementById("taxes-res");
    result.textContent = "";
    let getTax;
    try{
        const country = transformCountry(inputCountry);
        getTax = getMyTaxes.call(country, salary);
        result.classList.remove("text-danger");
        result.textContent = `If you earn ${salary}$ in ${capitalizeName(inputCountry)}, you will pay ${getTax}$ tax`;
    }
    catch(error){
        result.classList.add("text-danger");
        result.innerHTML = error;
    }
}

// #2 //
function showMiddleTaxes() {
    const inputCountry = document.getElementById("middle").value;
    const result = document.getElementById("middle-res");
    result.textContent = "";
    let middleTax;
    try{
        const country = transformCountry(inputCountry);
        middleTax = getMiddleTaxes.call(country);
        result.classList.remove("text-danger");
        result.textContent = `In ${capitalizeName(inputCountry)}, middle tax for IT specialists is ${middleTax}$`;
    }
    catch(error){
        result.classList.add("text-danger");
        result.innerHTML = error;
    }
}

// #3 //
function showTotalTaxes() {
    const inputCountry = document.getElementById("total").value;
    const result = document.getElementById("total-res");
    result.textContent = "";
    let totalTax;
    try{
        const country = transformCountry(inputCountry);
        totalTax = getTotalTaxes.call(country);
        result.classList.remove("text-danger");
        result.textContent = `In ${capitalizeName(inputCountry)}, total tax for IT specialists is ${totalTax}$`;
    }
    catch(error){
        result.classList.add("text-danger");
        result.innerHTML = error;
    }
}

 // #4 //
 function showProfit() {
    const inputCountry = document.getElementById("profit").value;
    const result = document.getElementById("profit-res");
    result.textContent = "";
    try{
        const country = transformCountry(inputCountry);
        result.classList.remove("text-danger");
        if (country === ukraine) {
            result.textContent = JSON.stringify(getMySalary.call(ukraine))
        }
        else if (country === latvia) {
            result.textContent = JSON.stringify(getMySalary.call(latvia));
        }
        else if (country === litva) {
            result.textContent = JSON.stringify(getMySalary.call(litva));
        }
    }
    catch(error){
        result.classList.add("text-danger");
        result.innerHTML = error;
    }
}

//--------------------------------------------------------------------------------------------------------------------//
// function solve issue with country name came from input with quotes 
function transformCountry (inputCountry) {
    let country;
    if (inputCountry === "ukraine") return country = ukraine;
    else if (inputCountry === "latvia") return country = latvia;
    else if (inputCountry === "litva") return country = litva;
    else throw new Error("Please select the country from the list");
}