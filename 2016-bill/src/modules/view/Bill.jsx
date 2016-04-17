'use strict';

import React from 'react';
import Statement from '../component/Bill/Statement';
import Package from '../component/Bill/Package';
import CallCharges from '../component/Bill/CallCharges';
import VideoStore from '../component/Bill/VideoStore';

export default React.createClass({
  baseUri: 'http://localhost:3000',

  getInitialState() {
    return {
      bill: {
        statement: {
          generated: 'Loading...',
          due: '',
          period: {
            from: '',
            to: ''
          }
        },
        total: 0,
        package: {
          subscriptions: [],
          total: 0
        },
        callCharges: {
          calls: [],
          total: 0
        },
        videoStore: {
          rentals: [],
          buyAndKeep: [],
          total: 0
        }
      }
    };
  },

  componentDidMount() {
    this.serverRequest = $.get(this.baseUri + '/bill.json', bill => {
      this.setState({bill: bill});
    }).fail((error) => {
      throw new Error({message: 'There was an error loading data'});
    });
  },

  componentWillUnmount() {
    this.serverRequest.abort();
  },

  render() {
    return <div>
      <Statement data={this.state.bill.statement} total={this.state.bill.total}/>

      <h3>Packages</h3>
      <Package data={this.state.bill.package}/>

      <h3>Call Charges</h3>
      <CallCharges data={this.state.bill.callCharges}/>

      <h3>Store</h3>
      <VideoStore data={this.state.bill.videoStore}/>
    </div>;
  }
});
