const removeFromArray = function(arr, remove) {
  let newArr = arr;
  for(i = 0; i < arr.length; i++) {
    if(arr[i] === remove) {
      newArr.splice(i, 1);
    }
  }

  return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
