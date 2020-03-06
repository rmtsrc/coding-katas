import React from 'react';

import logo from './logo192.png';
import STYLES from './Header.scss';

const getClassName = className => STYLES[className] || 'UNKNOWN';

const Header = () => (
  <header className={getClassName('Header')}>
    <a href="/">
      <span className={getClassName('Header__hidden-text')}>
        Flight Itineraries
      </span>
      <img
        className={getClassName('Header__logo-image')}
        alt="Flight Itineraries"
        src={logo}
      />
    </a>
  </header>
);

export default Header;
