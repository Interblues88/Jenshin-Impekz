const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const age = document.getElementById('age');
const logcheck = document.getElementById('logcheck')
let check = 0;

form.addEventListener('submit',e => {
    check = 0;
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
    check = 1;
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const agevalue = age.value.trim();
    const logcheckvalue = logcheck.checked;

    if(usernameValue === '') {
        setError(username,'Name is required');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!emailValue.includes('@gmail.com')){
        setError(email,'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password,'Password is required');
    } else if (passwordValue.length < 8) {
        setError(password,'Password must be at least 8 character');
    } else {
        setSuccess(password);
    }

    if(agevalue === '') {
        setError(age,'Please Input your age');
    } else if (agevalue < 17) {
        setError(age, 'Age minimal is 17')
    } else {
        setSuccess(age);
    }

    if(!logcheckvalue) {
        setError(logcheck,'You must agree to the terms and conditions');
    } else {
        setSuccess(logcheck);
    }

    if(check === 0) {
        window.location.href = "Home.html"
    }
};