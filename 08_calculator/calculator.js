const add = function(augend, addend) {
  return augend + addend;
};

const subtract = function(minuend, subtrahend) {
	return minuend - subtrahend;
};

const sum = function(array) {
  return array.reduce((sum, item) => {
    return sum + item;
  }, 0);
};


const multiply = function(array) {
  return array.reduce((total, current) => {
    return total * current;
  });
};

const power = function(base, exponent) {
	return base ** exponent;
};


const factorial = function(num) {
  if (num == 0 || num == 1) {
    return 1;
  }
  return num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
