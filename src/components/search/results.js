import React from 'react';
import PropTypes from 'prop-types';

import SearchResult from './result';

const SearchResults = ({ results }) => {
  const data = results.filter(result => result.id);
  return (
    <div className="w-full max-w-md px-12 py-8">
      <h2 className="text-xl block font-bold pb-2 py-4">
        Search results ({data.length})
      </h2>
      <ul>
        {data
          .filter(result => result.id)
          .map(({ id, login, name, email, avatarUrl }) => (
            <SearchResult
              key={id}
              id={id}
              login={login}
              name={name}
              email={email}
              avatarUrl={avatarUrl}
            />
          ))}
      </ul>
    </div>
  );
};

SearchResults.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      login: PropTypes.string,
      name: PropTypes.string,
      email: PropTypes.string,
      avatarUrl: PropTypes.string
    })
  ).isRequired
};

export default SearchResults;
