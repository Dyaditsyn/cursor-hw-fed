"use strict";

// #1 //
// function showMyTaxes() {
//     const salary = document.getElementById("salary").value;
//     const inputCountry = document.getElementById("taxes").value;
//     const result = document.getElementById("taxes-res");
//     result.textContent = "";
//     let getTax;
//     try{
//         const country = transformCountry(inputCountry);
//         getTax = getMyTaxes.call(country, salary);
//         result.classList.remove("text-danger");
//         result.textContent = `If you earn ${salary}$ in ${capitalizeName(inputCountry)}, you will pay ${getTax}$ tax`;
//     }
//     catch(error){
//         result.classList.add("text-danger");
//         result.innerHTML = error;
//     }
// }



// //--------------------------------------------------------------------------------------------------------------------//
// // function solve issue with country name came from input with quotes 
// function transformCountry (inputCountry) {
//     let country;
//     if (inputCountry === "ukraine") return country = ukraine;
//     else if (inputCountry === "latvia") return country = latvia;
//     else if (inputCountry === "litva") return country = litva;
//     else throw new Error("Please select the country from the list");
// }