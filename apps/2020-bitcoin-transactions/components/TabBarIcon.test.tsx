import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import TabBarIcon from './TabBarIcon';


describe('TabBarIcon', () => {
  const renderer = new ShallowRenderer();

  test('rendering in focus', () => {
    const tree = renderer.render(<TabBarIcon name="access-point" focused />);
    expect(tree).toMatchSnapshot();
  });
  
  test('rendering out of focus', () => {
    const tree = renderer.render(<TabBarIcon name="access-point" focused={false} />);
    expect(tree).toMatchSnapshot();
  });
});
