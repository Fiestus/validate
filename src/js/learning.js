'use strict';

let money, time;

function start() {
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while (isNaN(money) || money === '' || money === null || money === 0) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}
start();

let appData = {
    moneyData: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function calculateExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
            b = +prompt('Во сколько обойдется?', '');

        if (a !== '' && b !== '' && a !== null && b !== null) {
            console.log('Done');
            appData.expenses[a] = b;
        } else {
            i--;
        }
    }
}
calculateExpenses();

function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        let ansver = prompt('Статья необязательных расходов?', '');
        appData.optionalExpenses[i + 1] = ansver;
    }
}
chooseOptExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.moneyData / 30).toFixed();
    alert('Ежедневный бюджет: ' + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel() {
    if (appData.moneyData < 200) {
        console.log('Минимальный уровень достатка');
    } else if (appData.moneyData > 200 && appData.moneyData < 2000) {
        console.log('Средний уровень достатка');
    } else if (appData.moneyData > 2000) {
        console.log('Высокий уровень достатка');
    } else {
        console.log('Произошла ошибка');
    }
}
detectLevel();

function calculateSavings() {

    if (appData.savings === true) {
        let summ = +prompt('Сумма накоплений', ''),
            percent = +prompt('Под какой процент?', '');

        let profit = summ / 100 / 12 * percent;
        alert('Сумма накоплений в месяц: ' + profit);

        appData.income.push(profit);
    }

}
calculateSavings();

console.log(appData);

/*

1. number [NaN, Infinity, 30, 20.1]
2. string 'string', "string", `string`
3. boolean true/false
4. object {}, []
5. null - object
6. undefined

*/

///////////////////////////////////////


// function slow() {
//     setTimeout(function () {
//         console.log('I\'m slow function');
//     }, 1000);
// }
//
// function fast() {
//     console.log("I'm fast function");
// }
//
//
// function callback(callback) {
//     setTimeout(function () {
//         console.log(`I'm callback function`);
//         // console.log('I\'m slow function');
//     }, 1000);
//
//     callback();
// }
//
// callback(slow, fast);


//
// slow();
// fast();

////////////////////

// let options = {
//   width: 1024,
//   height: 768
// };
//
// options.isRetina = false;
//
// options.colors = {
//     red: 'red',
//     black: 'black'
// };
//
// delete options.isRetina;
//
// console.log(Object.keys(options).length);