const palindromes = function (string) {
  const str = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g, "").toLowerCase()
  return str
          .split("")
          .reverse()
          .join("") === str ? true : false;
};
// Do not edit below this line
module.exports = palindromes;
