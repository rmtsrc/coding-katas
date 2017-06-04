const flattenTree = (questionset, answers, tree = []) => {
  questionset.map(item => {
    const { id, type, question, groups } = item;

    tree.push({
      id,
      type: type === 'integer' ? 'number' : type,
      text: question,
    });

    if (groups)
      return groups.map(subItem =>
        flattenTree(subItem.questions, answers, tree)
      );
  });

  return tree;
};

module.exports = flattenTree;
