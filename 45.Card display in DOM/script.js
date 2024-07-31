let data = [];
fetch("https://fakestoreapi.com/products")
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    console.log(json);
    data.push(...json);
    displayData();
  });

function displayData() {
  let cardData = document.getElementById("card-container");
  // console.log(cardData);
  let html = "";
  data.forEach(function (element, index) {
    html += `  <div id="card" style="width: 18rem">
        <img
          src="${element.image}"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <p style="font-size: 22px; font-weight: 600"></p>
          <p class="card-text">
            ${element.title}
          </p>
          <P>${element.description.slice(0, 90)}</P>
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
              ${element.rating.rate} of${element.rating.count}
            </li>
          </ul>
          <div class="mt-2 d-flex justify-content-center" style="gap: 40px">
            <button class="btn btn-primary"onClick='editInfo(${index})'>Edit</button>
            <button class="btn btn-danger"onClick='deleteInfo(${index})'>Delete</button>
          </div>
        </div>
      </div>`;
  });
  if (data.length < 1) {
    cardData.innerText = "No data found please add data";
  } else {
    cardData.innerHTML = html;
  }
}
displayData();

function editInfo(index) {
  console.log("This help you to edit this index", index);
}

function deleteInfo(index) {
  data.splice(index, 1);
  displayData();
}
