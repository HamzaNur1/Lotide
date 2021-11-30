const assertEqual = function(pizza,iceCream) {
  if (pizza === iceCream) {
    console.log(`assertion Passed  ${pizza} === ${iceCream}`);

  } else {
    console.log(`Assertion failed  ${pizza}  !==  ${iceCream}`);

  }
};
const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
  return 'No Key with this value'
}

<<<<<<< HEAD
module.exports = findKey;
=======

>>>>>>> 0deab8399b8571f8583f8fc5feb233e3c4ab0445
