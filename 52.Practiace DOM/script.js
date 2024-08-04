let data = [
  {
    name: "Bipin",
    Address: "Galyang",
    age: 23,
  },
];

// let repeatedCode = ` <tr>
// <th scope="row">1</th>
// <td>Mark</td>
// <td>Otto</td>
// <td>@mdo</td>
// </tr>`;

let form = document.getElementById("personal-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  let usernameElement = document.getElementById("username");
  let ageElement = document.getElementById("age");
  let addressElement = document.getElementById("address");

  let usernameValue = usernameElement.value;
  let ageValue = ageElement.value;
  let addressValue = addressElement.value;

  data.push({ name: usernameValue, age: ageValue, Address: addressValue });

  displayData();

  usernameElement.value = "";
  ageElement.value = "";
  addressElement.value = "";
});

function displayData() {
  let tableBody = document.getElementById("table-body");
  let html = "";
  data.forEach(function (element, index) {
    html += ` <tr>
<th scope="row">${index + 1}</th>
<td>${element.name}</td>
<td>${element.age}</td>
<td>${element.Address}</td>
</tr>`;
    `
`;
  });
  tableBody.innerHTML = html;
}
displayData();

console.log("Dom");
