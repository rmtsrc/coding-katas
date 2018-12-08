import React from 'react';

import App from './home';

it('renders correctly', () => {
  expect(<App />).toMatchSnapshot();
});
