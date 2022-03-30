const Thermostat = require("./thermostat");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

thermostat = new Thermostat();

const userPrompt = () => {
  rl.question(
    "What do you want to do to the temperature? (toggle psm/up/down)",
    (answer) => {
      if (answer === "toggle psm") {
        thermostat.setPowerSavingMode();
        console.log(`You toggled power saving mode!`);
      } else if (answer === "up") {
        thermostat.up();
        console.log(`The temperature is now ${thermostat.getTemperature()}!`);
      } else if (answer === "down") {
        thermostat.down();
        console.log(`The temperature is now ${thermostat.getTemperature()}!`);
      } else {
        console.log(
          "Please enter either up or down to adjust the temperature!"
        );
      }
    }
  );
};

setInterval(userPrompt, 4000);
