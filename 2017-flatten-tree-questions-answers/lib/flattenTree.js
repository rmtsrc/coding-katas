/**
 * Takes a questionset and user answers to find out what questions
 * they saw based on their answers while filling out the questionnaire
 * @param  {[Array]}  questionset [A list of questions, triggers and subquestions]
 * @param  {[Object]} answers     [An object of user answers]
 * @param  {Array}    [tree=[]]   [Recursion: Tree state]
 * @param  {String}   [initId=''] [Recursion: Nested question ID]
 * @return {[Array]}              [A list of questions the user saw]
 */
const flattenTree = (questionset, answers, tree = [], initId = '') => {
  questionset.map(item => {
    const { id, type, question, groups } = item;
    const nestedId = initId ? `${initId}-${id}` : id;

    tree.push({
      id: nestedId,
      type: type === 'integer' ? 'number' : type,
      text: question,
    });

    if (groups)
      return groups.map(subItem => {
        const subItemId = `${nestedId}-${subItem.trigger}`;

        if (answers[nestedId] === subItem.trigger)
          return flattenTree(subItem.questions, answers, tree, subItemId);
      });
  });

  return tree;
};

module.exports = flattenTree;
