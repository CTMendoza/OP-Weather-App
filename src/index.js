import "./styles.css";

let location = {}
let currentWeather
let weeklyForecast

function getForecast () {
    return fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Cerritos,CA?key=V2W5E3UV9S9V3X9VG8HSUMW6K`, {mode: 'cors'})
    .then(function(response) {
        return response.json();
      })
    .then(data => {
      currentWeather = data.currentConditions
      weeklyForecast = data.days
      location.currentWeather = currentWeather;
      location.weeklyForecast = weeklyForecast;
      console.log("Inside getForecast:", location);
    
    })
    .catch(error => console.error("Error fetching data:", error));
}


getForecast().then(() => {
  let temp = location.currentWeather.temp;
  console.log(`temp is ${temp}`);
});

