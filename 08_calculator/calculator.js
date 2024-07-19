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

const power = function() {
	
};

const factorial = function() {
	
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
