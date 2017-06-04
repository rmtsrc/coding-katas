const flattenTree = (questionset, answers, tree = []) => {
  questionset.map(item => {
    const { type, question } = item;

    tree.push({
      type,
      text: question,
    });
  });

  return tree;
};

module.exports = flattenTree;
