document
  .getElementById("subscribeBtn")
  .addEventListener("click", ValidateEmail);
document.getElementById("formSubmit").addEventListener("submit", ValidateEmail);
function ValidateEmail(event) {
  event.preventDefault();
  console.log(event);
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var inputElement = document.getElementById("inputEmail1");
  var msgElement = document.getElementById("message");
  if (inputElement.value.match(validRegex)) {
    msgElement.textContent = "Thanks. You'll be Notified.";
    msgElement.classList.remove("invalid");
    msgElement.classList.add("valid");

    document.form1.text1.focus();

    return true;
  } else {
    msgElement.textContent = "Please provide a valid email address.";
    msgElement.classList.remove("invalid");
    msgElement.classList.add("invalid");

    document.form1.text1.focus();

    return false;
  }
}
