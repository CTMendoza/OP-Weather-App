import "./styles.css";

function getForecast () {
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/90701?key=V2W5E3UV9S9V3X9VG8HSUMW6K`, {mode: 'cors'})
    .then(function(response) {
        console.log(response.json());
      });
}

getForecast();