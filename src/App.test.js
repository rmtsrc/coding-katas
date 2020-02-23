import React from 'react';
import { render, wait } from '@testing-library/react';

import mockSearchResults from '../__mocks__/user-search-response';

import App from './App';
import urlUtils from './utils/url';
import graphql from './client/graphql';
import userSearchQuery from './queries/github-user-search';

jest.mock('./utils/url');
jest.mock('./client/graphql');

test('renders the search form', () => {
  const { baseElement } = render(<App />);
  expect(baseElement).toMatchSnapshot();
});

test('displays loading when a username is given, but data is not loaded', () => {
  urlUtils.getUsername.mockReturnValue('JohnDoe');
  const { baseElement, getByText } = render(<App />);
  const loadingElement = getByText('Loading...');
  expect(loadingElement).toBeInTheDocument();

  expect(baseElement).toMatchSnapshot();
});

test('displays SearchResults component when username and data is returned', async () => {
  urlUtils.getUsername.mockReturnValue('gaearon');
  graphql.request.mockResolvedValue(mockSearchResults);

  const { getByText, asFragment } = render(<App />);

  await wait(() => expect(getByText('Search results (3)')).toBeInTheDocument());

  expect(graphql.request).toHaveBeenCalledWith(userSearchQuery, {
    username: 'gaearon'
  });

  expect(asFragment()).toMatchSnapshot();
});
