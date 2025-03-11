export {convertToCelsius, toggleTemperatureUnits, toggleSwitch, isCelsius}

const toggleSwitch = document.getElementById("toggleSwitch");
let isCelsius = false; // Default is Fahrenheit


function convertToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}

// Function to toggle temperature units
function toggleTemperatureUnits() {
    isCelsius = toggleSwitch.checked; // True when toggled to Celsius

    document.querySelectorAll(".temp").forEach(tempElement => {
        let currentTemp = parseFloat(tempElement.getAttribute("data-fahrenheit"));
        
        if (isCelsius) {
            tempElement.textContent = `${convertToCelsius(currentTemp).toFixed(1)} ℃`;
        } else {
            tempElement.textContent = `${currentTemp} ℉`;
        }
    });
}