"use strict" 

const socks = 15.678;
const jeans = 123.965;
const tShirt = 90.2345;
const numOfProd = 3;
const budget = 500;
const discountMin = 0;
const discountMax = 100;

const maxPrice = Math.max(socks, jeans, tShirt);

const minPrice = Math.min(socks, jeans, tShirt);

const total = socks + jeans + tShirt;

const totalInt = Math.floor(socks) + Math.floor(jeans) + Math.floor(tShirt);

const totalHundreds = Math.round(totalInt/100)*100;;

const isEven = (Math.floor(total) % 2 === 0);

const change = budget - total;

const meanRounded = (total / numOfProd).toFixed(2);

const discountPercent = Math.floor(Math.random() * (discountMax - discountMin + 1)) + discountMin;
const discountReal = Math.round(total * discountPercent / 100);
const newTotal = (total - discountReal).toFixed(2);

const cost = Math.floor(total) / 2;
const profit = cost - discountReal;

console.log(`Максимальна ціна: ${maxPrice}
Мінімальна ціна: ${minPrice}
Вартість всіх товарів: ${total}
Вартість всіх товарів обчислена з відкиненням копійок: ${totalInt}
Сума товарів округлена до сотень: ${totalHundreds}
Чи є сума округлена в меншу сторону (${Math.floor(total)}) парним числом? ${isEven}
Решта з 500грн (без округлення, за всі товари): ${change}
Середнє значення цін округлене до другого знаку: ${meanRounded}
Випадкова знижка: ${discountPercent}%
Сума до оплати після знижки: ${newTotal}
Чистий прибуток: ${profit}
`);
