let form = document.getElementById("registration-form");
let tableData = document.getElementById("table-container");

let submmittedData = [];
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let formData = {};

  formData = {
    name: document.getElementById("name").value,
  };
  submmittedData.push(formData);
  displayData(formData);
});

function displayData(formData) {
  let tr = document.createElement("tr");
  for (let key in formData) {
    td = document.createElement("td");
    let text = document.createTextNode(formData[key]);
    td.appendChild(text);
    tr.appendChild(td);
  }
  tableData.appendChild(tr);
}
