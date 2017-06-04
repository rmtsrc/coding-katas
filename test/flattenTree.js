const test = require('ava');
const flattenTree = require('../lib/flattenTree');

const questionset = require('../examples/questionset.json');
const answers = require('../examples/answers.json');
const expectedOutput = require('../examples/expectedOutput.json');

test('flattens correctly the provided examples', t => {
  const actual = flattenTree(questionset, answers);

  t.deepEqual(actual, expectedOutput);
});
