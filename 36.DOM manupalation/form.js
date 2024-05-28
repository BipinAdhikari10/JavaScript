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

  console.log("formData", formData);

  console.log("submitted Data", submittedData);

  //   reset the value

  document.getElementById("name").value = "";
  document.getElementById("address").value = "";
  document.getElementById("phone").value = "";

  document.getElementById("email").value = "bipin@gmail.com";
  document.getElementById("password").value = "";
  document.getElementById("zip").value = "";

  //   display the data in table

  document.getElementById("table-name").innerText = submittedData[1].name;
  document.getElementById("table-address").innerText = submittedData[1].address;
  document.getElementById("table-phone").innerText = submittedData[1].phone;
  document.getElementById("table-email").innerText = submittedData[1].email;
  document.getElementById("table-password").innerText =
    submittedData[0].password;
  document.getElementById("table-zip").innerText = submittedData[0].zip;
});

// const child = document.createElement("p");

// const parent = document.getElementById("table-container");

// const text = document.createTextNode("This is paragraph");
// child.appendChild(text);

// parent.appendChild(child);

// console.log(parent);
// console.log(child);

{
  /* <p>This is paragraph</p> */
}

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

let ul = document.createElement("ul");
ul.setAttribute("class", "links");
ul.setAttribute("id", "link");
console.log(ul);
let li = document.createElement("li");
let text = document.createTextNode("dog");
li.appendChild(text);

ul.appendChild(li);

let tableContainer = document.getElementById("table-container");
tableContainer.appendChild(ul);
