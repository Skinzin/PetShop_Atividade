const signInForm = document.getElementById("login");
const signUpForm = document.getElementById("signup");


signInForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    window.location.href = "./";
})

signUpForm.addEventListener("submit", (e) => {
    e.preventDefault();

    window.location.href = "./";
})