import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

export class Message extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      display: props.message,
    };
  }

  render() {
    return (
      <Fragment>
        <dt>
          {this.props.avatar && (
            <img
              src={this.props.avatar}
              alt={`Avatar of ${this.props.email}`}
              loading="lazy"
              width="100"
              height="100"
            />
          )}
          <br />
          {new Date(this.props.timestamp).toLocaleString(undefined, { dateStyle: 'full', timeStyle: 'short' })}
        </dt>
        <dd
          onMouseEnter={() => this.setState({ display: this.props.email })}
          onMouseLeave={() => this.setState({ display: this.props.message })}
        >
          {this.state.display}
        </dd>
      </Fragment>
    );
  }
}

Message.propTypes = {
  timestamp: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  message: PropTypes.string.isRequired,
};
