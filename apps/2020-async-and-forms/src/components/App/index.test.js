import React from 'react';

import { render } from '@testing-library/react';

import App from '.';

describe('App', () => {
  test('default homepage', () => {
    const { baseElement, getByText } = render(<App />);

    const complexityText = getByText('Complexity');
    expect(complexityText).toBeInTheDocument();

    expect(baseElement).toMatchSnapshot();
  });

  test('complexity page', () => {
    global.window.history.pushState({}, '', '/complexity');

    const { baseElement } = render(<App />);
    expect(baseElement).toMatchSnapshot();
  });

  test('form page', () => {
    global.window.history.pushState({}, '', '/form');

    const { baseElement } = render(<App />);
    expect(baseElement).toMatchSnapshot();
  });
});
