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
    savings: true,
    chooseExpenses: function () {
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
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.moneyData / 30).toFixed();
        alert('Ежедневный бюджет: ' + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyData < 200) {
            console.log('Минимальный уровень достатка');
        } else if (appData.moneyData > 200 && appData.moneyData < 2000) {
            console.log('Средний уровень достатка');
        } else if (appData.moneyData > 2000) {
            console.log('Высокий уровень достатка');
        } else {
            console.log('Произошла ошибка');
        }
    },
    checkSavings: function () {
        if (appData.savings === true) {
            let summ = +prompt('Сумма накоплений', ''),
                percent = +prompt('Под какой процент?', '');

            let profit = summ / 100 / 12 * percent;
            alert('Сумма накоплений в месяц: ' + profit);

            appData.income.push(profit);
        }
    },
    chooseOptExpenses: function () {
        for (let i = 0; i < 3; i++) {
            let ansver = prompt('Статья необязательных расходов?', '');
            appData.optionalExpenses[i + 1] = ansver;
        }
    },
    chooseIncome: function () {
        let items = prompt('Дополнительный доход через запятую', '');

        while (items === '' || items === null) {
            items = prompt('Дополнительный доход через запятую (не пустое значение)', '');
        }

        this.income = items.split(',');

        for (let i = 0; i < this.income.length; i++) {
            this.income.forEach((item, index, arr) => {
                if (!this.isString(item)) {
                    this.income = prompt('Дополнительный доход через запятую (строковые значения)', '').split(',');
                    i--;
                }
            });
        }

        let more = prompt('Может что-то еще?', '');

        while (!this.isString(more)) {
            more = prompt('Может что-то еще?  (строковые значения)', '');
        }

        this.income.push(more);
        this.income.sort();

        let output = 'Способы доп. заработка: ';

        this.income.forEach(function (value, index, array) {
            output += value + ', ';
        });

        alert(output);
    },
    isString: function (val) {
        if (!isNaN(val) || typeof val !== 'string') return false;
        return true;
    }
};

appData.chooseIncome();

console.log(appData.income);

let output = 'Наша программа включает в себя данные: ';

for (let prop in appData) {
    output += prop + ', ';
}
console.log(output);

/*

1. number [NaN, Infinity, 30, 20.1]
2. string 'string', "string", `string`
3. boolean true/false
4. object {}, []
5. null - object
6. undefined

*/
