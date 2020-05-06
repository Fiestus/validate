'use strict';

let money = +prompt('Ваш бюджет на месяц?', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');


let appData = {
    moneyData: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

// for (let i = 0; i < 2; i++) {
//     let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
//         b = +prompt('Во сколько обойдется?', '');
//
//     if (a !== '' && b !== '' && a !== null && b !== null) {
//         console.log('Done');
//         appData.expenses[a] = b;
//     } else {
//         i--;
//     }
// }

// let i = 0;
//
// while (i < 2) {
//     let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
//         b = +prompt('Во сколько обойдется?', '');
//
//     if (a !== '' && b !== '' && a !== null && b !== null) {
//         console.log('Done');
//         appData.expenses[a] = b;
//     } else {
//         i--;
//     }
//
//     i++;
// }



let i = 0;

do {
    let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
        b = +prompt('Во сколько обойдется?', '');

    if (a !== '' && b !== '' && a !== null && b !== null) {
        console.log('Done');
        appData.expenses[a] = b;
    } else {
        i--;
    }

    i++;
} while (i < 2);

appData.moneyPerDay = appData.moneyData / 30;

alert('Ежедневный бюджет: ' + appData.moneyPerDay);
console.log(appData);

if (appData.moneyData < 200) {
    console.log('Минимальный уровень достатка');
} else if (appData.moneyData > 200 && appData.moneyData < 2000) {
    console.log('Средний уровень достатка');
} else if (appData.moneyData > 2000) {
    console.log('Высокий уровень достатка');
} else {
    console.log('Произошла ошибка');
}

/*

1. number [NaN, Infinity, 30, 20.1]
2. string 'string', "string", `string`
3. boolean true/false
4. object {}, []
5. null - object
6. undefined
7. char

*/

///////////////////////////////////////
