const country = document.getElementById("country");
const input = document.getElementById("in-dark-mode-input");
const filterCountry = document.getElementById("qitalar-wrapper");
const liCountry = document.querySelector(".countries-list");
const send = document.querySelector('.Send')
const selectFilter = document.querySelector(".other-countries");
const selectFilterAllLi = document.querySelectorAll(".other-countries li");
const selectFilterSpan = document.querySelector(".filter_wrapper span");
send && send.addEventListener('click' , function(){
  confirm('Siz "Enter" tugmasini bosishingiz kerak ')
})

const UpdateUI = (data) => {
  country.innerHTML = "";
  data.forEach((item) => {
    const { flags, name, population, region, capital } = item;
    country.innerHTML += `
    <a href="./about.html?country-name=${item.name.common}">
    <li id="dark-mode-class" class=" countries-list ">
         <img class="img-country-flag" src="${flags.png}"
         alt="" / width="264" height="160">
    <div  class="information-country">
        <h4 id="from" class="country-name">${name.common} </h4>
        <p class="informations"><strong>Population: </strong>${population} </p>
        <p class="informations"><strong>Region: </strong> ${region}</p>
        <p class="informations"><strong>Capital: </strong> ${capital}</p>
    </div>
</li> 
    </a>
    `;
  });
};

input.addEventListener("input", () => {
  const inputValue = input.value.toLowerCase();
  const name = document.querySelectorAll("#from");
  name.forEach((item) => {
    if (!item.textContent.toLowerCase().includes(inputValue)) {
      item.parentElement.parentElement.parentElement.classList.add("hidden");
    } else {
      item.parentElement.parentElement.parentElement.classList.remove("hidden");
    }
  });
});

const filterWrapper = document.getElementById("filter_wrapper");
filterWrapper.addEventListener("click", () => {
  const selectFilter = document.querySelector(".other-countries");
  selectFilter.classList.remove("hidden");
});

selectFilterAllLi.forEach((li) => {
  li.addEventListener("click", () => {
    filterCountry.classList.add("hidden");
    selectFilterSpan.textContent = li.textContent;
    let filterApi;
    console.log(li.textContent);
    if (li.textContent == `All`) {
      filterApi = `https://countries-api-v7sn.onrender.com/countries?limit=250`;
    } else {
      filterApi = `https://countries-api-v7sn.onrender.com/countries?region=${li.textContent}`;
    }

    getData(filterApi)
      .then((data) => {
        UpdateUI(data);
      })
      .catch((err) => {
        alert(err.massage);
      });
  });
});
