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
