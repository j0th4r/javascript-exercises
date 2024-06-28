const removeFromArray = function(arr, ...remove) {
  let newArr = arr;
  //loop through each number in remove rest parameter
  for(let i = 0; i < remove.length; i++) {
    //loop through each number in the array
    for(let j = 0; j < arr.length; j++) {
      if(remove[i] === arr[j]) {
        arr.splice(j, 1);
        j--
      }
    }
    
  }

  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
