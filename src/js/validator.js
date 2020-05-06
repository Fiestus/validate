'use strict';

let rules = {
    required: true,
    email: true,
    length: 1,
    minlength: 1,
    maxlength: 1,
    latin: true
};

let messages = {
    required: '',
    email: '',
    length: '',
    latin: ''
};

let lang = ['ru-RU', 'kz-KZ'];









function validate(form, options) {

    // form.addEventListener('submit', function (e) {
    //     e.preventDefault();
    //     console.log(e);
    // }, options);
}

function vaild(e) {
    e.preventDefault();
    console.log(e);
}