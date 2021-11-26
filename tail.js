const assertEqual = function(pizza,iceCream) {
  if (pizza === iceCream) {
    console.log(`assertion Passed  ${pizza} === ${iceCream}`);

  } else {
    console.log(`Assertion failed  ${pizza}  !==  ${iceCream}`);

  }
};
const tail = function(array) {
  array.shift();
  return array; 

  //[1,2,3,4]
  //head function would print 1
  //tail function would print [2,3,4]
};
const fruits = ['apples','oranges','grapes'];
console.log(tail(fruits));
console.log(fruits);


