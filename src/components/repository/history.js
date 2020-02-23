import React from 'react';
import PropTypes from 'prop-types';

const RepositoryHistory = ({ commitContributionsByRepository }) => {
  if (!commitContributionsByRepository.length) {
    return <p className="font-bold">No recent commits found</p>;
  }

  return (
    <>
      <h2 className="block font-bold text-l pb-2 py-4">Latest commits</h2>
      <ul>
        {commitContributionsByRepository.map(data => {
          const repo = data?.contributions?.nodes[0]?.repository;
          const commits = repo.ref.target.history.nodes;
          return (
            <li key={repo?.id}>
              <a
                href={repo?.url}
                className="underline font-bold"
                target="_blank"
                rel="noopener noreferrer"
              >
                {repo?.name}
              </a>
              <ol className="list-inside list-decimal">
                {commits.map(commit => (
                  <li key={commit.id} className="truncate">
                    <span title={commit.authoredDate}>{commit.message}</span>
                  </li>
                ))}
              </ol>
            </li>
          );
        })}
      </ul>
    </>
  );
};

RepositoryHistory.propTypes = {
  commitContributionsByRepository: PropTypes.arrayOf(PropTypes.object)
    .isRequired
};

export default RepositoryHistory;
