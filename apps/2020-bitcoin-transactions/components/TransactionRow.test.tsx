import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import TransactionRow from './TransactionRow';

describe('TransactionRow', () => {
  const renderer = new ShallowRenderer();
  const defaultProps = {
    id: 123,
    amount: '1.23',
    counterparty: 'counterparty test',
    currency: 'currency test',
    isLastRow: false,
  };

  test('rendering', () => {
    const tree = renderer.render(<TransactionRow {...defaultProps} category="Bills" />);
    expect(tree).toMatchSnapshot();
  });

  test('rendering last row', () => {
    const tree = renderer.render(<TransactionRow {...defaultProps} category="Gifts" isLastRow />);
    expect(tree).toMatchSnapshot();
  });
});
