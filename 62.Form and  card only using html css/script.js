// let data = [];

// let formData = {
//   name: "Hari",
//   address: "Galyang",
//   phone: "98**********",
//   email: "adhikaribipin1032@gamil.com",
//   password: "",
// };
// data.push(formData);

// function displayData() {
//   let cardData = document.getElementById("card-container");
//   let html = "";
//   data.forEach(function (index, element) {
//     html += `<div class="card" style="width: 18rem">
//         <img
//           src="https://images.unsplash.com/photo-1719937206300-fc0dac6f8cac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MXx8fGVufDB8fHx8fA%3D%3D"
//           class="card-img-top"
//           alt="..."
//         />
//         <div class="card-body">
//           <h5 class="card-title">Display form data</h5>
//           <p class="card-text">${element.name}</p>
//           <p class="card-text">${element.address}</p>
//           <p class="card-text">${element.phone}</p>
//           <p class="card-text">${element.email}</p>
//           <p class="card-text">${element.password}</p>
//           <div class="btn btn-container">
//             <a href="#" class="btn btn-primary">Edit</a>
//             <a href="#" class="btn btn-danger">Delete</a>
//           </div>
//         </div>
//       </div>`;
//   });
//   cardData.innerHTML = html;
// }
// displayData();

let data = [];

let formData = {
  name: "Hari",
  address: "Galyang",
  phone: "98**********",
  email: "adhikaribipin10@gamil.com",
  password: "",
};
data.push(formData);

function displayData() {
  let cardData = document.getElementById("card-container");
  let html = "";

  data.forEach(function (element) {
    html += `<div class="card" style="width: 18rem">
        <img
          src="https://images.unsplash.com/photo-1719937206300-fc0dac6f8cac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MXx8fGVufDB8fHx8fA%3D%3D"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Display form data</h5>
          <p class="card-text">${element.name}</p>
          <p class="card-text">${element.address}</p>
          <p class="card-text">${element.phone}</p>
          <p class="card-text">${element.email}</p>
          <p class="card-text">${element.password}</p>
          <div class="btn btn-container">
            <a href="#" class="btn btn-primary">Edit</a>
            <a href="#" class="btn btn-danger">Delete</a>
          </div>
        </div>
      </div>`;
  });

  cardData.innerHTML = html;
}

displayData();
