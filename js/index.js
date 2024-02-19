"use strict";
let formEl = document.getElementById("form");

formEl.addEventListener("submit", e => {
  e.preventDefault();
  myValidation();
});

function myValidation() {
  const emailEl = document.getElementById("email").value;
  const passwordEl = document.getElementById("password").value;
  const messageEl = document.querySelector(".error");
  let upperCaseLetters = /[A-Z]/g;

  if (!passwordEl.length > 0) {
    messageEl.innerHTML = "Insert password";
    messageEl.style.color = "red";
    alert("insert password");
  } else if (passwordEl.length < 8) {
    alert("password too short");
  } else if (passwordEl !== 20) {
    alert("password match");
  }
}
