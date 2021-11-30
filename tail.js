const tail = function(array) {
  array.shift();
  return array; 

  //[1,2,3,4]
  //head function would print 1
  //tail function would print [2,3,4]
};
module.exports = tail 

