let formData = document.getElementById("registrationForm");
let tableBody = document.getElementById("table-body");
let nameElement = document.getElementById("name");
let addressElement = document.getElementById("address");
let numberElement = document.getElementById("phone");
let emailElement = document.getElementById("email");
let passwordElement = document.getElementById("password");
let zipElement = document.getElementById("zip");

tableBody.innerHTML = "";
let submittedData = [];

formData.addEventListener("submit", (event) => {
  event.preventDefault();
  let formData = {
    name: nameElement.value,
    address: addressElement.value,
    phone: numberElement.value,
    email: emailElement.value,
    password: passwordElement.value,
    zip: zipElement.value,
  };

  console.log("form data", formData);

  submittedData.push(formData);
  console.log("submitted data", submittedData);
  displayTable();
});

function displayTable() {
  let html = "";
  submittedData.forEach(function (ele) {
    html += ` <tr id="table-data">
            <td id="table-name">${ele.name}</td>
            <td id="table-address">${ele.address}</td>
            <td id="table-number">${ele.phone}</td>
            <td id="table-email">${ele.email}</td>
            <td id="table-password">${ele.password}</td>
            <td id="table-zip">${ele.zip}</td>
          </tr>`;
  });
  tableBody.innerHTML = html;
}
