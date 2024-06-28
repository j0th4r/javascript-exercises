const reverseString = function(string) {
  const char = string.split("");
  let result = ""
  for(i = string.length - 1; i >= 0; i--) {
    result += char[i];
  }
  return result;
};

// Do not edit below this line
module.exports = reverseString;
