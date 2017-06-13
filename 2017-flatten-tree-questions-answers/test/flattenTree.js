const test = require('ava');
const flattenTree = require('../lib/flattenTree');

const falafelQuestionset = require('../examples/questionset-food.json');

test('type is converted correctly', t => {
  const questionset = [
    {
      type: 'integer',
    },
  ];
  const answers = {};

  const actual = flattenTree(questionset, answers);

  t.is(actual[0].type, 'number');
});

test('id is correctly generated', t => {
  const questionset = [
    {
      id: 'falafel',
    },
  ];
  const answers = {};

  const actual = flattenTree(questionset, answers);

  t.is(actual[0].id, 'falafel');
});

test('sub questions are shown and id is correctly generated for nested items', t => {
  const answers = {
    falafel: 'YES',
    'falafel-YES-halloumi': 'YES',
  };

  const actual = flattenTree(falafelQuestionset, answers);

  t.is(actual.length, 4);
  t.is(actual[2].id, 'falafel-YES-halloumi-YES-grilled');
  t.is(actual[3].id, 'burrito');
});

test('sub questions aren’t shown if they’ve not been selected', t => {
  let actual = flattenTree(falafelQuestionset, {});

  t.is(actual.length, 2);

  actual = flattenTree(falafelQuestionset, {
    falafel: 'YES',
  });

  t.is(actual.length, 3);
});

test('flattens correctly the provided examples', t => {
  const questionset = require('../examples/questionset.json');
  const answers = require('../examples/answers.json');
  const expectedOutput = require('../examples/expectedOutput.json');

  const actual = flattenTree(questionset, answers);

  t.deepEqual(actual, expectedOutput);
});
