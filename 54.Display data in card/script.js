let data = [
  {
    name: "Bipin",
    age: 23,
    address: "Galyang",
  },
];

let edit_index = null;
let buttonSubmit = document.getElementById("btn-submit");

console.log(buttonSubmit);
let formData = document.getElementById("personal-form");
formData.addEventListener("submit", function (event) {
  event.preventDefault();
  let inputName = document.getElementById("name");
  let inputAge = document.getElementById("age");
  let inputAddress = document.getElementById("address");

  let enteredName = inputName.value;
  let enteredAge = inputAge.value;
  let enteredAddress = inputAddress.value;

  if (edit_index !== null) {
    data.splice(edit_index, 1);
    data.push({
      name: enteredName,
      age: enteredAge,
      address: enteredAddress,
    });
    edit_index = null;
    buttonSubmit.innerText = "Submit";
  }

  displayData();
});

function displayData() {
  let cardData = document.getElementById("card");
  //   console.log(cardData);
  let html = "";
  data.forEach(function (element, index) {
    html += `   <div class="card-body">
        <p><strong>${element.name}</strong>Bipin</p>
        <p><strong>Age:</strong>${element.age}</p>
        <p><strong>Address:</strong>${element.address}</p>
      
        <div class="btn-container">
          <button class="btn btn-primary" "onClick='EditInfo(${index})'>Edit</button>
          <button class="btn btn-danger"onClick='deleteInfo(${index})'>Delete</button>
        </div>
      </div>`;
  });
  cardData.innerHTML = html;
}
displayData();

function deleteInfo(index) {
  data.splice(index, 1);
  displayData();
}

function editInfo(index) {
  edit_index = index;
  inputName.value = data[index].name;
  inputAge.value = data[index].age;
  inputAddress.value = data[index].address;
}
