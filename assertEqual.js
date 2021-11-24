const assertEqual = function(pizza,iceCream) {
  if (pizza === iceCream) {
    console.log("😅Assertion Passed:" + pizza + "===" + iceCream);

  } else {
    console.log("😄Assertion failed:" + pizza + "!==" + iceCream);

  }
};
assertEqual(1,1);