class WeatherAPI {
    constructor() {
        this.key = 'VwyeW2vetmQfFYGIP1KN12FoomnrKfSe';
    }
    // Get city information
    async getCity(city) {
        const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
        const query =  `?apikey=${this.key}&q=${city}`;
        const response = await fetch(base + query);
        const data = await response.json();
        return data[0]; // Return the closest match to the result
    }
    // Get weather information
    async getWeather(locationKey) {
        const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
        const query = `${locationKey}?apikey=${this.key}`;
        const response = await fetch(base + query);
        const data = await response.json();
        return data[0];
    }
    // Return city & weather information
    async updateCity(city) {
        const cityDets = await this.getCity(city);
        const weather = await this.getWeather(cityDets.Key);
        return {
            cityDetail: cityDets,
            weather: weather
        }
    }
}