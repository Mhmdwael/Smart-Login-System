let users = [];
if (localStorage.getItem("user") !== null) {
  users = JSON.parse(localStorage.getItem("user"));
}

let loggedInEmail = localStorage.getItem("loggedInEmail");

let userIndex = -1;
for (let i = 0; i < users.length; i++) {
  if (users[i].email === loggedInEmail) {
    userIndex = i;
    break;
  }
}

if (userIndex !== -1) {
  let name = users[userIndex].name;
  document.querySelector(".text-welcome h2").innerHTML = `Welcome ${name}`;
} else {
  console.log("User not found");
}
