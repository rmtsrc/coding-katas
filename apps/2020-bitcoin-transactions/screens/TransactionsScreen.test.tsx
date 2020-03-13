import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import TransactionsScreen from './TransactionsScreen';

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn().mockImplementation(() => ({
    addListener: jest.fn(),
  })),
}));

describe('TransactionsScreen', () => {
  const renderer = new ShallowRenderer();

  test('rendering a loading screen', () => {
    const tree = renderer.render(<TransactionsScreen />);
    expect(tree).toMatchSnapshot();
  });
});
