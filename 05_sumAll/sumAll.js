const sumAll = function(augend, addend) {
  let sum = 0;
  
  for(let i = 0; i < arguments.length; i++) {
    if(arguments[i] < 0 || typeof arguments[i] !== "number") {
      return "ERROR";
    }
  }

  if(augend > addend) [augend, addend] = [addend, augend];
  

  for(let i = augend; i <= addend; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
