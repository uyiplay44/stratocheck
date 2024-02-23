"use strict";
const formEl = document.getElementById("form");
const emailEl = document.getElementById("email");
const passwordEl = document.getElementById("password").value;
const messageEl = document.querySelector(".error");

// create error function message
function errorMsg() {
  const errorInput = "Please insert correct details";
  messageEl.innerHTML = errorInput;
}

// event listener
formEl.addEventListener("submit", function (e) {
  e.preventDefault();

  if (emailEl.value === "") {
    errorMsg();
  } else {
    alert("welcome");
  }

  // password section
  if (passwordEl.value === "") {
    errorMsg();
  }
});

// function myValidation() {
//   const emailEl = document.getElementById("email").value;
//   const passwordEl = document.getElementById("password").value;
//   const messageEl = document.querySelector(".error");

//   let regex =
//     /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

//   if (regex.test(emailEl.value.trim() === "")) {
//     alert("Email provided is valid");
//     return true;
//   } else {
//     alert("Invalid Email provided");
//     return false;
//   }
//   if (regex.test(passwordEl.length > 0)) {
//     messageEl.innerHTML = "Insert password";
//     messageEl.style.color = "red";
//   } else if (passwordEl.length < 8) {
//     alert("password too short");
//   } else if (passwordEl !== 20) {
//     alert("password match");
//   }

//   if (emailEl.length === "") {
//     messageEl.innerHTML = "Insert email";
//     messageEl.style.color = "red";
//     alert("welcome home");
//   }
// }
