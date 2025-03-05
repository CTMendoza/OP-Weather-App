export {displayCurrentWeather, displayWeeklyForecast}

/* 
 <div id="forecast-container">
        <div id="current-weather-section">
            <div id="current-weather-container">
                <h3 class="date"></h3>
                <h3 class="condition"></h3>
                <img class="weather-icon" src="#" alt="">
                <p class="temp"></p>
                <p class="precipitation"></p>
                <p class="humidity"></p>
            </div>
        </div>
        <div id="weekly-forecast-section">
            
        </div>
    </div>
*/

const forecastCont = document.querySelector('#forecast-container');
const currentWeatherSect = document.querySelector('#current-weather-section');
const currentWeather = document.querySelector('#current-weather-container');
const weeklyForecastSect = document.querySelector('#weekly-forecast-section');
// const date = document.querySelector('.date');
const address = document.querySelector('#address');
// const condition = document.querySelector('.condition');
// const weatherIcon = document.querySelector('.weather-icon');
// const temp = document.querySelector('.temp');
// const precipitation = document.querySelector('.precipitation');
// const humidity = document. querySelector('.humidity');



function displayCurrentWeather (location) {
    forecastCont.style.visibility = "visible";
    date.textContent = location.weeklyForecast[0].datetime;
    address.textContent = location.address;
    condition.textContent = location.weeklyForecast[0].conditions;
    weatherIcon.src = `/weather-icons/${location.weeklyForecast[0].icon}.png`;
    temp.textContent = `${location.weeklyForecast[0].temp}`;
    precipitation.textContent = `Precipitation: ${location.weeklyForecast[0].precipprob}%`;
    humidity.textContent = `Humidity: ${location.weeklyForecast[0].humidity}%`;
}

function displayWeeklyForecast (location) {
    weeklyForecastSect.innerHTML = "";
    currentWeather.innerHTML = "";
    address.textContent = location.address;
    location.weeklyForecast.forEach((day, index) => {
        if(index === 0) {
            forecastCont.style.visibility = "visible";
            const date = document.createElement('h3');
            date.className = 'date';
            date.textContent = day.datetime;
            const condition = document.createElement('h3');
            condition.className = 'condition';
            condition.textContent = day.conditions;
            const img = document.createElement('img');
            img.className = 'weather-icon';
            img.src = `/weather-icons/${day.icon}.png`;
            const temp = document.createElement('p');
            temp.className = 'temp';
            temp.textContent = `${day.temp}`;
            const precipitation = document.createElement('p');
            precipitation.className = 'precipitation';
            precipitation.textContent = `Precipitation: ${day.precipprob}%`;
            const humidity = document.createElement('p');
            humidity.className = 'humidity';
            humidity.textContent = `Humidity: ${day.humidity}%`;
            currentWeather.appendChild(date);
            currentWeather.appendChild(condition);
            currentWeather.appendChild(img);
            currentWeather.appendChild(temp);
            currentWeather.appendChild(precipitation);
            currentWeather.appendChild(humidity);
        //   let weeklyForecastCont =  document.createElement('div');
        //   const date = document.createElement('h3')
        //   weeklyForecastCont.className = 'weekly-forecast-container';
        //   date.textContent = day.datetime;
        //   address.textContent = location.address;
        //   condition.textContent = day.conditions;
        //   weatherIcon.src = `/weather-icons/${day.icon}.png`;
        //   temp.textContent = `${day.temp}`;
        //   precipitation.textContent = `Precipitation: ${day.precipprob}%`;
        //   humidity.textContent = `Humidity: ${day.humidity}%`;
        //   weeklyForecastCont.appendChild(date);
        //   weeklyForecastCont.appendChild(address);
        //   weeklyForecastCont.appendChild(condition);
        //   weeklyForecastCont.appendChild(weatherIcon);
        //   weeklyForecastCont.appendChild(temp);
        //   weeklyForecastCont.appendChild(precipitation);
        //   weeklyForecastCont.appendChild(humidity);
        //   weeklyForecastSect.appendChild(weeklyForecastCont);
        }
        else {
            const date = document.createElement('h3');
            date.className = 'date';
            date.textContent = day.datetime;
            const condition = document.createElement('h3');
            condition.className = 'condition';
            condition.textContent = day.conditions;
            const img = document.createElement('img');
            img.className = 'weather-icon';
            img.src = `/weather-icons/${day.icon}.png`;
            const temp = document.createElement('p');
            temp.className = 'temp';
            temp.textContent = `${day.temp}`;
            const precipitation = document.createElement('p');
            precipitation.className = 'precipitation';
            precipitation.textContent = `Precipitation: ${day.precipprob}%`;
            const humidity = document.createElement('p');
            humidity.className = 'humidity';
            humidity.textContent = `Humidity: ${day.humidity}%`;
            const weeklyForecastCont = document.createElement('div');
            weeklyForecastCont.className = 'weekly-forecast-container';
            weeklyForecastCont.appendChild(date);
            weeklyForecastCont.appendChild(condition);
            weeklyForecastCont.appendChild(img);
            weeklyForecastCont.appendChild(temp);
            weeklyForecastCont.appendChild(precipitation);
            weeklyForecastCont.appendChild(humidity);
            weeklyForecastSect.appendChild(weeklyForecastCont);
        }
    })
}