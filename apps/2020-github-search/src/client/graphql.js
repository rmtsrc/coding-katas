import { GraphQLClient } from 'graphql-request';

const endpoint = 'https://api.github.com/graphql';

const client = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `bearer ${process.env.REACT_APP_GITHUB_TOKEN}`
  }
});

export default client;
