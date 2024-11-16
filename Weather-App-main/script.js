const city = document.querySelector('#inputText');
const button = document.getElementById('btn');
const image = document.querySelector('#showImg');
const temperature = document.querySelector('.temp');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('windSpeed');
const home = document.querySelector('.home');

const error=document.querySelector('.error');
const weatherBody=document.querySelector('.weather_body');

async function checkWeather(cityName) {
    const apiKey = "2ccc5a8e6b02be4f5fee98a8f55dc953";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
    const weather_Data = await fetch(`${url}`).then(response => response.json());

    if(weather_Data.cod===`404`){
        error.style.display="flex";
        weatherBody.style.display="none";
        home.style.display="none";
        return;
    }
    error.style.display="None";
    home.style.display="None";
    weatherBody.style.display="flex";
    



    temperature.innerHTML = `${Math.round(weather_Data.main.temp - 273.15)}`;
    description.innerHTML = `${weather_Data.weather[0].description}`;
    humidity.innerHTML = `${weather_Data.main.humidity}`;
    windSpeed.innerHTML = `${weather_Data.wind.speed}`;

    switch (weather_Data.weather[0].main) {
        case 'Clouds': image.src = "/Images/clouds.png";
            break;
        case 'Clear': image.src = "/Images/clear.png";
            break;
        case 'Rain': image.src = "/Images/rain.png";
            break;
        case 'Mist': image.src = "/Images/mist.png";
            break;
        case 'Snow': image.src = "/Images/snow.png";
            break;
        case 'Drizzle': image.src = "/Images/drizzle.png";
            break;
        case 'Thunderstorm': image.src = "/Images/thunderStorm.png";
            break;
    }

}


button.addEventListener('click', () => {
    checkWeather(city.value);
})
document.body.addEventListener("keydown",(ev)=>{
    if(ev.key=="Enter"){
        checkWeather(city.value);
    }
})