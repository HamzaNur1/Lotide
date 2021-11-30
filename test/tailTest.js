const assertArraysEqual = require('../assertArraysEqual');
const tail = require('../tail');
const fruits = ['apples','oranges','grapes'];
const results = tail(fruits)
const expected = ['oranges','grapes']
assertArraysEqual (results,expected)
