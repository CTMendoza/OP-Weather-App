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
  const cityRegex = /^[A-Za-z\s]+(,\s?[A-Za-z]{2})?$|^[A-Za-z\s]+$/; // Allows only letters & spaces (e.g., "New York")
  const zipRegex = /^[A-Za-z\d\s\-]{3,10}$/ // universal regex to check most postal codes per country
  if (!cityRegex.test(locationInput) && !zipRegex.test(locationInput)) {
    alert("Please enter a valid city name or a valid postal code.");
    return false;
  }
  return true;
}