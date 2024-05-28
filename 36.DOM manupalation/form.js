// let inputTagName = document.getElementById("name");

// let registration = document.getElementById("btn-submit");

// submitButton.addEventListener("click", function (event) {
//   event.preventDefault();

//   let enteredTagName = inputTagName.value;

//   //   reset the value

//   inputTagName.value = "";

//   //   table

//   document.getElementById("table-name").innerText = enteredTagName;
// });

let registrationForm = document.getElementById("registrationForm");
let submittedData = [];
registrationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let formData = {};

  formData = {
    name: document.getElementById("name").value,
    address: document.getElementById("address").value,
    phone: document.getElementById("phone").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    zip: document.getElementById("zip"),
  };
  submittedData.push(formData);

  console.log("formData", formData);

  console.log("submitted Data", submittedData);

  //   reset the value

  document.getElementById("name").value = "";
  document.getElementById("address").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("email").value = "bipin@gmail.com";
  document.getElementById("password").value = "";
  document.getElementById("zip").value = "";

  //   display the data in table

  document.getElementById("table-name").innerText = submittedData[1].name;
  document.getElementById("table-address").innerText = submittedData[1].address;
  document.getElementById("table-phone").innerText = submittedData[1].phone;
  document.getElementById("table-email").innerText = submittedData[1].email;
  document.getElementById("table-password").innerText =
    submittedData[0].password;
  document.getElementById("table-zip").innerText = submittedData[0].zip;
});
