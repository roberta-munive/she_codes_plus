function alertHooray(){
    alert("Hooray!");
}

function alertPassword(event){
    event.preventDefault();
    let passwordInputLocator = document.querySelector("#password-input");
    let password = passwordInputLocator.value;    alert(`Your super secret password is ${password} 🫢`);
}

function alertSignupInputs(event){
    event.preventDefault();
    let emailInputLocator = document.querySelector("#email-input");
    let email = emailInputLocator.value;
    let usernameInputLocator = document.querySelector("#username-input");
    let username = usernameInputLocator.value;
    alert(`👋 Your email is ${email} and your username is ${username}. Thank you for signing up!`);

}

//Challenge 1

let clickMeBtnLocator = document.querySelector("#special-button");
clickMeBtnLocator.addEventListener("click", alertHooray);

//Challenge 2
let passwordFormLocator = document.querySelector("#password-form");
passwordFormLocator.addEventListener("submit", alertPassword);

//Challenge 3
let signupFormLocator = document.querySelector("#signup-form");
signupFormLocator.addEventListener("submit", alertSignupInputs);
