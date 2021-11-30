const tail = require('../tail');
var assert = require('assert');
describe('Array', function() {
  describe('tail()',function() {
    it('should return [orange ,grapes] for [apples,oranges and grapes]', function() {
      let fruits = ['apples','oranges','grapes'];
      let results = tail(fruits)
      let expected = ['oranges','grapes'] 
      assert.deepEqual (results, expected);
    });
    it('should return [orange ,grapes] for [apples,oranges and grapes]', function() {
      let animals = ['lions','tiger','snake'];
      let results = tail(animals)
      let expected = ['tiger','snake'] 
      assert.deepEqual (results, expected);
    });
  });
});
