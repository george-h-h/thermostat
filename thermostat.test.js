// const Thermostat = require("./thermostat");
import Thermostat from "./thermostat"

describe("get temperature", () => {
  // const weatherDouble = {fetchWeatherData: () => 15 }

  const thermo = new Thermostat(weatherDouble);
  
  it("initiates with a default temperature of 20", () => {
    expect(thermo.getTemperature()).toEqual(20);
  });
  it("temperature is increased by one when up is called", () => {
    thermo.up();
    expect(thermo.getTemperature()).toEqual(21);
  });
  it("temperature is decreased by one when down is called", () => {
    thermo.down();
    thermo.down();
    expect(thermo.getTemperature()).toEqual(19);
  });
  it("has a minimum temperature of 10", () => {
    for (let i = 0; i < 20; i++) {
      thermo.down();
    }
    expect(thermo.getTemperature()).toEqual(10);
  });
  it("will not increase above 25 when PSM is on", () => {
    for (let i = 0; i < 40; i++) {
      thermo.up();
    }
    expect(thermo.getTemperature()).toEqual(25);
  });
  it("will not increase above 32 when PSM is off", () => {
    thermo.setPowerSavingMode();
    for (let i = 0; i < 10; i++) {
      thermo.up();
    }
    expect(thermo.getTemperature()).toEqual(32);
  });
  it("will reset the temperature to 20 when reset is called", () => {
    thermo.reset();
    expect(thermo.getTemperature()).toEqual(20);
  });
  it("return the energy usage level as a string when called", () => {
    expect(thermo.getEnergyUsage()).toEqual("medium-usage");
    for (let i = 0; i < 20; i++) {
      thermo.down();
    }
    expect(thermo.getEnergyUsage()).toEqual("low-usage");

    for (let i = 0; i < 20; i++) {
      thermo.up();
    }
    expect(thermo.getEnergyUsage()).toEqual("high-usage");
  });
  it("uses the weather API to set the temperature to London", () => {

  })
});
