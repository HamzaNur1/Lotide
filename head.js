const assertEqual = require('./assertEqual');
const head = function(array){
  return array[0]
}
//this is a empty function call
assertEqual()
//this is an empty function call
head()
//this calls assert equal function with head as first (piiza)as first parameter second as whatever you decide to put in there
assertEqual(head([0,1,2,3]),0)
assertEqual(head([0,1,2,3]),2)