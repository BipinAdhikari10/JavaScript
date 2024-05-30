let inputTagName = document.getElementById("username");
// console.log(inputTagName);
let userButton = document.getElementById("addUser");
// console.log(userButton);
let tableBody = document.getElementById("records");

tableBody.innerHTML = "";

let submittedData = [];

userButton.addEventListener("click", () => {
  let enteredName = inputTagName.value;

  let submitForm = {
    name: enteredName,
  };
  submittedData.push(submitForm);
  inputTagName.value = "";
  console.log(submittedData);
  displayTable();
});

function displayTable() {
  let html = "";
  submittedData.forEach(function (user, index) {
    html += `
      <tr>
        <td>${index + 1}</td>
        <td>${user.name}</td>
        <td>
          <i class="btn text-white fa fa-edit btn-info mx-2"></i>
          <i class="btn btn-danger text-white fa fa-trash"></i>
        </td>
      </tr>
    `;
  });
  tableBody.innerHTML = html;
}
