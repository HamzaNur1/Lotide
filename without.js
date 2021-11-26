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
const without = (source,itemsToRemove) => {

  let newArray = []
  for (let i = 0; i < source.length; i++){
    if(!itemsToRemove.includes(source[i])){
      newArray.push(source[i])
    }
  }
  return newArray
}
console.log(without([1,2,3],[1]))

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);


  