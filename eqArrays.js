const eqArrays = function (a1, b2) {
  for (let i = 0; i < a1.length; i++) {
    if (a1[i] != b2[i]) {
      return false
    }
  }
  return true;
};

module.exports = eqArrays

