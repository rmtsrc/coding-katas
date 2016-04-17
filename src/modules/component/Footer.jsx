'use strict';

import React from 'react';

export default React.createClass({
  render() {
    return <footer>
        <p>{process.env.DESCRIPTION} v{process.env.VERSION}</p>
      </footer>;
  }
});
