'use strict';

import React from 'react';
import Header from '../component/Header.jsx';
import Footer from '../component/Footer.jsx';

export default React.createClass({
  render() {
    return <div>
    <Header/>
    <section className="main-container">
      <div className="content">
        <h1>{process.env.DESCRIPTION}</h1>
        {this.props.children}
      </div>
    </section>
    <Footer/>
    </div>;
  }
});
