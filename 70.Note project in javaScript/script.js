let formData = document.getElementById("form-data");
let cardData = document.getElementById("card-data");
let textArea = document.getElementById("text-area");
let addBtn = document.getElementById("addBtn");
let inputNote = document.getElementById("search-notes");

cardData.innerHTML = "";
let submittedData = [];
let edit_index = null;

formData.addEventListener("submit", (event) => {
  event.preventDefault();

  cardObject = {
    text: textArea.value,
  };
  if (edit_index == null) {
    submittedData.push(cardObject);
  } else {
    submittedData.splice(index, 1, cardObject);
    edit_index = null;
  }
  addBtn.innerText = "Add Note";
  textArea.value = "";
  displayCard();
});

let search = document.getElementById("search-btn");

search.addEventListener("input", (event) => {
  event.preventDefault();
  let cardElement = document.getElementById("card-body");
  let cardElementKoValue = cardElement.value;

  Array.from(cardElement).forEach(function (element) {
    let paraText = document.getElementsByTagName("p")[0].innerText;
    if (paraText.includes(cardElementKoValue)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});

function displayCard() {
  let html = "";
  submittedData.forEach(function (element, index) {
    html += ` <div class="card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">Note:${index + 1}</h5>

          <p class="card-text">${element.text}</p>
          <div class="btn btn-container">
            <button class="btn btn-primary" onClick='editInformation(${index})'>Edit</button>
            <button class="btn btn-danger"onClick='deleteInformation(${index})'>Danger</button>
          </div>
        </div>
      </div>`;
  });
  cardData.innerHTML = html;
}

function editInformation(index) {
  textArea.value = submittedData[index].text;
  addBtn.innerText = "Edit Note";
}
function deleteInformation(index) {
  submittedData.splice(index, 1);
  displayCard();
}
