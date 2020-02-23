import React from 'react';
import { render, wait } from '@testing-library/react';

import graphql from '../../client/graphql';
import userActivityQuery from '../../queries/github-user-activity';
import mockUserDetails from '../../../__mocks__/user-activity-response';

import UserDetails from './details';

jest.mock('../../client/graphql');

test('renders a loading message when details are loading', () => {
  const { baseElement, getByText } = render(
    <UserDetails id="user-id" username="test-username" />
  );

  const loadingElement = getByText('Loading...');
  expect(loadingElement).toBeInTheDocument();

  expect(baseElement).toMatchSnapshot();
});

test('renders correctly with user commit history details', async () => {
  graphql.request.mockResolvedValue(mockUserDetails);

  const { baseElement, getByText } = render(
    <UserDetails id="MDQ6VXNlcjgxMDQzOA==" username="gaearon" />
  );

  await wait(() =>
    expect(getByText('Total contributions')).toBeInTheDocument()
  );

  expect(graphql.request).toHaveBeenCalledWith(userActivityQuery, {
    userId: 'MDQ6VXNlcjgxMDQzOA==',
    username: 'gaearon'
  });

  expect(baseElement).toMatchSnapshot();
});
