const takeUntil = function(array, callback) {

  let result = [];

  for (const item of array) {
    if (!callback(item)) {
      result.push(item);
    } else {
      return result;
    }
  }
  return result;
};
console.log
