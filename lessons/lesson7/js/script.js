"use strict";

let start                = document.getElementById('start'),

    budget               = document.getElementsByClassName('budget-value')[0],
    dayBudget            = document.getElementsByClassName('daybudget-value')[0],
    level                = document.getElementsByClassName('level-value')[0],
    expenses             = document.getElementsByClassName('expenses-value')[0],
    optionalExpenses     = document.getElementsByClassName('optionalexpenses-value')[0],
    income               = document.getElementsByClassName('income-value')[0],
    monthSavings         = document.getElementsByClassName('monthsavings-value')[0],
    yearSavings          = document.getElementsByClassName('yearsavings-value')[0],

    expensesItem         = document.getElementsByClassName('expenses-item'),

    expensesItemBtn      = document.getElementsByTagName('button')[0],
    optionalexpensesBtn  = document.getElementsByTagName('button')[1],
    countBudgetBtn       = document.getElementsByTagName('button')[2],

    optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item'),

    chooseIncomeItem     = document.querySelector('.choose-income'),
    savings              = document.querySelector('#savings'),
    chooseSumItem        = document.querySelector('.choose-sum'),
    choosePercentItem    = document.querySelector('.choose-percent'),
    yearValue            = document.querySelector('.year-value'),
    monthValue           = document.querySelector('.month-value'),
    dayValue             = document.querySelector('.day-value');

let money, time;

start.addEventListener('click', function (event) {
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while (isNaN(money) || money === '' || money === null || money === 0) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }

    appData.budget = money;
    appData.timeData = time;

    budget.textContent = money.toFixed();

    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();

    expensesItemBtn.removeAttribute('disabled');
    optionalexpensesBtn.removeAttribute('disabled');
    countBudgetBtn.removeAttribute('disabled');

});

expensesItemBtn.addEventListener('click', function (event) {
    appData.chooseExpenses();
});

optionalexpensesBtn.addEventListener('click', function (event) {
    appData.chooseOptExpenses();
});

countBudgetBtn.addEventListener('click', function (event) {
    appData.detectDayBudget();
});

chooseIncomeItem.addEventListener('input', function (event) {
    appData.chooseIncome();
});

savings.addEventListener('click', function (event) {
    appData.savings = !appData.savings;
    appData.checkSavings();
});

chooseSumItem.addEventListener('input', function (event) {
    appData.checkSavings();
});

choosePercentItem.addEventListener('input', function (event) {
    appData.checkSavings();
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
    chooseExpenses: function () {
        let sum = 0;

        for (let i = 0; i < expensesItem.length; i++) {

            let a = expensesItem[i].value;

            ++i;
            if (expensesItem[i] === undefined) break;

            let b = expensesItem[i].value;

            if (a !== '' && b !== '' && a !== null && b !== null) {
                appData.expenses[a] = b;
                sum += +b;

            } else {
                i--;
            }
        }
        this.hasExpenses = true;
        this.expensesSum = sum;

        expenses.textContent = sum;

    },
    detectDayBudget: function () {
        if (isNaN(appData.budget)) return;

        let budget = this.budget;

        if (this.hasExpenses) {
            budget -= this.expensesSum;
        }

        appData.moneyPerDay = (budget / 30).toFixed();
        dayBudget.textContent = appData.moneyPerDay;

        this.detectLevel()
    },
    detectLevel: function () {
        if (appData.budget < 200) {
            level.textContent = 'Минимальный уровень достатка';
        } else if (appData.budget > 200 && appData.budget < 2000) {
            level.textContent = 'Средний уровень достатка';
        } else if (appData.budget > 2000) {
            level.textContent = 'Высокий уровень достатка';
        } else {
            level.textContent = 'Произошла ошибка';
        }
    },
    checkSavings: function () {
        if (appData.savings === true && chooseSumItem.value != '' && choosePercentItem.value != '') {
            let summ = +chooseSumItem.value,
                percent = +choosePercentItem.value;

            let profit = (summ / 100 / 12 * percent);
            monthSavings.textContent = profit.toFixed(1);
            yearSavings.textContent = (profit * 12).toFixed(1);

            appData.income.push(profit);
        }
    },
    chooseOptExpenses: function () {
        let sum = 0;

        for (let i = 0; i < optionalexpensesItem.length; i++) {
            sum += +optionalexpensesItem[i].value;
            appData.optionalExpenses[i + 1] = +optionalexpensesItem[i].value;
        }

        optionalExpenses.textContent = sum;
    },
    chooseIncome: function () {
        let summ = 0;
        let value = chooseIncomeItem.value;

        this.income = value.split(',').sort();

        this.income.forEach(function (value, index, array) {
            summ += +value;
        });

        income.textContent = summ;
    },
    isString: function (val) {
        if (!isNaN(val) || typeof val !== 'string') return false;
        return true;
    }
};