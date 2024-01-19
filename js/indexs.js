const API = `https://countries-api-v7sn.onrender.com/countries?limit=250`;
const loader = document.querySelector(".loader");
const loaderToggle = (item) => {
  if (item) {
    loader.classList.remove("hidden");
  } else {
    loader.classList.add("hidden");
  }
};
const getData = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState != 4) {
        loaderToggle(true);
      } else if (request.readyState == 4 && request.status == 200) {
        const result = JSON.parse(request.responseText);
        resolve(result.data);
        loaderToggle(false);
      } else if (request.readyState == 4) {
        loaderToggle(false);
        reject(`Eror`);
      }
    });

    request.open(`GET`, resource);
    request.send();
  });
};
const load = () => {
  getData(API)
    .then((data) => {
      UpdateUI(data);
    })
    .catch((err) => {
      console.log(err);
    });
};
document.addEventListener("DOMContentLoaded", load);
