function getWeather() {
    const apiKey = 'bd5e378503939ddaee76f12ad7a97608'; // Replace with your OpenWeatherMap API key
    const city = document.getElementById('city').value;

    if (city === '') {
        alert('Please enter a city name');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

function displayWeather(data) {
    const weatherInfoContainer = document.getElementById('weather-info');
    const temperature = Math.round(data.main.temp - 273.15); // Convert temperature to Celsius

    const weatherHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${temperature}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
    `;

    weatherInfoContainer.innerHTML = weatherHTML;
}
