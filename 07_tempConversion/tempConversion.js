const convertToCelsius = function(x) {
  const result = (x - 32) * (5/9);
  const rounded = Math.round(result * 10) / 10;

  return rounded;
};

const convertToFahrenheit = function() {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
