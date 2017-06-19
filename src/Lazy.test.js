const test = require('ava');
const Lazy = require('./Lazy');

let computation;

test.beforeEach(() => {
  computation = new Lazy();
});

const addOne = value => value + 1;

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

test('add processes more than one argument', t => {
  const sum4 = (value, no1, no2, no3) => value + no1 + no2 + no3;

  const actual = computation.add(sum4, 2, 3, 4).evaluate([1, 2]);

  t.deepEqual(actual, [10, 11]);
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

test('correct order of params', t => {
  const computation = new Lazy();
  const result = computation.add(a => a, 1).evaluate([1, 2, 3]);
  t.deepEqual(result, [1, 1, 1]);
});
