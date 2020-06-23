"use strict";

// class Tabs {
//
//     tabsWrapper;
//     tabsHeader;
//     tabsContainer;
//
//     constructor({wrapper, header, container}) {
//         this.tabsWrapper = document.querySelector(wrapper);
//         this.tabsHeader = document.querySelector(header);
//         this.tabsContainer = document.querySelector(container);
//
//         this.init();
//     }
//
//     init() {
//         // Tabs
//         let tabContainerCollection = this.tabsContainer.children;
//
//         let i1 = 0;
//         for (let item of tabContainerCollection) {
//             item.style.display = 'none';
//             item.setAttribute('data-id', i1);
//
//             i1++;
//         }
//
//         tabContainerCollection[0].style.display = '';
//
//         // Links
//         let tabLinkCollection = this.tabsHeader.children;
//
//         // Без делегирования
//         let i = 0;
//         for (let item of tabLinkCollection) {
//
//             item.setAttribute('data-id', i);
//
//             let tabID = item.getAttribute('data-id');
//
//             item.addEventListener('click', function (event) {
//
//                 for (let item of tabLinkCollection) {
//                     item.classList.remove('is-active');
//                 }
//
//                 item.classList.add('is-active');
//
//                 for (let item of tabContainerCollection) {
//                     item.style.display = 'none';
//
//                     let contID = item.getAttribute('data-id');
//
//                     if (tabID == contID) {
//                         item.style.display = '';
//                     }
//                 }
//
//             });
//
//             i++;
//         }
//     }
// }
//
// let tabs = new Tabs({
//     wrapper: '.tabs',
//     header: '.tabs-header',
//     container: '.tabs-content'
// });

// @Todo
//  1. понять все про перебирающие методы:
    // for
    // for .. in
    // for .. of
    // forEach

// 2. сделать с делегированием
// 3. убрать i, i1
// 4. попробовать без data-id



let tab = document.querySelectorAll('.info-header-tab'),
    info = document.querySelector('.info-header'),
    tabContent = document.querySelectorAll('.info-tabcontent');

function hideTabContents(from) {
    for (let i = from; i < tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
    }
}

function removeActiveClasses(from) {
    for (let i = from; i < tab.length; i++) {
        tab[i].classList.remove('is-active');
    }
}

function addActiveClass(to) {
    let element = tab[to];

    if (!element.classList.contains('is-active')) {
        element.classList.add('is-active');
    }
}

function showTabContent(numb) {
    let tab = tabContent[numb];

    if (tab.classList.contains('hide')) {
        tab.classList.remove('hide');
        tab.classList.add('show');
    }
}

hideTabContents(1);

info.addEventListener('click', function (event) {
   let target = event.target;

   if (target && target.classList.contains('info-header-tab')) {
       hideTabContents(0);
       removeActiveClasses(0);

       for (let i = 0; i < tab.length; i++) {
           if (target == tab[i]) {
               showTabContent(i);
               addActiveClass(i);
               break;
           }
       }
   }
});

// Timer

function getRemainingTime(deadline) {
    let t = (Date.parse(deadline) - Date.parse(new Date())) / 1000,
        d = Math.floor((t / 60 / 60 / 24) % 24),
        h = Math.floor((t / 60 / 60) % 24),
        m = Math.floor((t / 60) % 60),
        s = Math.floor(t % 60);

    return {
        total: t,
        days: d,
        hours: h,
        minutes: m,
        seconds: s
    };
}

function setTimer(id, deadline) {
    let timer = document.getElementById(id),
        days = timer.querySelector('.days'),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateTimer, 1000);

    function updateTimer() {
        let currentTime = getRemainingTime(deadline);

        if (currentTime.total >= 0) {
            days.innerText = addZero(currentTime.days);
            hours.innerText = addZero(currentTime.hours);
            minutes.innerText = addZero(currentTime.minutes);
            seconds.innerText = addZero(currentTime.seconds);
        } else {
            return clearInterval(timeInterval);
        }
    }
}

function addZero(number) {
    if (number < 10) return `0${number}`;
    return number;
}

let deadline = '2020-06-24 19:25:00';
setTimer('timer', deadline);

// Modal

let more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    close =  document.querySelector('.popup-close'),
    tabsContent = document.querySelector('.tabs-content');

more.addEventListener('click', function (event) {
   showModal(this);
});

close.addEventListener('click', function (event) {
    hideModal();
});

tabsContent.addEventListener('click', function (event) {
   let target = event.target;
   
   if (target && target.classList.contains('description-btn')) {
       showModal(target);
   }
});

function showModal(el = null) {
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';

    if (el !== null) {
        el.classList.add('more-splash');

        window.modalTarget = el;
    }
}

function hideModal() {
    overlay.style.display = 'none';
    document.body.style.overflow = '';

    if (window.modalTarget && window.modalTarget.classList.contains('more-splash')) {
        window.modalTarget.classList.remove('more-splash');
    }
}

// lesson 11

let user = {
    name: 'Andrey',
    surname: 'Meshkov'
};

let age = document.getElementById('age');
function showUser(surname, name) {
    alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}


// showUser.call(age, user.surname, user.name);
// showUser.apply(age, [user.surname, user.name]);