class UI {
    constructor() {
        this.card = document.querySelector('.card');
        this.details = document.querySelector('.details');
        this.time = document.querySelector('.time');
        this.icon = document.querySelector('.icon img');
    }
    // Update the city & weather information into page
    updateUI(data) {
        const cityDets = data.cityDetail;
        const weather = data.weather
        // Update weather information
        this.details.innerHTML = `
            <h5 class="my-3">${cityDets.EnglishName}</h5>
            <div class="my-3">${weather.WeatherText}</div>
            <div class="display-4 my-4">
                <span>${weather.Temperature.Metric.Value}</span>
                <span>&deg;C</span>
            </div>
        `;
        // Update daytime image
        this.time.src = weather.IsDayTime ? "img/day.jpg" : "img/night.jpg";
        // Update weather icon
        let weatherIcon = weather.WeatherIcon;
        if (weatherIcon < 10) {
            weatherIcon = '0' + weatherIcon;
        } else {
            weatherIcon = weatherIcon;
        }
        this.icon.src = `https://developer.accuweather.com/sites/default/files/${weatherIcon}-s.png`;
        // Show weather card when submit the form
        if (this.card.classList.contains('d-none')) {
            this.card.classList.remove('d-none');
        }
    }
}