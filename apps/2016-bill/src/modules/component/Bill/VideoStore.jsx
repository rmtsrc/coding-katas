'use strict';

import React from 'react';
import { Table, Thead, Th } from 'reactable';

export default React.createClass({
  render() {
    return <div>
      <h4>Rentals</h4>
      <Table className="table table-striped table-hover" data={this.props.data.rentals}>
        <Thead>
          <Th column="title">Title</Th>
          <Th column="cost">Cost</Th>
        </Thead>
      </Table>

      <h4>Buy and Keep</h4>
      <Table className="table table-striped table-hover" data={this.props.data.buyAndKeep}>
        <Thead>
          <Th column="title">Title</Th>
          <Th column="cost">Cost</Th>
        </Thead>
      </Table>

      <span><strong>Total:</strong> {this.props.data.total}</span>
    </div>;
  }
});
