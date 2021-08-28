"use strict";

// const getRandomChinese = (length) => {

// let output = '';
//     while (length) {
//         const result = new Promise( (resolve) => {
//             setTimeout( () => {
//                 const dateStr = Date.now().toString();
//                 const sign = dateStr.slice(dateStr.length - 5);
//                 const signStr = String.fromCharCode(sign);
//                 resolve(signStr);
//             }, 1000*length )
        
//         })
//         .then( data => {
//             output += data;
//             console.log(output) ;
//             return output;
//         })
    
//         length--;
//     }
//     return output;
// }

    

//console.log(getRandomChinese(5));


// const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// for (let i = 0, p = Promise.resolve(); i < 10; i++) {
//     p = p.then(() => delay(Math.random() * 1000))
//          .then(() => console.log(i));
// }


const getRandomChinese = (length) => {

    let output = '';
    const ms = 1000;
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
    
    for (let i = 0, p = Promise.resolve(); i < length; i++) {
        p = p.then(() => delay(ms))
             .then(() => {
                const dateStr = Date.now().toString();
                const sign = dateStr.slice(dateStr.length - 5);
                const signStr = String.fromCharCode(sign);
                output += signStr;
                console.log(output)
             });
    }
    return output;
}
       
getRandomChinese(5).then(res => console.log(res)); 