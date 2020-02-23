import React from 'react';
import { render } from '@testing-library/react';

import SearchForm from './form';

test('renders correctly', () => {
  const { baseElement } = render(<SearchForm search="for a user" />);
  expect(baseElement).toMatchSnapshot();
});
