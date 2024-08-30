let formData = document.getElementById("registrationForm");
let submitBtn = document.getElementById("btn-submit");
let tableBody = document.getElementById("table-body");
let nameElement = document.getElementById("name");
let addressElement = document.getElementById("address");
let phoneElement = document.getElementById("phone");
let emailElement = document.getElementById("email");
let passwordElement = document.getElementById("password");
let zipElement = document.getElementById("zip");

tableBody.innerHTML = "";

let submittedData = [];
let edit_index = null;
formData.addEventListener("submit", (event) => {
  event.preventDefault();
  let formData = {
    name: nameElement.value,
    address: addressElement.value,
    phone: phoneElement.value,
    email: emailElement.value,
    password: passwordElement.value,
    zip: zipElement.value,
  };
  if (edit_index == null) {
    submittedData.push(formData);
  } else {
    submittedData.splice(edit_index, 1, formData);
    edit_index = null;
  }

  submitBtn.innerText = "Submit";

  nameElement.value = "";
  addressElement.value = "";
  phoneElement.value = "";
  emailElement.value = "";
  passwordElement.value = "";
  zipElement.value = "";

  displayTable();
});

function displayTable() {
  let html = "";
  submittedData.forEach(function (ele, index) {
    html += ` <tr id="table-data">
            <td id="table-name">${ele.name}</td>
            <td id="table-address">${ele.address}</td>
            <td id="table-number">${ele.phone}</td>
            <td id="table-email">${ele.email}</td>
            <td id="table-password">${ele.password}</td>
            <td id="table-zip">${ele.zip}</td>
              <td>
              <button class="btn btn-primary"onClick='editInfo(${index})'>Edit</button>
              <button class="btn btn-danger"onClick='deleteInfo(${index})'>Delete</button>
            </td>
          </tr>`;
  });
  tableBody.innerHTML = html;
}

function editInfo(index) {
  //   console.log("edit index", index);
  edit_index = index;
  nameElement.value = submittedData[index].name;
  addressElement.value = submittedData[index].address;
  phoneElement.value = submittedData[index].phone;
  emailElement.value = submittedData[index].email;
  passwordElement.value = submittedData[index].password;
  zipElement.value = submittedData[index].zip;

  submitBtn.innerText = "Update";
}
function deleteInfo(index) {
  //   console.log("delete index", index);
  submittedData.splice(index, 1);
  displayTable();
}
