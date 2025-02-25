export {inputEmpty, cityRegex}

function inputEmpty(locationInput, inputField) {
  if (!locationInput) {
      alert("Please enter a location (city name or zip code).");
      inputField.focus();
      return false;
   }
   return true;
}

function cityRegex (locationInput) {
  const cityRegex = /^[A-Za-z\s]+$/; // Allows only letters & spaces (e.g., "New York")
  if (!cityRegex.test(locationInput)) {
    alert("Please enter a valid city name (letters only).");
    return false;
  }
  return true;
}