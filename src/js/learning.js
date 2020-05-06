'use strict';

let money = prompt('Ваш бюджет на месяц?', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    moneyData: money,
    timeData: time,
    expenses: {
        [prompt('Введите обязательную статью расходов в этом месяце', '')]: prompt('Во сколько обойдется?', ''),
        [prompt('Введите обязательную статью расходов в этом месяце', '')]: prompt('Во сколько обойдется?', ''),
    },
    optionalExpenses: {},
    income: [],
    savings: false
};

alert('Бюджет на 1 день: ' + appData.moneyData / 30);

/*

1. number [NaN, Infinity, 30, 20.1]
2. string 'string', "string", `string`
3. boolean true/false
4. object {}, []
5. null - object
6. undefined
7. char

*/