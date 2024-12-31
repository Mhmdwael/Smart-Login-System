
const showError5 = document.querySelector(".error5");
const showError7 = document.querySelector(".error7");
const showError6 = document.querySelector(".error6");
const showCaseError = document.querySelector(".case-error");
const showEror2 = document.querySelector(".error2");
let users = [];

if (localStorage.getItem("user") !== null) {
  users = JSON.parse(localStorage.getItem("user"));
}

function logIn() {
  let emailInput = emailUser.value;
  let passInput = passUser.value;

  if (emailInput.length === 0 || passInput.length === 0) {
    showError7.classList.remove("d-none");
    return false;
  }

  let userFound = false;
  let caseSensitiveError = false;

  for (let i = 0; i < users.length; i++) {
    let emailTrue = users[i].email;
    let emailLowerCase = emailTrue;
    let passTrue = users[i].password;
    if (emailInput === emailLowerCase && passInput === passTrue) {
      userFound = true;
      localStorage.setItem('loggedInEmail', emailInput);
      break;
    }

    if (emailInput === emailLowerCase && passInput !== passTrue) {
      caseSensitiveError = true;
    }
  }

  if (userFound) {
    return true;
  } else if (caseSensitiveError) {
    caseSensitiveError = false;
    showCaseError.classList.remove("d-none");
    emailUser.classList.add("is-invalid");
    return false;
  } else {
    showError5.classList.remove("d-none");
    emailUser.classList.remove("is-valid");
    return false;
  }
}

function emailVallidation() {
  let emailInput = emailUser.value.toLowerCase();
  let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  if (regex.test(emailInput)) {
    emailUser.classList.add("is-valid");
    emailUser.classList.remove("is-invalid");
    showError5.classList.add("d-none");
    showError7.classList.add("d-none");
    showEror2.classList.add("d-none");
    showCaseError.classList.add("d-none");
    return true;
  } else {
    emailUser.classList.remove("is-valid");
    emailUser.classList.add("is-invalid");
    showEror2.classList.remove("d-none");
    showError7.classList.remove("d-none");
    return false;
  }
}

function passVallidation() {
  let passInput = passUser.value;
  let regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;

  if (regex.test(passInput)) {
    passUser.classList.add("is-valid");
    passUser.classList.remove("is-invalid");
    showError6.classList.add("d-none");
    showError7.classList.add("d-none");
    return true;
  } else {
    passUser.classList.remove("is-valid");
    passUser.classList.add("is-invalid");
    showError6.classList.remove("d-none");
    return false;
  }
}
emailUser.addEventListener('input',function () {
  emailVallidation()
});
passUser.addEventListener('input',function () {
  passVallidation()
});
logBtn.addEventListener("click", function () {
  if (logIn()) {
    showError5.classList.add("d-none");
    showError6.classList.add("d-none");
    window.location.href = "../pages/user.html";
  }
});
if (goSign) {
  goSign.addEventListener("click", function () {
    window.location.href = "../pages/signUp.html";
  });
}
