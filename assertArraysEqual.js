const eqArrays = function (a1, b2) {
  for (let i = 0; i < a1.length; i++) {
    if (a1[i] != b2[i]) {
      return false
    }
  }
  return true;
};
const assertArraysEqual = function (a1,b2) {
  const isEqual = eqArrays ( a1, b2)
  if(isEqual){
    console.log('AssertionPassed'+a1+"==="+b2)
  }else{
    console.log('AssertionFailed'+a1+"!=="+b2)

  }
} 
module.exports = assertArraysEqual