let search = document.getElementById('search');
let form = document.querySelector('.form');
let weatherData = document.querySelector('.weather-data');
let cityName = document.querySelector('.city-name');

async function getData(city) {
    let url = `http://api.weatherapi.com/v1/current.json?key=4995030812564694ab8150713241407&q=${city}`;

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    loadData(json);
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    getData(search.value);
    search.value = "";
});

let loadData = (data) => {
    cityName.innerHTML = `<h1 class="city-name">${data.location.name}</h1>`
    weatherData.innerHTML =
        `<div 
        class="weather-data">
        <img src="${data.current.condition.icon}" alt="">
        <h2>${data.current.temp_c}</h2>
         </div>
          `
};


