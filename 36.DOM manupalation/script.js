let inputNameTag = document.getElementById("name");
let inputAddressTag = document.getElementById("address");
let inputNumberTag = document.getElementById("phone");
let inputEmailTag = document.getElementById("email");
let inputPasswordTag = document.getElementById("password");
let inputZipCodeTag = document.getElementById("zip");

let submitButton = document.getElementById("btn-submit");

submitButton.addEventListener("click", function (event) {
  event.preventDefault;

  // getting the value

  let enteredName = inputNameTag.value;
  let enteredAddress = inputAddressTag.value;
  let enteredPhone = inputNumberTag.value;
  let enteredEmail = inputEmailTag.value;
  let enteredPassword = inputPasswordTag.value;
  let enteredZipCode = inputZipCodeTag.value;

  //   Reset the value

  inputNameTag.value = "";
  inputAddressTag.value = "";
  inputNumberTag.value = "";
  inputEmailTag.value = "";
  inputPasswordTag.value = "";
  inputZipCodeTag.value = "";

  // display the data in table

  document.getElementById("table-name").innerText = enteredName;
  document.getElementById("table-address").innerText = enteredAddress;

  document.getElementById("table-number").innerText = enteredPhone;
  document.getElementById("table-email").innerText = enteredEmail;

  document.getElementById("table-password").innerText = enteredPassword;
  document.getElementById("table-zip").innerText = enteredZipCode;
});
