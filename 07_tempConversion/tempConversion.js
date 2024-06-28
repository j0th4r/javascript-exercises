const convertToCelsius = function(x) {
  const formula = (x - 32) * (5/9);
  const roundedResult = Math.round(formula * 10) / 10;

  return roundedResult;
};

const convertToFahrenheit = function(x) {
  const formula = x * (9/5) + 32;
  const roundedResult = Math.round(formula * 10) / 10;

  return roundedResult;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
