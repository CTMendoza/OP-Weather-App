export {displayCurrentWeather}

/* <h1 id="address"></h1>
<div id="forecast-container">
    <div id="current-weather-section">
        <div id="current-weather-container">
            <h3 class="condition"></h3>
            <img class="weather-icon" src="" alt="">
            <p class="temp"></p>
            <p class="precipitation"></p>
            <p class="humidity"></p>
        </div>
    </div>
</div> */

const forecastCont = document.querySelector('#forecast-container');
const currentWeatherCont = document.querySelector('#current-weather-section');
const currentWeather = document.querySelector('#current-weather-container');
const address = document.querySelector('#address');
const condition = document.querySelector('.condition');
const weatherIcon = document.querySelector('.weather-icon');
const temp = document.querySelector('.temp');
const precipitation = document.querySelector('.precipitation');
const humidity = document. querySelector('.humidity');

function displayCurrentWeather (location) {
    forecastCont.style.visibility = "visible";
    address.textContent = location.address;
    condition.textContent = location.currentWeather.conditions;
    weatherIcon.src = `/weather-icons/${location.currentWeather.icon}.png`;
    temp.textContent = `${location.currentWeather.temp}`;
    precipitation.textContent = `Precipitation: ${location.currentWeather.precipprob}%`;
    humidity.textContent = `Humidity: ${location.currentWeather.humidity}%`;
}

function displayWeeklyForecast (location) {
    location.weeklyForecast.forEach()
}