//UI Var
var nameUI = document.getElementById('name');
var zipcodeUI = document.getElementById('zipcode');
var emailUI = document.getElementById('email');
var phoneUI = document.getElementById('phone');


//Event Listener
nameUI.addEventListener('blur',validateName);
zipcodeUI.addEventListener('blur',validateZipcode);
emailUI.addEventListener('blur',validateEmail);
phoneUI.addEventListener('blur',validatePhone);

//Function

function validateName(){
    nameUI = document.getElementById('name');
    var re = /^[a-zA-Z]{2,10}$/;

    if(!re.test(nameUI.value)){
        nameUI.classList.add('is-invalid');
    }else{
        nameUI.classList.remove('is-invalid');
    }
}

function validateZipcode(){
    zipcodeUI = document.getElementById('zipcode');
    var re = /^[0-9]{6}(-[0-9]{4})?$/;

    if(!re.test(zipcodeUI.value)){
        zipcodeUI.classList.add('is-invalid');
    }else{
        zipcodeUI.classList.remove('is-invalid');
    }
}

function validateEmail(){
    emailUI = document.getElementById('email');
    var re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if(!re.test(emailUI.value)){
        emailUI.classList.add('is-invalid');
    }else{
        emailUI.classList.remove('is-invalid');
    }
}

function validatePhone(){
    phoneUI = document.getElementById('phone');
    var re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

    if(!re.test(phoneUI.value)){
        phoneUI.classList.add('is-invalid');
    }else{
        phoneUI.classList.remove('is-invalid');
    }
}