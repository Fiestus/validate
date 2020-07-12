"use strict";

let inputTG = document.getElementById('tenge'),
    inputUSD = document.getElementById('usd'),
    data = null;


inputTG.addEventListener('input', function () {
    // Запрос на получение обменного курса
    let currency = getCurrency('usd', function (response) {
        console.log(response)

        return response;
    });
    console.log(currency);
});


function getCurrency(type, callback) {
    let request = new XMLHttpRequest();
    request.open('GET', 'js/currency.json');

    request.setRequestHeader('Content-type','application/json; charset=utf-8');
    request.send();

    let response = null;

    request.onload = function () {
        response = {
            status: request.status,
            currency: JSON.parse(request.responseText)
        };
        callback(response);
    };
}


// function update(data) {
//     if (data) {
//         inputUSD.value = (inputTG.value / data.usd).toFixed(2);
//     } else {
//         inputUSD.style.borderColor = 'red';
//         inputUSD.value = 'Error!';
//     }
// }
//
// function cachingDecorator(func) {
//     let cache = new Map();
//
//     return function (x) {
//         if (cache.has(x)) {
//             return cache.get(x);
//         }
//
//         let result = func(x);
//
//         cache.set(x, result);
//         return result;
//     }
// }
//

