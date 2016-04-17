'use strict';

import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Layout from './view/Layout.jsx';
import Bill from './view/Bill.jsx';

// declare our routes and their hierarchy
export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={Bill}/>
  </Route>
);
