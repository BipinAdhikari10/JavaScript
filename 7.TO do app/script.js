let inputTagName = document.getElementById("username");

let addButton = document.getElementById("addUser");
let tableBody = document.getElementById("records");

tableBody = innerHTMl = "";

let submittedData = [];

addButton.addEventListener("click", () => {
  let EnteredName = inputTagName.value;

  let submitForm = {
    name: EnteredName,
  };
  submittedData.push(submitForm);
  html = "";
});

function displayTableInformation(){
    submittedData.forEach(user,index){
html+=`
<tr>
                  <td>1</td>
                  <td>Shiva</td>
                  <td>
                    <i class="btn text-white fa fa-edit btn-info mx-2"></i>
                    <i class="btn btn-danger text-white fa fa-trash"></i>
                  </td>
                </tr>
`
    }
    tableBody.innerHTML=html;
}
