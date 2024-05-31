let personalForm = document.getElementById("personal-form");
let inputNameTag = document.getElementById("name");
let inputAddressTag = document.getElementById("address");
let inputPhoneTag = document.getElementById("phone");
let inputMessageTag = document.getElementById("message");
let btnSubmit = document.getElementById("submit");
let cardContainer = document.getElementsByClassName("card-container")[0];
console.log(cardContainer);

cardContainer.innerHTML = "";

let personalFormArray = [];

personalForm.addEventListener("submit", (event) => {
  event.preventDefault();
  enteredName = inputNameTag.value;
  enteredAddress = inputAddressTag.value;
  enteredPhone = inputPhoneTag.value;
  enteredMessage = inputMessageTag.value;

  let submitForm = {
    name: enteredName,
    address: enteredAddress,
    phone: enteredPhone,
    message: enteredMessage,
  };
  personalFormArray.push(submitForm);

  personalForm.reset();
  displayCard();
});
function displayCard() {
  let html = "";
  personalFormArray.forEach(function (user, index) {
    html += `<div class="card" id="card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">My Message</h5>
          <p class="card-text">${user.message}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Name: ${user.name}</li>
          <li class="list-group-item">Adddress: ${user.address}</li>
          <li class="list-group-item">Phone Number: ${user.phone}</li>
          <li class="button-container d-flex p-2" style="gap: 10px">
            <button class="btn btn-primary w-50" onclick='editInformation(${index})'>Edit</button>
            <button class="btn btn-danger w-50" onclick='deleteInformation(${index})'>Delete</button>
          </li>
        </ul>
      </div>`;
  });
  cardContainer.innerHTML = html;
}
function editInformation(index) {
  console.log(`I am  editing this ${index} card`);
}
function deleteInformation(index) {
  console.log(`I am deleting this ${index} card`);
  displayCard();
}
