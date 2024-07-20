const findTheOldest = function(array) {
  const date = new Date();
  const year = date.getFullYear();
  array.map(person => person.yearOfDeath === undefined ? person.yearOfDeath = year : person.yearOfDeath);
  return array.sort((a, b) => a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth ? -1 : 1)[0];
};

// Do not edit below this line
module.exports = findTheOldest;
