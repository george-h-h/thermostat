const Thermostat = require("./thermostat");

describe("get temperature", () => {
  const thermo = new Thermostat();
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
});
