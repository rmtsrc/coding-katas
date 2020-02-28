import React from 'react';
import renderer from 'react-test-renderer';

import App from './App';

describe('<App />', () => {
  const tree = renderer.create(<App />).toJSON();

  test('renders correctly without error', () => {
    expect(tree).toMatchSnapshot();
  });
});
