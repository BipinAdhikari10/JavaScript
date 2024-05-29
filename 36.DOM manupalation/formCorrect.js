let tableBody = document.getElementById("table-body");

let registrationForm = document.getElementById("registrationForm");

// An empty array to add Submitted data.
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

  //   display the data in table
  addDataToTable(formData);


  //   reset the value
  // registrationForm.reset();
});

function addDataToTable(formData) {
  let tr = document.createElement("tr");
  for (let key in formData) {
    let td = document.createElement("td");
    let text = document.createTextNode(formData[key]);
    td.appendChild(text);
    tr.appendChild(td);
  }

  tableBody.appendChild(tr);
}
