let signBtn = document.getElementById("signBtn");

let users = [];
if (localStorage.getItem("user") != null) {
  users = JSON.parse(localStorage.getItem("user"));
}

function nameVallidation() {
  let nameInput = nameUser.value;
  let regex = /^[A-Z][a-z]{2,8}( [A-Z][a-z]{2,8})?$/;
  if (regex.test(nameInput) == true) {
    nameUser.classList.add("is-valid");
    nameUser.classList.remove("is-invalid");
    showError.classList.add("d-none");
    return true;
  } else {
    nameUser.classList.remove("is-valid");
    nameUser.classList.add("is-invalid");
    showError.classList.remove("d-none");
    return false;
  }
}
function emailVallidation() {
  let emailInput = emailUser.value.toLowerCase();
  let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  for (let i = 0; i < users.length; i++) {
    if (emailInput === users[i].email.toLowerCase()) {
      showError4.classList.remove("d-none");
      emailUser.classList.remove("is-valid");
      emailUser.classList.add("is-invalid");
      showError2.classList.add("d-none");
      return false;
    }
  }
  if (regex.test(emailInput) == true) {
    emailUser.classList.add("is-valid");
    emailUser.classList.remove("is-invalid");
    showError2.classList.add("d-none");
    showError4.classList.add("d-none");
    return true;
  } else {
    emailUser.classList.remove("is-valid");
    emailUser.classList.add("is-invalid");
    showError2.classList.remove("d-none");
    return false;
  }
}
function passVallidation() {
  let passInput = passUser.value;
  let regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
  if (regex.test(passInput) == true) {
    passUser.classList.add("is-valid");
    passUser.classList.remove("is-invalid");
    showError3.classList.add("d-none");
    return true;
  } else {
    passUser.classList.remove("is-valid");
    passUser.classList.add("is-invalid");
    showError3.classList.remove("d-none");
    return false;
  }
}

function addUser() {
  if (
    nameVallidation() == true &&
    emailVallidation() == true &&
    passVallidation() == true
  ) {
    let user = {
      name: nameUser.value,
      email: emailUser.value,
      password: passUser.value,
    };
    users.push(user);
    localStorage.setItem("user", JSON.stringify(users));
    clearInput();
    window.location.href = "/pages/login.html";
  }
}
function clearInput() {
  nameUser.value = "";
  emailUser.value = "";
  passUser.value = "";
  nameUser.classList.remove("is-invalid");
  emailUser.classList.remove("is-invalid");
  passUser.classList.remove("is-invalid");
  nameUser.classList.remove("is-valid");
  emailUser.classList.remove("is-valid");
  passUser.classList.remove("is-valid");
}
function addInputEventListener(inputElement, validationFunction) {
  if (inputElement) {
    inputElement.addEventListener("input", function () {
      validationFunction();
    });
  }
}
addInputEventListener(nameUser, nameVallidation);
addInputEventListener(passUser, passVallidation);
addInputEventListener(emailUser, emailVallidation);
if (signBtn) {
  signBtn.addEventListener("click", function () {
    addUser();
  });
}
/* go to login Page */
if (goLogin) {
  goLogin.addEventListener("click", function () {
    window.location.href = "../pages/login.html";
  });
}
