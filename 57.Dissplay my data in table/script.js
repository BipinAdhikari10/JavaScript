let data = [
  {
    name: "Bipin",
    age: 23,
    profession: "Programmer",
  },
];

let form = document.getElementById("personal-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let inputName = document.getElementById("name");
  let inputAge = document.getElementById("age");
  let inputProfession = document.getElementById("profession");

  let enteredName = inputName.value;
  let enteredAge = inputAge.value;
  let enteredProfession = inputProfession.value;

  data.push({
    name: enteredName,
    age: enteredAge,
    profession: enteredProfession,
  });
  inputName.value = "";
  inputAge.value = "";
  inputProfession.value = "";
  displayData();
});

function displayData() {
  let tableBody = document.getElementById("table-body");
  //   console.log(tableBody);
  let myData = "";
  data.forEach(function (element, index) {
    myData += `<tr>
            <th scope="row">${index + 1}</th>
            <td>${element.name}</td>
            <td>${element.age}</td>
            <td>${element.profession}</td>
             
              <button class="btn btn-primary">Edit</button>
              <button class="btn btn-danger">Delete</button>
            
          </tr>`;
  });
  tableBody.innerHTML = myData;
}
displayData();
