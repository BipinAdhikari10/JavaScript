let data;

let myData = localStorage.getItem("myData");

if (myData !== null) {
  data = JSON.parse(myData);
} else {
  data = [];
}

let form = document.getElementById("form-data");
let buttonElement = document.getElementById("submit-btn");
let btnText = buttonElement.innerText;
// console.log(form);
let edit_index = null;

let inputName = document.getElementById("user-name");
let inputAddress = document.getElementById("address");
let inputAge = document.getElementById("age");

function resetValue() {
  inputName.value = "";
  inputAddress.value = "";
  inputAge.value = "";
}
form.addEventListener("submit", function (event) {
  event.preventDefault();

  let userNameValue = inputName.value;
  let userAddress = inputAddress.value;
  let userAge = inputAge.value;
  // console.log(edit_index);

  if (edit_index !== null) {
    data.splice(edit_index, 1, {
      name: userNameValue,
      address: userAddress,
      age: userAge,
    });
    edit_index = null;
    buttonElement.innerText = btnText;
  } else {
    data.push({ name: userNameValue, address: userAddress, age: userAge });
  }

  displayData();
  // Set data in localStorage
  localStorage.setItem("myData", JSON.stringify(data));
  resetValue();
});

function displayData() {
  let tableBody = document.getElementById("table-body");
  //   console.log(tableBody);
  let html = "";
  data.forEach(function (element, index) {
    html += `<tr>
            <th scope="row">${index + 1}</th>
            <td>${element.name}</td>
            <td>${element.age}</td>
            <td>${element.address}</td>
           <td>${
             element.age > 18
               ? "<span  class='badge text-bg-success'>Important </span>"
               : "<p>Cannot Vote</p>"
           }</td>
            <td><button class='btn btn-primary' onClick='editInfo(${index})'>Edit</button>
            <button class='btn btn-danger' onClick='deleteInfo(${index})'>Delete</button></td>
          </tr>
         `;
  });
  if (data.length < 1) {
    tableBody.innerHTML = "<p>No data Found</p>";
  } else {
    tableBody.innerHTML = html;
  }
}
displayData();

function deleteInfo(id) {
  data.splice(id, 1);
  localStorage.setItem("myData", JSON.stringify(data));
  displayData();
}
function editInfo(index) {
  // Editing for this index
  edit_index = index;

  // Set value in input fields
  inputName.value = data[index].name;
  inputAddress.value = data[index].address;
  inputAge.value = data[index].age;

  // Change the text of button:
  buttonElement.innerText = "Update";
  console.log("Editing", index);
}
