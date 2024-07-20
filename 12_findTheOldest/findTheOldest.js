const findTheOldest = function(array) {
  const death = new Date().getFullYear();
  array.map(person => person.yearOfDeath === undefined ? person.yearOfDeath = death : person.yearOfDeath);
  return array.sort((a, b) => a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth ? -1 : 1)[0];
};

// Do not edit below this line
module.exports = findTheOldest;
