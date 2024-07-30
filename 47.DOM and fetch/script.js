let submitButton = document.getElementById("limit-button");
let limit = document.getElementById("limit-input");
// console.log(limit);
submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  let limitInput = limit.value;
  // console.log(limitInput);
  getProductData(limitInput);
  limit.value = "";
});

function getProductData(limit) {
  let data = [];
  fetch(`https://fakestoreapi.com/products?limit=${limit}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      data.push(...json);
      displayData(data);
    })

    .catch(function (error) {
      console.log(error);
    });
  displayData(data);

  // console.log(data);
}

function displayData(data) {
  let cardData = document.getElementById("card-container");
  console.log(cardData);
  let html = "";
  data.forEach(function (element, index) {
    html += `   <div class="card" style="width: 18rem">
        <img
          src="${element.image}"
        
        />
        <div class="card-body">
          <p style="font-size: 22px; font-weight: 600">Title</p>
          <p class="card-text">
            ${element.title}
          </p>
          <p class="description">${element.description.slice(0, 80)}</p>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <span style="font-weight: 600">Category:</span>
              ${element.category}
            </li>
            <li class="list-group-item">
              <span style="font-weight: 600">Price:</span>
              ${element.price}
            </li>
            <li class="list-group-item">
              <span style="font-weight: 600">Rating:</span>
              ${element.rating.rate} of ${element.rating.count}
            </li>
          </ul>
          <div class="mt-2 d-flex justify-content-center" style="gap: 40px">
            <button class="btn btn-primary" onClick='editInfo(${index})'>Edit</button>
            <button class="btn btn-danger" onClick='deleteInfo(${index})'>Delete</button>
          </div>
        </div>
      </div>`;
  });
  cardData.innerHTML = html;
}

function editInfo(index) {
  console.log("Go and edit index", index);
}
function deleteInfo(index) {
  data.splice(index, 1);
  displayData(data);
}

let categories = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

let formSelect = document.getElementById("form-select");
console.log(formSelect);
function getCategory() {
  fetch("https://fakestoreapi.com/products/categories")
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      console.log(json);
    });
}
getCategory();
