const flattenTree = (questionset, answers, tree = []) => {
  questionset.map(item => {
    const { type, question, groups } = item;

    tree.push({
      type,
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
