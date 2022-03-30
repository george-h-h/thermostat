import WeatherApi from "./weather.js";

class Thermostat {
  constructor(weather) {
    this.weather = weather;
    this.temperature = 20;
    this.powerSavingMode = true;
  }

  setCity(city) {
    this.weather.fetchWeatherData(city, (weatherData) => {
      console.log(weatherData.main);
      this.temperature = weatherData.main.temp.round;
    });
  }

  getTemperature() {
    return this.temperature;
  }

  up() {
    let maxTemp = 32;
    if (this.powerSavingMode) {
      maxTemp = 25;
    }
    if (this.temperature >= maxTemp) {
      return;
    }

    this.temperature += 1;
  }

  down() {
    if (this.temperature <= 10) {
      return;
    }
    this.temperature -= 1;
  }

  setPowerSavingMode() {
    this.powerSavingMode = !this.powerSavingMode;
  }

  reset() {
    this.temperature = 20;
  }

  getEnergyUsage() {
    if (this.temperature < 18) {
      return "low-usage";
    } else if (this.temperature <= 25) {
      return "medium-usage";
    } else {
      return "high-usage";
    }
  }
}

const weather = new WeatherApi();
const thermo = new Thermostat(weather);

thermo.setCity("London");
console.log(thermo.getTemperature());

// module.exports = Thermostat;
