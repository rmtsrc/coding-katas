import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './details.css';

import graphql from '../../client/graphql';
import RepositoryHistory from '../repository/history';
import userActivityQuery from '../../queries/github-user-activity';

// import mockActivity from '../../__mocks__/user-activity-response';

class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { userDetails: null };
  }

  async componentDidMount() {
    const { username, id: userId } = this.props;
    const variables = {
      username,
      userId
    };
    this.setState({
      userDetails: await graphql.request(userActivityQuery, variables)
    });
  }

  render() {
    const { userDetails } = this.state;
    if (!userDetails) {
      return <p className="italic">Loading...</p>;
    }

    const data = userDetails?.search?.nodes[0];
    const { url, contributionsCollection } = data;
    return (
      <>
        <dl>
          <dt>GitHub profile</dt>
          <dd>
            <a
              href={url}
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {url}
            </a>
          </dd>

          <dt>Total contributions</dt>
          <dd>
            {contributionsCollection?.contributionCalendar?.totalContributions}
          </dd>

          <dt>Total repositories contributed to</dt>
          <dd>
            {contributionsCollection?.totalRepositoriesWithContributedCommits}
          </dd>

          <dt>Total issues</dt>
          <dd>{contributionsCollection?.totalIssueContributions}</dd>

          <dt>Total pull requests</dt>
          <dd>{contributionsCollection?.totalPullRequestContributions}</dd>
        </dl>
        <RepositoryHistory
          commitContributionsByRepository={
            contributionsCollection.commitContributionsByRepository
          }
        />
      </>
    );
  }
}

UserDetails.propTypes = {
  id: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
};

export default UserDetails;
