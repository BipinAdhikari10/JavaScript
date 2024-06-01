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
let edit_index = null;

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
  if (edit_index != null) {
    personalFormArray.splice(edit_index, 1).value;
    edit_index = null;
  } else {
    personalFormArray.push(submitForm);
  }
  btnSubmit.innerText = "Submit";

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
  edit_index = index;
  inputNameTag.value = personalFormArray[index].value;
  inputAddressTag.value = personalFormArray[index].value;
  inputPhoneTag.value = personalFormArray[index].value;
  inputMessageTag.value = personalFormArray[index].value;
  btnSubmit.innerText = "Edit data";
}
function deleteInformation(index) {
  personalFormArray.splice(index, 1);
  displayCard();
}
