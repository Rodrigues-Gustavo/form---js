const form = document.getElementById('form')
const userName = document.getElementById('userName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let emailFormat =  (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
let phoneFormat = '^\\([0-9]{2}\\)([0-9]{9})$';
export { form, userName, email, phone, emailFormat, phoneFormat }