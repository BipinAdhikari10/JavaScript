let inputTagName = document.getElementById("username");
let userButton = document.getElementById("addUser");
let tableBody = document.getElementById("records");

tableBody.innerHTML = "";

let submittedData = [];

let edit_index = null;

userButton.addEventListener("click", () => {
  let enteredName = inputTagName.value;

  let submitForm = {
    name: enteredName,
  };
  if (edit_index != null) {
    submittedData.splice(edit_index, 1, submitForm);
    edit_index = null;
  } else {
    submittedData.push(submitForm);
  }
  inputTagName.value = "";
  userButton.innerText = "Add User";
  displayTable();
});
function displayTable() {
  html = "";
  submittedData.forEach(function (user, index) {
    html += ` <tr>
        <td>${index}</td>
        <td>${user.name}</td>
        <td>
          <i class="btn text-white fa fa-edit btn-info mx-2" onclick='editInformation (${index})'></i>
          <i class="btn btn-danger text-white fa fa-trash"onclick= 'deleteInformation (${index})'></i>
        </td>
      </tr>`;
  });
  tableBody.innerHTML = html;
}
function editInformation(index) {
  edit_index = index;
  inputTagName.value = submittedData[index].name;
  userButton.innerText = "Save edited data";
}
function deleteInformation(index) {
  submittedData.splice(index, 1);
  displayTable();
}
