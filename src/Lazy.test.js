const test = require('ava');
const Lazy = require('./Lazy');

let computation;
const addOne = value => value + 1;

test.beforeEach(() => {
  computation = new Lazy();
});

test('adds 2 if the method is added twice', t => {
  const actual = computation.add(addOne).add(addOne).evaluate([1]);

  t.deepEqual(actual, [3]);
});

test('adds 2 if the method is added twice to both values', t => {
  const actual = computation.add(addOne).add(addOne).evaluate([1, 2]);

  t.deepEqual(actual, [3, 4]);
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
