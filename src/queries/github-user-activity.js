import gql from 'graphql-tag';

const githubUserActivityQuery = gql`
  query Search($username: String!, $userId: ID!) {
    search(type: USER, query: $username, last: 1) {
      nodes {
        ... on User {
          id
          login
          name
          email
          avatarUrl
          url
          contributionsCollection {
            hasAnyContributions
            totalRepositoriesWithContributedCommits
            contributionCalendar {
              totalContributions
            }
            totalIssueContributions
            totalPullRequestContributions
            totalRepositoriesWithContributedIssues
            commitContributionsByRepository(maxRepositories: 5) {
              repository {
                name
              }
              contributions(
                first: 1
                orderBy: { field: OCCURRED_AT, direction: DESC }
              ) {
                totalCount
                nodes {
                  commitCount
                  repository {
                    id
                    name
                    url
                    ref(qualifiedName: "master") {
                      target {
                        ... on Commit {
                          history(author: { id: $userId }, first: 2) {
                            totalCount
                            nodes {
                              id
                              authoredDate
                              message
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default githubUserActivityQuery.loc.source.body;
