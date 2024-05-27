// let submitButton1 = document.getElementsByClassName("btn")[0];
// console.log(submitButton1);

// let submitButton2 = document.getElementsByTagName("button")[0];
// console.log(submitButton2);

// let paragraph = document.getElementById("text");
// console.log(paragraph);

// let paragraph1 = document.getElementsByClassName("text-para")[0];
// console.log(paragraph1);

// let paragaraph2 = document.getElementsByTagName("p")[0];
// console.log(paragaraph2);

// let submitButton = document.getElementById("submit-btn");
// submitButton.addEventListener("click", function () {
//   let inputValue = document.getElementById("address").value;

//   let paragraph = document.getElementById("text");
//   paragraph.innerText = inputValue;
// });

// let submitButton = document.getElementById("submit-btn");
// submitButton.addEventListener("click", function () {
//   let inputValue = document.getElementById("address").value;
//   let paragraph = document.getElementById("text");
//   paragraph.innerText = inputValue;
// });

// let submitButton = document.getElementById("submit-btn");
// submitButton.addEventListener("click", function () {
//   let inputValue = document.getElementById("address").value;
//   let paragraph = document.getElementById("text");
//   paragraph.innerText = inputValue;
// });
// let submitButton = document.getElementById("submit-btn");
// // console.log(submitButton
// submitButton.addEventListener("click", function () {
//   let inputValue = document.getElementById("address").value;
//   //   console.log(inputValue);
//   let paragraph = document.getElementById("text");
//   paragraph.innerText = inputValue;
// });

// let submitButton = document.getElementById("submit-btn");
// submitButton.addEventListener("click", function () {
//   let inputValue = document.getElementById("address").value;
//   let paragraph = document.getElementById("text");
//   paragraph.innerText = inputValue;
// });

// let submitButton = document.getElementById("submit-btn");
// submitButton.addEventListener("click", function () {
//   let inputValue = document.getElementById("address").value;
//   let paragraph = document.getElementById("text");
//   paragraph.innerText = inputValue;
// });

let submitButton = document.getElementById("submit-btn");
submitButton.addEventListener("click", function () {
  let inputValue = document.getElementById("address").value;
  let paragraph = document.getElementById("text");
  paragraph.innerText = inputValue;
});

let submitButton1 = document.getElementById("submit-btn");

submitButton1.addEventListener("click", function () {
  let input = document.getElementById("name").value;
  let para = document.getElementById("text-paragraph");
  para.innerText = input;
});

let clickButton = document.getElementById("submit-btn");
clickButton.addEventListener("click", function () {
  let enterValue = document.getElementById("email").value;
  let words = document.getElementById("words-text");
  words.innerText = enterValue;
});

let clickNumber = document.getElementById("submit-btn");
clickNumber.addEventListener("click", function () {
  let enterNumber = document.getElementById("number").value;
  let number = document.getElementById("mobile-numbers");
  number.innerText = enterNumber;
});
