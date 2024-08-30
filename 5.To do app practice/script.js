let inputTagName = document.getElementById("username");
let userBtn = document.getElementById("addUser");
let tableBody = document.getElementById("records");

tableBody.innerHTML = "";

let submittedData = [];

userBtn.addEventListener("click", () => {
  let enteredName = inputTagName.value;

  let formData = {
    name: enteredName,
  };
  submittedData.push(formData);
  inputTagName.value = "";

  displayInformation();
});

function displayInformation() {
  let html = "";
  submittedData.forEach(function (user, index) {
    html += `
    <tr>
    <td>${index + 1}</td>
    <td>${user.name}</td>
    <td>
      <i class="btn text-white fa fa-edit btn-info mx-2"onClick='editInfo(${index})'></i>
      <i class="btn btn-danger text-white fa fa-trash"onClick='deleteInfo(${index})'></i>
    </td>
  </tr>
    `;
  });
  tableBody.innerHTML = html;
}



function deleteInfo(index) {
  submittedData.splice(index, 1);
  displayInformation();
}
