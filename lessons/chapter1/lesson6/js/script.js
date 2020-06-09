let menu = document.querySelector('.menu'),
    menuItems = document.querySelectorAll('.menu > li'),
    menuItem5 = document.createElement('li');

menuItem5.classList.add('menu-item');
menuItem5.innerText = 'Пятый пункт';

menu.replaceChild(menuItems[2], menuItems[1]);
menu.insertBefore(menuItems[1], menuItems[3]);
menu.appendChild(menuItem5);

document.body.style.backgroundImage = 'url(img/apple_true.jpg)';
document.getElementById('title').innerText = 'Мы продаем только подлинную технику Apple';

let adv = document.querySelector('.adv');
adv.remove();

let answer = prompt('Как вы относитесь к технике Apple?', '');
let promptEl = document.getElementById('prompt');

promptEl.innerText = answer;



// let columns = document.querySelectorAll('.column');
// columns[1].removeChild(adv);
