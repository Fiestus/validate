

let form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
});

validate(form, {
    rules: {
        username: {
            required: true,
            minlength: 5,
            latin: true
        },
        email: {
            required: true,
            email: true
        },
        password: {
            required: true
        },
        password2: {
            required: true
        }
    },
    messages: {
        username: {
            required: '',
            minlength: '',
            latin: ''
        },
        email: {
            required: '',
            email: ''
        },
        password: {
            required: ''
        },
        password2: {
            required: ''
        }
    }
});




// console.log(form.validate());
//
// //
// // function () {
// //
// // }
// //
//
// // form.validate();
//
//
//
// function validate() {
//     console.log('Valid');
// }
//




//
//
//
// function validateEmail(val) {
//     console.log(val);
//     if (val === '' || val === undefined) return false;
//
//     return true;
// }
//
// function message() {
//     el = document.querySelector('#email').nextElementSibling;
//     el.style.visibility = 'visible';
// }
//
// function removeMessage() {
//     el = document.querySelector('#email').nextElementSibling;
//     el.style.visibility = 'hidden';
// }
//
// function validate(e) {
//     e.preventDefault();
//
//     if (validateEmail() === false) {
//      message();
//     } else {
//         removeMessage();
//     }
// }
//
// // Event Listener
// document.addEventListener('submit', validate);


