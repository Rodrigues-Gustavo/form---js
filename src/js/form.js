
// const forms = document.querySelectorAll('[required]');
// console.log(forms)
// const btn = document.querySelector('button');

// import { forms, btn } from './variables.js';
// import { formSent, formNotSent } from './sendMessage.js';


// function checkForms(forms) {
//     forms.forEach( form => {
//         checkEmptyForm(form);
//     });
// }

// function checkEmptyForm(form) {
//     if (form.value.trim() === '') {
//         setErrorFor(form, "Campo Obrigatório");
//     } else {
//         setSuccessFor(form);
//     }
// }


// function applyError(element) {
//     element.classList.add('error');
//     element.classList.remove('success');
// }

// function applySuccess(element) {
//     element.classList.add('success');
//     element.classList.remove('error');
// }

// function setSuccessFor (input) {
//     const formControl = input.parentElement;
//     applySuccess(formControl);
// }

// function setErrorFor(input, message){
//     const formControl = input.parentElement;
//     const errorMessage = formControl.querySelector('small');

//     applyError(formControl);
//     errorMessage.innerHTML = message;
// }

// btn.addEventListener('click', e => {
//     e.preventDefault();
//     checkForms(forms);
// });

// forms.forEach( form => {
//     form.addEventListener('click', () => {
//         checkEmptyForm(form);
//     });
// });

// factory

// const form = document.getElementById('form')
// const userName = document.getElementById('userName');
// const email = document.getElementById('email');
// const phone = document.getElementById('phone');


import { form, userName, email, phone, emailFormat, phoneFormat } from './variables.js';

form.addEventListener('click',(e) => {
    e.preventDefault();
    checkInputs(form);

});

function checkInputs() {
    const userNameValue = userName.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    
    if(userNameValue === ''){
        setErrorFor(userName, 'Nome obrigatório')
    } else {
        setSuccessFor(userName)
    }

    if(emailValue.match(emailFormat)) {
        setSuccessFor(email)
    } else {
        setErrorFor(email, 'Esse email não é válido')
    }

    if(phoneValue.match(phoneFormat)) {
        setSuccessFor(phone)
    } else {
        setErrorFor(phone, 'Esse número não é válido')
    }
}


function applyError(element) {
    element.classList.add('error');
    element.classList.remove('success');
}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const errorMessage = formControl.querySelector('small');
    formControl.className = 'form-control error';
    applyError(formControl);
    errorMessage.innerHTML = message;
}

function applySuccess(element) {
    element.classList.add('success');
    element.classList.remove('error');
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    applySuccess(formControl);
}


