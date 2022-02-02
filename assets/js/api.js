const API = "https://rickandmortyapi.com/api/character";

const getData = (api) => {
  return fetch(api)
    .then((response) => response.json())
    .then((json) => {
      fillData(json.results), pagination(json.info);
    })
    .catch((error) => {
      console.log("Error in the API:", error);
    });
};

const fillData = (data) => {
  let html = "";
  data.forEach((ch) => {
    html += '<div class="col">';
    html += '<div class="card h-100">';
    html += `<img src="${ch.image}" class="card-img-top" alt="...">`;
    html += '<div class="card-body">';
    html += `<h5 class="card-title">${ch.name}</h5>`;
    html += "</div>";
    html += "</div>";
    html += "</div>";
  });
  document.getElementById("characters").innerHTML = html;
};

const pagination = (info) => {
  let prevDisabled = info.prev == null ? "disabled" : "";
  let nextDisabled = info.next == null ? "disabled" : "";

  document.getElementById(
    "next"
  ).innerHTML = `<a class="btn ${nextDisabled}" onclick="getData('${info.next}')"><i class="fas fa-chevron-right"></i></a>`;
  document.getElementById(
    "prev"
  ).innerHTML = `<a class="btn ${prevDisabled}" onclick="getData('${info.prev}')"><i class="fas fa-chevron-left"></i></a>`;
};

getData(API);
