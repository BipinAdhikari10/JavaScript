let inputTagName = document.getElementById("username");
let userButton = document.getElementById("addUser");
let tableBody = document.getElementById("records");

tableBody.innerHTML = "";

let submitFormData = [];

userButton.addEventListener("click", () => {
  let enteredName = inputTagName.value;

  let formData = {
    name: enteredName,
  };
  submitFormData.push(formData);

  inputTagName.value = "";
  displayTable();
});

function displayTable() {
  let html = "";
  submitFormData.forEach(function (user, index) {
    html += `  <tr>
        <td>${index + 1}</td>
        <td> ${user.name}</td>
        <td>
          <i class="btn text-white fa fa-edit btn-info mx-2" onclick='edit(${index})'></i>
          <i class="btn btn-danger text-white fa fa-trash" onclick='deleteInfo(${index})'></i>
        </td>
      </tr>`;
    tableBody.innerHTML = html;
  });
}

function edit(index) {
  console.log(index);
}
function deleteInfo(index) {
  console.log(index);
}
