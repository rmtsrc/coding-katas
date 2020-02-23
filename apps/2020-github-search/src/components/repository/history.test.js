import React from 'react';
import { render } from '@testing-library/react';

import RepositoryHistory from './history';

test('renders correctly when there is no history', () => {
  const { baseElement } = render(
    <RepositoryHistory commitContributionsByRepository={[]} />
  );
  expect(baseElement).toMatchSnapshot();
});

test('renders history correctly', () => {
  const { baseElement } = render(
    <RepositoryHistory
      commitContributionsByRepository={[
        {
          contributions: {
            nodes: [
              {
                repository: {
                  id: 'my-repo',
                  url: 'https://example.com',
                  name: 'My Repo',
                  ref: {
                    target: {
                      history: {
                        nodes: [
                          {
                            id: 'commit1',
                            authoredDate: '01/01/2020',
                            message: 'A commit message'
                          },
                          {
                            id: 'commit2',
                            authoredDate: '02/01/2020',
                            message: 'A second commit message'
                          }
                        ]
                      }
                    }
                  }
                }
              }
            ]
          }
        }
      ]}
    />
  );

  expect(baseElement).toMatchSnapshot();
});
