const assertEqual = function(pizza,iceCream) {
  if (pizza === iceCream) {
    console.log(`assertion Passed  ${pizza} === ${iceCream}`);

  } else {
    console.log(`Assertion failed  ${pizza}  !==  ${iceCream}`);

  }
};

module.exports = assertEqual;