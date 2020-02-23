import React from 'react';
import { render } from '@testing-library/react';

import SearchResults from './results';

test('renders correctly filtering out any users without ids', () => {
  const { baseElement, getByText } = render(
    <SearchResults
      results={[
        {
          id: 'my-id',
          login: 'JohnDoe',
          name: 'John Doe',
          email: 'john.doe@example.com',
          avatarUrl: 'https://example.com/foo.png'
        },
        {
          login: 'Bad data',
          name: '',
          email: '',
          avatarUrl: ''
        },
        {
          id: 'another-user',
          login: 'AnotherJohnDoe',
          name: 'Another John Doe',
          email: 'another.john.doe@example.com',
          avatarUrl: 'https://example.com/foo.other.png'
        }
      ]}
    />
  );

  const searchResultsCountElement = getByText('Search results (2)');
  expect(searchResultsCountElement).toBeInTheDocument();

  expect(baseElement).toMatchSnapshot();
});
