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

appData.moneyPerDay = (appData.moneyData / 30).toFixed();

alert('Ежедневный бюджет: ' + appData.moneyPerDay);

if (appData.moneyData < 200) {
    console.log('Минимальный уровень достатка');
} else if (appData.moneyData > 200 && appData.moneyData < 2000) {
    console.log('Средний уровень достатка');
} else if (appData.moneyData > 2000) {
    console.log('Высокий уровень достатка');
} else {
    console.log('Произошла ошибка');
}


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