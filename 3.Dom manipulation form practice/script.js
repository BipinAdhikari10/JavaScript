let contactForm = document.getElementById("contactForm");
let contactTableBody = document.getElementById("contactDataTable");

let submittedData = [];
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let submitForm = {};

  submitForm = {
    contact: document.getElementById("contact-name").value,
    email: document.getElementById("contact-email").value,
    subject: document.getElementById("contact-subject").value,
  };
  submittedData.push(submitForm);

  //   adding data to table
  addToTable(submitForm);
});
function addToTable(submitForm) {
  let tr = document.createElement("tr");
  for (let key in submitForm) {
    let td = document.createElement("td");
    let text = document.createTextNode(submitForm[key]);
    td.appendChild(text);
    tr.appendChild(td);
  }
  contactTableBody.appendChild(tr);
}
