let data = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
];

let inputData = document.getElementById("limit");
let submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  let limitData = inputData.value;
  getData(limitData);
  inputData.value = "";
});

function getData(limit) {
  let url = `https://fakestoreapi.com/products?limit=${limit}`;
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      console.log(json);
      data.push(...json);
      displayData();
    })
    .catch(function (error) {
      console.log(error);
    });
}

function displayData() {
  let cardData = document.getElementById("card-container");
  let html = "";
  data.forEach(function (element, index) {
    html += `<div id="card" style="width: 18rem">
        <img
          src="${element.image}"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <p style="font-size: 22px; font-weight: 600">Title</p>
          <p id="card-text">
            ${element.title}
          </p>
          ${element.description.slice(0, 70)}
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
            <button class="btn btn-primary">Edit</button>
            <button class="btn btn-danger" onclick='deleteInfo(${index})'>Delete</button>
          </div>
        </div>
      </div>`;
  });
  cardData.innerHTML = html;
}

function deleteInfo(index) {
  data.splice(index, 1);
  displayData();
}

displayData();
