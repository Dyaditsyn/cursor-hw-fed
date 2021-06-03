"use strict" 

const socksPrice = 15.678;
const jeansPrice = 123.965;
const tShirtPrice = 90.2345;
const numOfProd = 3;
const budget = 500;
const minDiscountPercent = 0;
const maxDiscountPercent = 100;

const maxPrice = Math.max(socksPrice, jeansPrice, tShirtPrice);

const minPrice = Math.min(socksPrice, jeansPrice, tShirtPrice);

const totalPrice = socksPrice + jeansPrice + tShirtPrice;

const totalPriceInt = Math.floor(socksPrice) + Math.floor(jeansPrice) + Math.floor(tShirtPrice);

const totalPriceHundreds = Math.round(totalPriceInt/100)*100;

const isTotalPriceEven = (Math.floor(totalPrice) % 2 === 0);

const change = budget - totalPrice;

const averagePriceRound = parseFloat((totalPrice / numOfProd).toFixed(2));

const randomDiscountPercent = Math.floor(Math.random() * (maxDiscountPercent - minDiscountPercent + 1)) + minDiscountPercent;
const discountRealRound = Math.round(totalPrice * randomDiscountPercent / 100);
const saleTotalPrice = parseFloat((totalPrice - discountRealRound).toFixed(2));

const costTotalPriceRound = Math.floor(totalPrice) / 2;
const profit = costTotalPriceRound - discountRealRound;

console.log(`Максимальна ціна: ${maxPrice}
Мінімальна ціна: ${minPrice}
Вартість всіх товарів: ${totalPrice}
Вартість всіх товарів обчислена з відкиненням копійок: ${totalPriceInt}
Сума товарів округлена до сотень: ${totalPriceHundreds}
Чи є сума округлена в меншу сторону (${Math.floor(totalPrice)}) парним числом? ${isTotalPriceEven}
Решта з 500грн (без округлення, за всі товари): ${change}
Середнє значення цін округлене до другого знаку: ${averagePriceRound}
Випадкова знижка: ${randomDiscountPercent}%
Сума до оплати після знижки: ${saleTotalPrice}
Чистий прибуток: ${profit}
`);
