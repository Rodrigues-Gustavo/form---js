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


