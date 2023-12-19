/* trabalhando com cabeçarios e consumo de imagens em API Ninjas
https://api-ninjas.com/api/randomimage */

var myImage = document.querySelector("img");

var mySearch = document.getElementById("search");

const url_base = "https://api.api-ninjas.com/v1/randomimage";

const complemento = "?category=";
/* category (optional): nature, city, technology, food, still_life, abstract, wildlife. */

const apiKey = "??";

mySearch.onkeyup = function (event) {
  if (event.keyCode == 13 || event.keyCode == 'Enter') {
    getImage(mySearch.value);
  }
};

function getImage(termo) {
  var myHeaders = new Headers();
  myHeaders.append("X-Api-Key", apiKey);
  myHeaders.append("Accept", "image/jpg");
  myHeaders.append("Content-Type", "image/jpg");

  var myInit = {
    method: "GET",
    headers: myHeaders,
    mode: "cors",
    cache: "default",
  };

  var myRequest = new Request(url_base + complemento + termo, myInit);

  fetch(myRequest)
    .then(function (response) {
      return response.blob();
    })
    .then(function (response) {
      var objectURL = URL.createObjectURL(response);
      myImage.src = objectURL;
    });
};