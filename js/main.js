let signUpPage = document.getElementById("signUpPage");
let logInPage = document.getElementById("logInPage");
let goLogin = document.getElementById("goLogin");
let goSign = document.getElementById("goSign");
let nameUser = document.getElementById("nameUser");
let emailUser = document.getElementById("emailUser");
let passUser = document.getElementById("passUser");
let showError = document.querySelector(".error");
let showError2 = document.querySelector(".error2");
let showError3 = document.querySelector(".error3");
let showError4 = document.querySelector(".error4");

// go to other pages
if (signUpPage && logInPage) {
  signUpPage.addEventListener("click", function () {
    window.location = "../pages/signUp.html";
  });
  logInPage.addEventListener("click", function () {
    window.location.href = "../pages/login.html";
  });
}

/*  stop click right in pages */
document.addEventListener("contextmenu", function (event) {
  event.preventDefault();
});
