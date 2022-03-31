import "dotenv/config";
import got from "got";

const apiKey = process.env.WEATHER_KEY;

export default class WeatherApi {
  fetchWeatherData(city, callback) {
    const place = city;
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${place}&appid=${apiKey}`;
    got(apiUrl).then((response) => {
      const weatherData = JSON.parse(response.body);
      callback(weatherData);
    });
  }
}

// const weather = new WeatherApi();
// weather.fetchWeatherData("New Delhi", (weatherData) => {
//   console.log(weatherData.main);
// });

// module.exports = WeatherApi;
