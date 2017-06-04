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
      return groups.map(subItem =>
        flattenTree(
          subItem.questions,
          answers,
          tree,
          `${nestedId}-${subItem.trigger}`
        )
      );
  });

  return tree;
};

module.exports = flattenTree;
