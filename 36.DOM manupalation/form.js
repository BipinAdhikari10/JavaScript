// Elements targeted:
let formContainer = document.getElementsByClassName("form-container")[0];
let form = document.getElementById("registrationForm");
let enteredName = document.getElementById("name");
let enteredAddress = document.getElementById("address");
let enteredPhone = document.getElementById("phone");
let enteredPassword = document.getElementById("password");
let enteredZip = document.getElementById("zip");
let enteredEmail = document.getElementById("email");

let submitBtn = document.getElementById("btn-submit");

// Elements Values:

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  // let enteredNameValue = document.getElementById("name").value;
  let enteredNameValue = enteredName.value;
  let enteredAddressValue = enteredAddress.value;
  let enteredPhoneValue = enteredPhone.value;
  let enteredPasswordValue = enteredPassword.value;
  let enteredZipValue = enteredZip.value;
  let enteredEmailValue = enteredEmail.value;

  //   Reset form
  enteredName.value = "";
  enteredAddress.value = "";
  enteredPassword.value = "";
  enteredZip.value = "";
  enteredPhone.value = "";
  enteredEmail.value = "";

  //   Putting value in table

  document.getElementById("table-name").innerText = enteredNameValue;
  document.getElementById("table-address").innerText = enteredAddressValue;
  document.getElementById("table-number").innerText = enteredPhoneValue;
  document.getElementById("table-email").innerText = enteredEmailValue;
  document.getElementById("table-password").innerText = enteredPasswordValue;
  document.getElementById("table-zip").innerText = enteredZipValue;
});
