import React, { PureComponent } from 'react';

import graphql from './client/graphql';
import SearchForm from './components/search/form';
import SearchResults from './components/search/results';
import urlUtils from './utils/url';
import userSearchQuery from './queries/github-user-search';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { username: urlUtils.getUsername() };
  }

  async componentDidMount() {
    const { username } = this.state;
    if (username) {
      const variables = { username };

      this.setState({
        searchResults: await graphql.request(userSearchQuery, variables)
      });
    }
  }

  render() {
    const { username, searchResults } = this.state;
    return (
      <>
        <SearchForm search={username || 'e.g. JohnDoe'} />
        {username && (
          <>
            <hr />
            {searchResults ? (
              <SearchResults results={searchResults?.search?.nodes} />
            ) : (
              <p className="px-12 py-8 italic">Loading...</p>
            )}
          </>
        )}
      </>
    );
  }
}

export default App;
