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

function getData() {
  let url = `https://fakestoreapi.com/products`;
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      console.log(json);
      displayData();
    })
    .catch(function (error) {
      console.log(error);
    });
}
getData();

function displayData() {
  let cardData = document.getElementById("card-container");
  //   console.log(cardData);
  let html = "";
  data.forEach(function (element, index) {
    html =
      html +
      `  <div class="card" style="width: 18rem">
        <img
          src="${element.image}"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text">
            ${element.description.slice(0, 80)}

          </p>
    
          <p class="price"><strong>Price:</strong> ${element.price}</p>
          <p class="category"><strong>Category:</strong> ${element.category}</p>
          <p class="rating">
            <strong>Rating:</strong> ${element.rating.rate} of ${
        element.rating.count
      }
          </p>
          <div class="btn-container">
            <button class="btn btn-primary">Details</button>
            <button class="btn btn-danger" onClick ='deleteInfo(${index})'>Delete</button>
          </div>
        </div>
      </div>`;
  });
  if (data.length < 1) {
    cardData.innerText = "No data found";
  } else {
    cardData.innerHTML = html;
  }
}
displayData();

function deleteInfo(index) {
  data.splice(index, 1);
  displayData();
}
