const assertEqual = function(pizza,iceCream) {
  if (pizza === iceCream) {
    console.log(`assertion Passed  ${pizza} === ${iceCream}`);

  } else {
    console.log(`Assertion failed  ${pizza}  !==  ${iceCream}`);

  }
};


const findkeyByValue = function(lhl,value) {
  for(const key in lhl) {
  if(lhl[key]=== value) {
    return key;
  }
  }
  
  
}