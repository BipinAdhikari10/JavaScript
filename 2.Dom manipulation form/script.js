let registrationForm = document.getElementById("registrationForm");

let tableBody = document.getElementById("table-body");

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
    zip: document.getElementById("zip").value,
  };
  submittedData.push(formData);

  addDataToTable(formData);
});

function addDataToTable(formData) {
  let tr = document.createElement("tr");
  for (let key in formData) {
    td = document.createElement("td");
    let text = document.createTextNode(formData[key]);
    td.appendChild(text);
    tr.appendChild(td);
  }
  tableBody.appendChild(tr);
}
