const inputBox = document.querySelector("#input-box");
const searchBtn = document.querySelector("#search-btn");
const weatherImg = document.querySelector(".weather-img");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.querySelector("#humidity");
const windSpeed = document.querySelector("#wind-speed");

async function checkWeather(city){
    const api_key = "c98a562e46e4c048d51cced7ac2781b1";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response =>
    response.json());

    console.log(weather_data);
}

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    checkWeather(inputBox.value);
});