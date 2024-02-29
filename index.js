const form = document.getElementById("form");
const userName = document.getElementById("username");
const userEmail = document.getElementById("usermail");
const password = document.getElementById("Pass");
const confirmPassword = document.getElementById("conf-pass");
const submit = document.getElementById("form-submit-btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const validateInputs = () => {
  const userNameValue = userName.value.trim();
  const userEmailValue = userEmail.value.trim();
  const passwordValue = password.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();

  if (userNameValue === "") {
    setError(userName, "Username is required");
  } else {
    setSuccess(userName);
  }
  if (userEmailValue === "") {
    setError(userEmail, "Email is required");
  } else if (!isValidEmail(userEmailValue)) {
    setError(userEmail, "Provide a valid Email Address");
  } else {
    setSuccess(userEmail);
  }

  if (passwordValue === "") {
    setError(password, "Password is required");
  } else if (passwordValue.length < 8) {
    setError(password, "Password must be at least 8 charecters");
  } else {
    setSuccess(password);
  }

  if (confirmPasswordValue === "") {
    setError(confirmPasswordValue, "Confirm Your password");
  } else {
    setSuccess(confirmPassword);
  }
};

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = message;

  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};
function isValidEmail(email) {
  var pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return pattern.test(email);
}
