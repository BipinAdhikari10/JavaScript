let data = [
  {
    name: "Bipin",
    age: 23,
    address: "Galyang",
  },
];

let formData = document.getElementById("personal-form");
formData.addEventListener("submit", function (event) {
  event.preventDefault();
  let inputName = document.getElementById("name");
  let inputAge = document.getElementById("age");
  let inputAddress = document.getElementById("address");

  let enteredName = inputName.value;
  let enteredAge = inputAge.value;
  let enteredAddress = inputAddress.value;

  data.push({
    name: enteredName,
    age: enteredAge,
    address: enteredAddress,
  });
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
          <button class="btn btn-primary">Edit</button>
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
