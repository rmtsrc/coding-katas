'use strict';

import React from 'react';

export default React.createClass({
  render() {
    return <dl className="dl-horizontal">
        <dt>Generated</dt>
        <dd>{this.props.data.generated}</dd>
        <dt>Due</dt>
        <dd>{this.props.data.due}</dd>
        <dt>Period</dt>
        <dd>{this.props.data.period.to} - {this.props.data.period.from}</dd>
        <dt>Total</dt>
        <dd>{this.props.total}</dd>
      </dl>;
  }
});
