const form = document.getElementById('form');
const button = document.getElementsByTagName('button');
const error = document.getElementById('error');
const first_name = document.getElementsByName('first_name');
const last_name = document.getElementsByName('last_name');
const email = document.getElementsByName('email');
const phone_number = document.getElementsByName('phone_number');
const password = document.getElementsByName('password');
const password_conf = document.getElementsByName('password_conf');


button.addEventListener("submit", myFunction);

