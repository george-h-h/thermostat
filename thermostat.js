class Thermostat {
  constructor() {
    this.temperature = 20;
    this.powerSavingMode = true;
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

  setPowerSavingMode(boolean) {
    this.powerSavingMode = boolean;
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

module.exports = Thermostat;
