const test = require('ava');
const Lazy = require('./Lazy');

let computation;

test.before(() => {
  computation = new Lazy();
});

test.only('adds 2 if the method is added twice', t => {
  const addOne = value => value + 1;

  const actual = computation.add(addOne).add(addOne).evaluate([1]);

  t.deepEqual(actual, [3]);
});

test('evaluate input against an added method', t => {
  const actual = computation.add(Math.sqrt).evaluate([1, 4, 9]);

  t.deepEqual(actual, [1, 2, 3]);
});

test('times by two and plus one', t => {
  const actual = computation
    .add(function timesTwo (a) {
      return a * 2;
    }) // simple function
    .add(function plus (a, b) {
      return a + b;
    }, 1) // a plus function that will be given 1 as its first argument
    .evaluate([1, 2, 3]);

  t.deepEqual(actual, [3, 5, 7]);
});
