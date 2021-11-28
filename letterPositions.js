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

const letterPositions = function(alphabetNumbering) {
  const results = {}; // the object to be populated and returned
  let corrected = alphabetNumbering.split(""); // separating and making into array
  corrected.forEach(function(letter){ // for each of the letters in the array, make a key of it
    results[letter] = [];
  });
  for(let i = 0; i < alphabetNumbering.length; i++) {
    results[alphabetNumbering[i]].push(i);
  }
  return results;
}
  

console.log(letterPositions("alphabet"));
  
  
  
  
