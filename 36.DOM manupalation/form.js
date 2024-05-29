// let inputTagName = document.getElementById("name");

// let registration = document.getElementById("btn-submit");

// submitButton.addEventListener("click", function (event) {
//   event.preventDefault();

//   let enteredTagName = inputTagName.value;

//   //   reset the value

//   inputTagName.value = "";

//   //   table

//   document.getElementById("table-name").innerText = enteredTagName;
// });
let tableBody = document.getElementById("table-body");

let registrationForm = document.getElementById("registrationForm");
let submittedData = [];
registrationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let formData = {};

  formData = {
    name: document.getElementById("name").value,
    address: document.getElementById("address").value,
    phone: document.getElementById("phone").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    zip: document.getElementById("zip"),
  };
  submittedData.push(formData);

  //   reset the value
  // registrationForm.reset();

  //   display the data in table

  addDataToTable(formData);

  //   document.getElementById("table-name").innerText = submittedData[1].name;
  //   document.getElementById("table-address").innerText = submittedData[1].address;
  //   document.getElementById("table-phone").innerText = submittedData[1].phone;
  //   document.getElementById("table-email").innerText = submittedData[1].email;
  //   document.getElementById("table-password").innerText =
  //     submittedData[0].password;
  //   document.getElementById("table-zip").innerText = submittedData[0].zip;
});

function addDataToTable(formData) {
  let tr = document.createElement("tr");
  for (let key in formData) {
    let td = document.createElement("td");
    let text = document.createTextNode(formData[key]);
    td.appendChild(text);
    tr.appendChild(td);
  }

  tableBody.appendChild(tr);
}
// function addDataToTable(formData) {
//   for (let key in formData) {
//     let td = document.createElement("td");
//     let text = document.createTextNode(formData[key]);
//     td.appendChild(text);
//     tr.appendChild(td);
//   }
// }
// tableBody.appendChild(tr);

// const child = document.createElement("p");

// const parent = document.getElementById("table-container");

// const text = document.createTextNode("This is paragraph");
// child.appendChild(text);

// parent.appendChild(child);

// console.log(parent);
// console.log(child);

// {
//   /* <p>This is paragraph</p> */
// }

// let paragraph = document.createElement("p");
// let text = document.createTextNode("This is me");
// paragraph.appendChild(text);

// document.getElementById("table-container").appendChild(paragraph);
// console.log(paragraph);

// let paragraph = document.createElement("p");
// // console.log(paragraph);
// let text = document.createTextNode("This is me");
// // console.log(text);
// paragraph.appendChild(text);
// document.getElementById("table-container").appendChild(paragraph);
// // console.log(paragraph);

// let ul = document.createElement("ul");
// ul.setAttribute("id", "links");
// ul.setAttribute("class", "links");

// console.log(ul);

// let li = document.createElement("li");
// let text = document.createTextNode("Dog");
// li.appendChild(text);

// let secondLi = document.createElement("li");
// let secondText = document.createTextNode("Elephant");
// secondLi.appendChild(secondText);

// secondLi.addEventListener("click", function () {
//   console.log("Hello");
//   document.body.style.backgroundColor = "red";
// });

// li.addEventListener("click", () => {
//   document.body.style.backgroundColor = "white";
// });
// ul.appendChild(li);
// ul.appendChild(secondLi);

// let tableContainer = document.getElementById("table-container");
// tableContainer.appendChild(ul);

// let ul = document.createElement("ul");
// ul.setAttribute("class", "links");
// ul.setAttribute("id", "links");
// console.log(ul);
// let li = document.createElement("li");
// let text = document.createTextNode("dog");
// li.appendChild(text);

// ul.appendChild(li);

// let tableContainer = document.getElementById("table-container");
// tableContainer.appendChild(ul);

// let ul = document.createElement("ul");
// ul.setAttribute("class", "links");
// ul.setAttribute("id", "links");
// console.log(ul);

// let li = document.createElement("li");
// // console.log(li);
// let text = document.createTextNode("Bipin");
// li.appendChild(text);
// ul.appendChild(li);

// let tableContainer = document.getElementById("table-container");
// tableContainer.appendChild(ul);

let ul = document.createElement("ul");
// console.log(ul);
ul.setAttribute("class", "links");
ul.setAttribute("id", "links");

let li = document.createElement("li");
// console.log(li);
let text = createTextNode("Bipin");
li.appendChild(text);
ul.appendChild(li);

let tableContainer = document.getElementById("table-conatainer");
tableContainer.appendChild(ul);
