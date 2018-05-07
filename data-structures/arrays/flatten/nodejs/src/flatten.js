const flatten = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error(`Invalid Argument`)
  }

  var returnValue = [];

  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      returnValue = returnValue.concat(flatten(arr[i]));
    } else if (typeof arr[i] === 'number') {
      returnValue.push(arr[i]);
    } else {
      throw new Error("All elements in Array must be numbers or arrays.")
    }
  }

  return returnValue;
}

module.exports = flatten