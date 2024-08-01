let data = [
  {
    name: "Bipin",
    address: "Galyang",
    age: 23,
    profession: "Programmer",
  },
];

let myForm = document.getElementById("personal-form");
// console.log(myForm);
myForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let inputName = document.getElementById("name");
  let inputAddress = document.getElementById("address");
  let inputAge = document.getElementById("age");
  let inputProfession = document.getElementById("profession");

  let enteredName = inputName.value;
  let enteredAddress = inputAddress.value;
  let enteredAge = inputAge.value;
  let enteredProfession = inputProfession.value;

  data.push({
    name: enteredName,
    address: enteredAddress,
    age: enteredAge,
    profession: enteredProfession,
  });
  displayData();
});

function displayData() {
  let listData = document.getElementById("list-group");
  //   console.log(listData);
  let myData = "";
  data.forEach(function (element, index) {
    myData += ` <ul class="list-group" id="list-group">
        <li class="list-group-item"><strong>Name: </strong>${element.name}</li>
        <li class="list-group-item"><strong>Address: </strong>${element.address}</li>
        <li class="list-group-item"><strong>Age: </strong>${element.age}</li>
        <li class="list-group-item"><strong>Profession: </strong>${element.profession}</li>
        <div>
          <button class="btn btn-primary">Edit</button>
          <button class="btn btn-danger" onClick='deleteInfo(${index})'>Delete</button>
        </div>
      </ul>`;
  });
  listData.innerHTML = myData;
}
displayData();

function deleteInfo(index) {
  data.splice(index, 1);
  displayData();
}
