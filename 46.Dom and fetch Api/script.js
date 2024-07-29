// let data = [];
// let limitValue = document.getElementById("limit").value;
// console.log("limitValue", limitValue);

let submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  let limit = document.getElementById("limit");
  let limitValue = limit.value;

  fetchData(limitValue);
  console.log(limitValue);

  limit.value = "";
});

function fetchData(limit) {
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
}

displayData(data);

function displayData(data) {
  let cardInfo = document.getElementById("card-container");
  console.log(cardInfo);

  let html = "";
  data.forEach(function (element) {
    html += `  <div id="card" style="width: 18rem">
        <img
          src="${element.image}"
          alt="..."
        />
        <div class="card-body">
          <p style="font-size: 22px; font-weight: 600">${element.title}</p>
          <p class="card-text">
            ${element.description}
          </p>
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
            <button class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>`;
  });
  cardInfo.innerHTML = html;
}
