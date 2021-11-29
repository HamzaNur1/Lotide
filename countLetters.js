const assertEqual = function(pizza,iceCream) {
  if (pizza === iceCream) {
    console.log(`assertion Passed  ${pizza} === ${iceCream}`);

  } else {
    console.log(`Assertion failed  ${pizza}  !==  ${iceCream}`);

  }
};


const countLetters = function(letters) {
  let count = {};
  for (const elements of letters) {
    if (count[elements]) {
      count[elements] += 1;
    } else {
      if (elements !== " ") {
        count[elements] = 1;
      }
    }
  }
  return count;


};
