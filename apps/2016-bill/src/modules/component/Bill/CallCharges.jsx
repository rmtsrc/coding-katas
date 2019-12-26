'use strict';

import React from 'react';
import { Table, Thead, Th } from 'reactable';

export default React.createClass({
  render() {
    return <div>
      <Table className="table table-striped table-hover" data={this.props.data.calls}>
        <Thead>
          <Th column="called">Called</Th>
          <Th column="duration">Duration</Th>
          <Th column="cost">Cost</Th>
        </Thead>
      </Table>
      <span><strong>Total:</strong> {this.props.data.total}</span>
    </div>;
  }
});
