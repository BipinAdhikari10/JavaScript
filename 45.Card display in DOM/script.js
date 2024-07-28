let data = [];
fetch("https://fakestoreapi.com/products?limit=5")
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

function displayData(data) {
  let cardData = document.getElementById("card-container");
  console.log(cardData);
  let html = "";
  data.forEach(function (element) {
    html += ` <div id="card" style="width: 18rem">
        <img
          src="${element.image}"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <p style="font-size: 22px; font-weight: 600">${element.title}</p>
          <p class="card-text">
         ${element.description.slice(0, 90)}
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
            <button class="btn btn-primary" onClick='editInfo(${
              element.id
            })'>Edit</button>
            <button class="btn btn-danger" onClick='deleteInfo(${
              element.id
            })'>Delete</button>
          </div>
        </div>
      </div>`;
  });
  cardData.innerHTML = html;
}

displayData();

function editInfo(index) {
  console.log(`Edit `, index);
}
function deleteInfo(index) {
  data.splice(index, 1);
  displayData(data);
}
