import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loadMessages } from '../action-creators/messages';
import { get } from 'lodash';

import { Message } from './message';

class Home extends React.Component {
  componentDidMount() {
    this.props.loadMessages();
  }

  renderMessages() {
    return this.props.messages.map((message, index) => (
      <dl key={index}>
        <Message
          timestamp={message.timestamp}
          email={get(this.props.members, [message.userId, 'email'], '')}
          avatar={get(this.props.members, [message.userId, 'avatar'], '')}
          message={message.message}
        />
      </dl>
    ));
  }

  render() {
    return (
      <Fragment>
        <h1>React Redux Message Viewer</h1>
        {this.renderMessages()}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  messages: state.messages.messages,
  members: state.messages.members,
});

const mapDispatchToProps = dispatch => bindActionCreators({ loadMessages }, dispatch);

Home.propTypes = {
  loadMessages: PropTypes.func.isRequired,
  messages: PropTypes.array.isRequired,
  members: PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
