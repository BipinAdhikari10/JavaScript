let formData = document.getElementById("registrationForm");
let cardData = document.getElementById("card");
let imageElement = document.getElementById("image");
let nameElement = document.getElementById("name");
let addressElement = document.getElementById("address");
let phoneElement = document.getElementById("phone");
let emailElement = document.getElementById("email");
let passwordElement = document.getElementById("password");
let btnSubmit = document.getElementById("btn-submit");

cardData.innerHTML = "";

let submittedData = [];
let edit_index = null;

formData.addEventListener("submit", (event) => {
  event.preventDefault();
  let formData = {
    image: imageElement.value,
    name: nameElement.value,
    address: addressElement.value,
    phone: phoneElement.value,
    email: emailElement.value,
    password: passwordElement.value,
  };
  if (edit_index == null) {
    submittedData.push(formData);
  } else {
    submittedData.splice(edit_index, 1, formData);
    edit_index = null;
  }

  btnSubmit.innerText = "Submit";

  imageElement.value = "";
  nameElement.value = "";
  addressElement.value = "";
  phoneElement.value = "";
  emailElement.value = "";
  passwordElement.value = "";

  displayCard();
});

function displayCard() {
  let html = "";
  submittedData.forEach(function (ele, index) {
    html += `  <div class="card" id="card" style="width: 16rem">
      <img
        src="${ele.image}"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title" style="font-weight: 600">Form data</h5>
        <p class="card-text">Name:${ele.name}</p>
        <p class="card-text">Address:${ele.address}</p>
        <p class="card-text">Phone:${ele.phone}</p>
        <p class="card-text">Email:${ele.email}</p>
        <p class="card-text">Password${ele.password}</p>
        <div class="btn btn-container">
          <a href="#" class="btn btn-primary"onClick='editInfo(${index})'>Edit</a>
          <a href="#" class="btn btn-danger"onClick=deleteInfo(${index})>Delete</a>
        </div>
      </div>
    </div>`;
  });
  cardData.innerHTML = html;
}
function editInfo(index) {
  // console.log("Edit index", index);
  edit_index = index;
  imageElement = submittedData[index].name;
  nameElement = submittedData[index].name;
  addressElement = submittedData[index].address;
  phoneElement = submittedData[index].address;
  emailElement = submittedData[index].email;
  passwordElement = submittedData[index].password;

  btnSubmit.innerText = "Edit data";
}
function deleteInfo(index) {
  submittedData.splice(index, 1);
  displayCard();
}
