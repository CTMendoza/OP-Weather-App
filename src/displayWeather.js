export { displayWeeklyForecast}

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
const address = document.querySelector('#address');


function displayWeeklyForecast (location) {
    // First, collapse the container by removing 'show' and setting max-height to 0
    forecastCont.style.maxHeight = forecastCont.scrollHeight + "px"; // Ensure the height is set
    forecastCont.classList.remove("show"); 
    forecastCont.style.opacity = "0";

      // Wait for the transition to finish before updating content
      setTimeout(() => {
        weeklyForecastSect.innerHTML = "";
        currentWeather.innerHTML = "";
        address.textContent = location.address;

        location.weeklyForecast.forEach((day, index) => {
            if (index === 0) {
                const date = document.createElement("h3");
                date.className = "date";
                date.textContent = day.datetime;
                const condition = document.createElement("h3");
                condition.className = "condition";
                condition.textContent = day.conditions;
                const img = document.createElement("img");
                img.className = "weather-icon";
                img.src = `/weather-icons/${day.icon}.png`;
                const temp = document.createElement("p");
                temp.className = "temp";
                temp.textContent = `${day.temp} ℉`;
                const precipitation = document.createElement("p");
                precipitation.className = "precipitation";
                precipitation.textContent = `Precipitation: ${day.precipprob}%`;
                const humidity = document.createElement("p");
                humidity.className = "humidity";
                humidity.textContent = `Humidity: ${day.humidity}%`;

                currentWeather.appendChild(date);
                currentWeather.appendChild(condition);
                currentWeather.appendChild(img);
                currentWeather.appendChild(temp);
                currentWeather.appendChild(precipitation);
                currentWeather.appendChild(humidity);
            } else {
                const date = document.createElement("h3");
                date.className = "date";
                date.textContent = day.datetime;
                const condition = document.createElement("h3");
                condition.className = "condition";
                condition.textContent = day.conditions;
                const img = document.createElement("img");
                img.className = "weather-icon";
                img.src = `/weather-icons/${day.icon}.png`;
                const temp = document.createElement("p");
                temp.className = "temp";
                temp.textContent = `${day.temp} ℉`;
                const precipitation = document.createElement("p");
                precipitation.className = "precipitation";
                precipitation.textContent = `Precipitation: ${day.precipprob}%`;
                const humidity = document.createElement("p");
                humidity.className = "humidity";
                humidity.textContent = `Humidity: ${day.humidity}%`;

                const weeklyForecastCont = document.createElement("div");
                weeklyForecastCont.className = "weekly-forecast-container";
                weeklyForecastCont.appendChild(date);
                weeklyForecastCont.appendChild(condition);
                weeklyForecastCont.appendChild(img);
                weeklyForecastCont.appendChild(temp);
                weeklyForecastCont.appendChild(precipitation);
                weeklyForecastCont.appendChild(humidity);
                weeklyForecastSect.appendChild(weeklyForecastCont);
            }
        });

        
        // After content update, reapply the transition to show it smoothly
        setTimeout(() => {
            forecastCont.classList.add("show");
            forecastCont.style.maxHeight = forecastCont.scrollHeight + "px"; // Adjust height dynamically
            forecastCont.style.opacity = "1";
        }, 100); // Small delay to ensure smooth transition

    }, 300); // Wait for hiding transition to finish before updating content


}