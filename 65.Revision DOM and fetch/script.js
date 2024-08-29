let form = document.getElementById("form-data");
// select
let selectElement = document.getElementById("select");
let selectData = selectElement.value;
console.log(selectData);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let inputELement = document.getElementById("limit");
  let enteredValue = inputELement.value;

  getData(enteredValue);
  inputELement.value = "";
});

getData();

function getData(limitValue) {
  let url = `https://fakestoreapi.com/products?limit=${limitValue}`;
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      displayData(json);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function displayData(data) {
  let cardData = document.getElementById("card-container");
  let html = "";
  data.forEach(function (element) {
    html += `   <div id="card" style="width: 18rem">
      <img
        src="${element.image}"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <p style="font-size: 22px; font-weight: 600">${element.title}</p>
        <p class="card-text">
          ${element.description.slice(10)}
        </p>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">s
            <span style="font-weight: 600">Category:</span>
            ${element.category}
          </li>
          <li class="list-group-item">
            <span style="font-weight: 600">Price:</span>
            ${element.price}
          </li>
          <li class="list-group-item">
            <span style="font-weight: 600">Rating:</span>
      ${element.rating.rate} of ${element.rating.count} people
          </li>    
        </ul>
        <div class="mt-2 d-flex justify-content-center" style="gap: 40px">
          <button class="btn btn-primary">Edit</button>
          <button class="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>`;
  });
  cardData.innerHTML = html;
}
