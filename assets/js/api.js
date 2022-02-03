const API = "https://rickandmortyapi.com/api/character";

const getAPI = (api) => {
  return fetch(api)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      fillData(json.results), pagination(json.info);
    })
    .catch((error) => {
      console.log("Error with the API");
    });
};

const fillData = (data) => {
  let html = "";
  data.forEach((ch) => {
    html += '<div class="col">';
    html += '<div class="card">';
    html += `<span class="card-id">#${ch.id}</span>`;
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
  let html = "";

  html += `<li class="page-item ${
    info.prev == null ? "disabled" : ""
  }"><a class="page-link" onclick="getAPI('${info.prev}')">Prev</a> </li> `;
  html += `<li class="page-item ${
    info.next == null ? "disabled" : ""
  }"><a class="page-link" onclick="getAPI('${info.next}')">Next</a> </li> `;

  document.getElementById("pagination").innerHTML = html;
};

getAPI(API);
