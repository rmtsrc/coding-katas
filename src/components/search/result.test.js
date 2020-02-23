import React from 'react';
import { render } from '@testing-library/react';

import SearchResult from './result';

test('renders correctly', () => {
  const { baseElement } = render(
    <SearchResult
      id="my-id"
      login="JohnDoe"
      name="John Doe"
      email="john.doe@example.com"
      avatarUrl="https://example.com/foo.png"
    />
  );
  expect(baseElement).toMatchSnapshot();
});

test('shows user commit details are loading when clicked', async () => {
  const wrapper = render(
    <SearchResult
      id="my-id"
      login="JohnDoe"
      name="John Doe"
      email="john.doe@example.com"
      avatarUrl="https://example.com/foo.png"
    />
  );

  const button = await wrapper.findByRole('button');
  button.click();

  expect(wrapper.baseElement).toMatchSnapshot();
});
