let data = [];
function displayData() {
  let cardData = document.getElementById("card-container");
  let html = "";
  data.forEach(function (element) {
    html += ` <div class="card" id="card" style="width: 18rem">
        <img
          src="https://images.unsplash.com/photo-1719937206341-38a6392dfdef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body" id="card-body">
          <h5 class="card-title" style="font-weight: 700"></h5>
          <p class="card-name" style="font-weight: 600">${element.name}</p>
          <p class="card-address" style="font-weight: 600">${element.address}</p>
          <p class="card-password" style="font-weight: 600">${element.password}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`;
  });
  cardData.innerHTML = html;
}
displayData();
