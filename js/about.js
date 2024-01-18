const wrapper = document.querySelector(".wrapper");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const CountryName = urlParams.get("country-name").toLowerCase();

console.log(CountryName);

const API = `https://countries-api-v7sn.onrender.com/countries/slug/${CountryName}`;

const fetchData = async (url) => {
  const req = await fetch(url);
  const data = await req.json();
  return data;
};

fetchData(API).then((data) => {
  console.log(data);
  wrapper.innerHTML = "";
  wrapper.innerHTML = `<div class="about_wrapper-div container">
        <div class="img_wrapper">
            <img
                src=${data.flags.png}
                alt="Country's flag"
                width="560"
                height="401"
            />
            </div>
                <div class="about_informations">
                <h2 class="about_country-name">${data.name.common}</h2>
                <p class="types"><strong>Native Name: </strong>${data.name.native}</p>
                <p class="types"><strong>Population :</strong>${data.population} </p>
                <p class="types"><strong>Region: </strong>${data.region}</p>
                <p class="types"><strong>Sub Region: </strong> ${data.subregion}</p>
                <p class="types"><strong>Capital: </strong>${data.capital} </p>
                </div>
                <div class="about_informations2">
                <p class="types"><strong>Top Level Domain: </strong> .be</p>
                <p class="types"><strong>Currencies: </strong>${data.currencies} </p>
                <p class="types"><strong>Languages: </strong>${data.languages} </p>
                </div>
            </div>
            <div class="border_place container">
                <p class="types">Border Countries: </p>
                <div class="border_btns_wrapper">
                <button class="border-btn">France</button>
                <button class="border-btn">Germany</button>
                <button class="border-btn">Netherlands</button>
                </div>
            </div>`;
});
