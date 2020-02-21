import gql from 'graphql-tag';

const githubUserSearchQuery = gql`
  query GithubUserSearch($username: String!) {
    search(type: USER, query: $username, last: 30) {
      nodes {
        ... on User {
          id
          login
          name
          email
          avatarUrl
        }
      }
    }
  }
`;

export default githubUserSearchQuery.loc.source.body;
