getData();

function getData() {
  let url = `https://fakestoreapi.com/products`;
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      console.log(json);
    })
    .catch(function (error) {
      console.log(error);
    });
}
