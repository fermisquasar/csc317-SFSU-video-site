let usernamePassed = false;
let emailPassed = false;
let passwordPassed = false;
let passwordConfirmPassed = false;
let ageCheckPassed = false;
let tosCheckPassed = false;

document.getElementById("username").addEventListener("input", function (ev) {
    let userInput = ev.currentTarget;
    let username = userInput.value;

    const error = document.querySelector("#username-error");

    if(username.length >= 3 && /[a-zA-z]/.test(username.charAt(0))) {
        userInput.classList.add("valid-text");
        userInput.classList.remove("invalid-text");
        error.style.display = "none";
        usernamePassed = true;
    } else {
        userInput.classList.add("invalid-text");
        userInput.classList.remove("valid-text");
        error.textContent = "Username must be at least 3 characters and begin with a letter";
        error.style.display = "block";
        usernamePassed = false;
    }
});

document.getElementById("email").addEventListener("input", function (ev){
    let userInput = ev.currentTarget;
    let email = userInput.value;

    const error = document.querySelector('#email-error');

    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        userInput.classList.add("valid-text");
        userInput.classList.remove("invalid-text");
        error.style.display = "none";
        emailPassed = true;
    } else {
        userInput.classList.add("invalid-text");
        userInput.classList.remove("valid-text");
        error.textContent = "Must enter a valid email";
        error.style.display = "block";
        emailPassed = false;
    }
});

document.getElementById("password").addEventListener("input", function (ev) {
    let userInput = ev.currentTarget;
    let password = userInput.value;

    const error = document.querySelector('#password-error');

    if(password.length > 7 && /[A-Z]/.test(password) && /[0-9]/.test(password) && /[/*-+!@#$^&~]/){
        userInput.classList.add("valid-text");
        userInput.classList.remove("invalid-text");
        error.style.display = "none";
        passwordPassed = true;
    } else {
        userInput.classList.add("invalid-text");
        userInput.classList.remove("valid-text");
        error.textContent = "Password must be at least 8 characters, and contain one of each of the following: 1 uppercase letter,  1 number, and 1 special character (/ * - + ! @ # $ ^ & ~)";
        error.style.display = "block";
        passwordPassed = false;
    }
});

document.getElementById("over13").addEventListener("input", function (ev){
    let checkedStatus = over13.checked;

    const error = document.querySelector('#age-error');

    if(checkedStatus){
        console.log("Age check passed");
        error.style.display = "none";
        ageCheckPassed = true;
    } else {
        console.log("Age check failed");
        error.textContent = "Must confirm age";
        error.style.display = "block";
        ageCheckPassed = false;
    }
});

document.getElementById("tos").addEventListener("input", function (ev){
    let tosStatus = tos.checked;

    const error = document.querySelector('#tos-error');

    if(tosStatus){
        console.log("ToS check passed");
        error.style.display = "none";
        tosCheckPassed = true;
    } else {
        console.log("ToS check failed");
        error.textContent = "Must agree to Terms of Service";
        error.style.display = "block";
        tosCheckPassed = false;
    }
});

document.getElementById("conpassword").addEventListener("input", function (ev){
    let password = document.getElementById("password").value;
    let userInput = ev.currentTarget;
    let conpassword = userInput.value;

    const error = document.querySelector('#conpassword-error');

    if(conpassword == password){
        userInput.classList.add("valid-text");
        userInput.classList.remove("invalid-text");
        error.style.display = "none";
        passwordConfirmPassed = true;
    } else {
        userInput.classList.add("invalid-text");
        userInput.classList.remove("valid-text");
        error.textContent = "Passwords must match";
        error.style.display = "block";
        passwordConfirmPassed = false;
    }
});

document.getElementById("registration-form").addEventListener("submit", function (ev){
    ev.preventDefault();

    if(usernamePassed && emailPassed && passwordPassed && passwordConfirmPassed && ageCheckPassed && tosCheckPassed){
        ev.currentTarget.submit();
    } else {
        return;
    }
});