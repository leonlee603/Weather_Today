const cityForm = document.querySelector('form');
const inputField = document.getElementById('city');

// instance of classes
const weatherAPI = new WeatherAPI();
const ui = new UI();

// Event for submitting
cityForm.addEventListener('submit', e => {
    e.preventDefault();
    const textInput = inputField.value.trim();
    cityForm.reset();
    if (textInput !== '') {
        // Get the data from weather api and update the data into the page
        weatherAPI.updateCity(textInput)
            .then(data => ui.updateUI(data)) // Update the page when fetch the data successfully
            .catch(err => console.log(err));
        // Set local storage
        localStorage.setItem('city', textInput);
    }
}); 

// Render the  city and weather information if there is city value stored in local storage
if (localStorage.getItem('city')) {
    // Get the data from weather api and update the data into the page
    weatherAPI.updateCity(localStorage.getItem('city'))
        .then(data => ui.updateUI(data)) // Update the page when fetch the data successfully
        .catch(err => console.log(err));
}