"use strict";
const formEl = document.getElementById("form");
const emailEl = document.getElementById("email");
const passwordEl = document.getElementById("password").value;
const messageEl = document.querySelector(".error");

formEl.addEventListener("submit", e => {
  e.preventDefault();
  ValidateInput();
});

function ValidateInput() {
  let error = "Hello World";

  if (emailEl.value === "") {
    alert(`${error}`);
  } else {
    console.log("World");
  }
  if (!passwordEl.value === "") {
    alert("working");
  } else if (passwordEl < 0) {
    console.log("enter");
  }
}

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
