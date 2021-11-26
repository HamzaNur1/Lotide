const eqArrays = function (a1, b2) {for (let i = 0; i < a1.length; i++) {
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



const middle = function(array) {
  if(array.length === 1) { 
    return [];
  }
  else if (array.length === 2){
    return [];
  }
  if(array.length % 2 === 0) {
    let n = array.length / 2
  return  [array[n - 1], array[n]]
  }
  else if(array.length%2===1) {
    let n = (array.length - 1)/ 2
    return [array[n]];

  }
}


console.log(middle([1,2,3,4]));
console.log(middle([1,2]));
console.log(middle([1,2,3,4,5]));
console.log(middle([1]));


assertArraysEqual(middle([1,2,3,4]), [2,3]);
assertArraysEqual(middle([1,2]),[]);

assertArraysEqual(middle([1,2,3,4,5],),[3]);
assertArraysEqual(middle([1]),[]);