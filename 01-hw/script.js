"use strict" 

const socks = 15.678;
const jeans = 123.965;
const tShirt = 90.2345;
const numOfProd = 3;
const budget = 500;
const discountMin = 0;
const discountMax = 100;

const maxPrice = Math.max(socks, jeans, tShirt);
console.log(maxPrice);

const minPrice = Math.min(socks, jeans, tShirt);
console.log(minPrice);

const total = socks + jeans + tShirt;
console.log(total);

const totalInt = Math.floor(socks) + Math.floor(jeans) + Math.floor(tShirt);
console.log(totalInt);

const totalHundreds = Math.round(totalInt/100)*100;
console.log(totalHundreds);

const isEven = (Math.floor(total) % 2 === 0);
console.log(isEven);

const change = budget - total;
console.log(change);

const meanRounded = (total / numOfProd).toFixed(2);
console.log(meanRounded);

const discountPercent = Math.floor(Math.random() * (discountMax - discountMin + 1)) + discountMin;
const discountReal = Math.round(total * discountPercent / 100);
const newTotal = (total - discountReal).toFixed(2);
console.log(discountPercent + "%");
console.log(newTotal);

const cost = Math.floor(total) / 2;
const profit = cost - discountReal;
console.log(profit);
