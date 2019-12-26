'use strict';

import React from 'react';
import NavLink from './NavLink';

export default React.createClass({
  render () {
    return <header>
      <div className="navbar navbar-inverse">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-inverse-collapse">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <NavLink className="navbar-brand" to="/">Brand</NavLink>
        </div>
        <div className="navbar-collapse collapse navbar-inverse-collapse">
          <ul className="nav navbar-nav">
            <li>
              <NavLink to="/">Bill</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>;
  }
});
