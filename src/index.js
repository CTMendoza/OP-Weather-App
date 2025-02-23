import "./styles.css";

let location = {}
let currentWeather
let weeklyForecast
const submit = document.querySelector('button');
const form = document.querySelector('form');


function getForecast (locationInput) {
    return fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locationInput}?key=V2W5E3UV9S9V3X9VG8HSUMW6K`, {mode: 'cors'})
    .then(function(response) {
        return response.json();
      })
    .then(data => {
      currentWeather = data.currentConditions
      weeklyForecast = data.days
      location.currentWeather = currentWeather;
      location.weeklyForecast = weeklyForecast;
    })
    .catch(error => console.error("Error fetching data:", error));
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const locationInput = formData.get("location") //gets value of input when form is submitted
  getForecast(locationInput).then(() => {  // fetches location weather based on input value then logs data to console.
    console.log(`location data is: `, location);
  });
  form.reset(); // resets form input values
})

// getForecast().then(() => {
//   console.log(`location data is: `, location);
// });

