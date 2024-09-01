let formData = document.getElementById("form-data");
let cardData = document.getElementById("card-data");
let textArea = document.getElementById("text-area");
let addBtn = document.getElementById("addBtn");

cardData.innerHTML = "";
let submittedData = [];
let edit_index = null;

formData.addEventListener("submit", (event) => {
  event.preventDefault();

  let cardObject = {
    text: textArea.value,
  };
  if (edit_index == null) {
    submittedData.push(cardObject);
  } else {
    submittedData.splice(edit_index, 1, cardObject);
    edit_index = null;
  }
  addBtn.innerText = "Add Note";
  textArea.value = "";
  displayCard();
});

let searchNotes = document.getElementById("search-notes");

searchNotes.addEventListener("input", () => {
  let searchValue = searchNotes.value.toLowerCase();

  let cardElements = document.getElementsByClassName("card");

  Array.from(cardElements).forEach(function (element) {
    let paraText = element.querySelector("p").innerText.toLowerCase();

    if (paraText.includes(searchValue)) {
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
            <button class="btn btn-danger"onClick='deleteInformation(${index})'>Delete</button>
          </div>
        </div>
      </div>`;
  });
  cardData.innerHTML = html;
}

function editInformation(index) {
  textArea.value = submittedData[index].text;
  edit_index = index;
  addBtn.innerText = "Edit Note";
}

function deleteInformation(index) {
  submittedData.splice(index, 1);
  displayCard();
}
