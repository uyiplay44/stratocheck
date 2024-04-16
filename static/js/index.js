"use strict";
const formEl = document.getElementById("form");
const emailEl = document.getElementById("email");
const passwordEl = document.getElementById("password");
const messageEl = document.querySelector(".small");

formEl.addEventListener("submit", (e) => {
  // e.preventDefault();
  validationInput();
});

function validationInput() {
  if (!emailEl.value.trim() === "") {
    messageEl.textContent = "Please enter your credentials. (UI-0001)";
    messageEl.style.display = "flex";
  } else {
    messageEl.textContent =
      "The user name or password is incorrect. (LGI-0006)";
    messageEl.style.display = "";
  }

  ///password validation
  if (passwordEl.value.trim() === "") {
    messageEl.textContent = "Please enter your credentials. (UI-0001).";
    messageEl.style.display = "flex";
  } else {
    messageEl.textContent =
      "The user name or password is incorrect. (LGI-0006)";
    messageEl.style.display = "flex";
  }
}

// function errorMsg() {
//   const errorInput = "Please enter your credentials. (UI-0001)";
//   const errorPassword = "The user name or password is incorrect. (LGI-0006)";
//   const errorEmpty = (messageEl.innerHTML = errorInput);
//   const errorPasswordNotMatch = (messageEl.innerHTML = errorPassword);
// }

// formEl.addEventListener("submit", function (e) {
//   e.preventDefault();
//   validateInput();
//   validateEmail();

//   if (emailEl.value === "") {
//     errorMsg();
//     messageEl.classList.remove("mystyle");
//     messageEl.classList.add("mystyle");
//   } else {
//     errorMsg();
//     messageEl.classList.add("mystyle");
//     messageEl.classList.remove("mystyle");
//   }
// });

// const setError = (element, message) => {
//   const inputControl = element.parentElement;
//   const errorDisplay = inputControl.getElementById("error");

//   errorDisplay.innerText = message;
//   inputControl.classList.add("error");
//   inputControl.classList.remove("success");
// };

// function validateEmail() {
//   if (emailEl.value === "") {
//   }
// }

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

// const validateInput = () => {
//   const emailuserValue = emailEl.value;
//   console.log(emailuserValue);
//   const passwordValue = passwordEl.value;
//   console.log(passwordValue);

//   if (emailuserValue === "") {
//     setError(emailEl, "Please enter your credentials. (UI-0001)");
//   }
// };
