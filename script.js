const inputBox = document.querySelector("#input-box");
const searchBtn = document.querySelector("#search-btn");
const weatherImg = document.querySelector(".weather-img");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.querySelector("#humidity");
const windSpeed = document.querySelector("#wind-speed");

const location_not_found = document.querySelector(".location-not-found");
const weather_body = document.querySelector(".weather-body");

async function checkWeather(city){
    const api_key = "c98a562e46e4c048d51cced7ac2781b1";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response =>
    response.json());

    if(weather_data.cod === "404"){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";

    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}<sup>°C</sup>`;

    description.textContent = `${weather_data.weather[0].description}`;

    humidity.textContent =  `${weather_data.main.humidity}%`;
    windSpeed.textContent = `${weather_data.wind.speed}km/H`;

    console.log(weather_data.weather[0].main);
    switch(weather_data.weather[0].main){
        case "Clouds":
            weatherImg.src = "assets/weather/clouds.svg";
            break;
        case "Clear":
            weatherImg.src = "assets/weather/clear.svg";
            break;
        case "Rain":
            weatherImg.src = "assets/weather/rain.svg";
            break;
        case "Drizzle":
            weatherImg.src = "assets/weather/drizzle.svg";
            break;
        case "Snow":
            weatherImg.src = "assets/weather/snow.svg";
            break;
        case "Atmosphere":
            weatherImg.src = "assets/weather/Atmosphere.svg";
            break;
        case "Thunderstorm":
            weatherImg.src = "assets/weather/thunderstorm.svg";
            break;
        case "Snow":
            weatherImg.src = "assets/weather/snow.svg";
            break;
        case "Mist":
            weatherImg.src = "assets/weather/mist.png";
            break;
        case "Haze":
            weatherImg.src = "assets/weather/haze.png";
            break;

        default:
            weatherImg.alt = "weather img";
    }
}

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    checkWeather(inputBox.value);
});