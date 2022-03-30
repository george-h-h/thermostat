import "dotenv/config";
import express from "express";
import got from "got";
const apiKey = process.env.WEATHER_KEY;

class WeatherApi {
  constructor() {
    const city = "London";
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
    let weatherData = null;
  }
}

let weatherData = null;

got(apiUrl).then((response) => {
  weatherData = JSON.parse(response.body);
  console.log(weatherData);
  console.log(weatherData.main.temp);
  console.log(weatherData.visibility);
  console.log(weatherData.weather[0].main);
});
