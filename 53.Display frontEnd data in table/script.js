let data = [
  {
    name: "Bipin",
    age: 23,
    address: "Galyang",
  },
  //   {
  //     name: "Shiva",
  //     age: 27,
  //     address: "Kathmandu",
  //   },
  //   {
  //     name: "Ram",
  //     age: 23,
  //     address: "Dhangadhi",
  //   },
  //   {
  //     name: "Ramkanta",
  //     age: 29,
  //     address: "Pokhara",
  //   },
];

let form = document.getElementById("form-data");
// console.log(form);
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let inputName = document.getElementById("user-name");
  let inputAddress = document.getElementById("address");
  let inputAge = document.getElementById("age");

  let userNameValue = inputName.value;
  let userAddress = inputAddress.value;
  let userAge = inputAge.value;

  data.push({ name: userNameValue, address: userAddress, age: userAge });
  displayData();

  inputName.value = "";
  inputAddress.value = "";
  inputAge.value = "";
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
          </tr>
         `;
  });
  tableBody.innerHTML = html;
}
displayData();
