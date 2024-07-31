// let dataInformation = [
//   {
//     name: "Bipin",
//     age: "23",
//     city: "pokhara",
//   },
//   {
//     name: "Shiva",
//     age: "27",
//     city: "Kathmandu",
//   },
//   {
//     name: "Bandhu",
//     age: "31",
//     city: "Galyang",
//   },
// ];
// console.log(dataInformation);

// function displayData() {
//   let tableBody = document.getElementById("table-body");
//   //   console.log(tableBody);
//   let html = "";
//   dataInformation.forEach(function (element, index) {
//     html += ` <tr id="table-row">
//           <th>${index + 1}</th>
//           <td>${element.name}</td>
//           <td>${element.age}</td>
//           <td>${element.city}</td>
//           <td>
//             <button class="btn btn-primary" onClick='editInfo(${index})'>Edit</button>
//             <button class="btn btn-danger" onClick='deleteInfo(${index})'>Delete</button>
//           </td>
//         </tr>`;
//   });
//   if (dataInformation.length < 1) {
//     tableBody.innerText = "No data found";
//   } else {
//     tableBody.innerHTML = html;
//   }
// }
// displayData();

// function editInfo(index) {
//   console.log(`You are editing data of index ${index}`);
// }

// function deleteInfo(index) {
//   //   console.log(`You are deleting data of`, index);
//   dataInformation.splice(index, 1);
//   displayData();
// }

let dataInformation = [
  {
    name: "Bipin",
    age: 22,
    city: "Galyang",
    mobile: 9849118922,
  },
  {
    name: "Niroj",
    age: 13,
    city: "Kusma",
    mobile: 9849118922,
  },
  {
    name: "Shiva",
    age: 23,
    city: "Kathmandu",
    mobile: 9849118922,
  },
  {
    name: "Namrata",
    age: 19,
    city: "Pokhara",
    mobile: 9849118922,
  },
];

displayData();
function displayData() {
  let tableBody = document.getElementById("table-body");
  console.log(tableBody);
  let myData = "";
  dataInformation.forEach(function (element, index) {
    myData += ` <tr id="table-row">
          <th>${index + 1}</th>
          <td>${element.name}</td>
          <td>${element.age}</td>
          <td>${element.city}</td>
          <td>
            <button class="btn btn-primary"onCLick='EditInfo(${index})'>Add</button>
            <button class="btn btn-danger"onClick='deleteInfo(${index})'>Delete</button>
          </td>
        </tr>`;
  });
  tableBody.innerHTML = myData;
}
function editInfo(index) {
  console.log("This helps us to edit index", index);
}

function deleteInfo(index) {
  dataInformation.splice(index, 1);
  displayData();
}
