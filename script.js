const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

const showError = (input, errorMessage) => {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = errorMessage;
};

const showSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
};

const validateEmail = (email) => {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailRegex.test(email.value)) {
    return true;
  }
  return false;
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("submit2");
  if (username.value.trim() === "") {
    password;
    showError(username, "Username is Required");
  } else showSuccess(username);
  if (email.value === "") {
    showError(email, "Email is Required");
  } else if (!validateEmail(email)) {
    showError(email, "Enter a valid email");
  } else showSuccess(email);
  if (password.value === "") {
    showError(password, "Password is Required");
  } else if (password.value != password2.value) {
    showError(password, "");
  } else if (password.value.length < 8) {
    showError(password, "Password must contain at least 8 characters");
  } else showSuccess(password);
  if (password2.value === "") {
    showError(password2, "Password is Required");
  } else if (password.value != password2.value) {
    showError(password2, "Password fields doesn't match");
  } else if (password2.value.length < 8) {
    showError(password2, "Password must contain at least 8 characters");
  } else showSuccess(password2);
});
