import React, { Component } from 'react';
import PropTypes from 'prop-types';

import UserDetails from '../user/details';

class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = { shouldShowUserDetails: false };
  }

  toggleUserDetails = () => {
    const { shouldShowUserDetails } = this.state;
    this.setState({ shouldShowUserDetails: !shouldShowUserDetails });
  };

  render() {
    const { id, login, name, email, avatarUrl } = this.props;
    const { shouldShowUserDetails } = this.state;
    return (
      <li className="py-3">
        <button
          type="button"
          onClick={this.toggleUserDetails}
          className="text-left flex items-center m-2"
        >
          <img
            className="w-10 h-10 rounded-full mr-4"
            src={avatarUrl}
            alt={`Avatar of ${login}`}
          />
          <div>
            <p className="text-gray-900 leading-none underline">{login}</p>
            <p className="text-gray-600">
              {name}{' '}
              <span className="italic">
                <a href={`mailto:${email}`} className="hover:underline">
                  {email}
                </a>
              </span>
            </p>
          </div>
        </button>
        {shouldShowUserDetails && (
          <div className="border-t border-r border-b border-l border-gray-400 rounded-t rounded-b p-4">
            <UserDetails id={id} username={login} />
          </div>
        )}
      </li>
    );
  }
}

SearchResult.defaultProps = {
  name: '',
  email: ''
};

SearchResult.propTypes = {
  id: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  name: PropTypes.string,
  email: PropTypes.string,
  avatarUrl: PropTypes.string.isRequired
};

export default SearchResult;
