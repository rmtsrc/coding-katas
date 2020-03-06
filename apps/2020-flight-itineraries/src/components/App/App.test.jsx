import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import { act } from 'react-test-renderer';
import { waitForElementToBeRemoved } from '@testing-library/dom';

import App from './App';

describe('App', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(
      () =>
        new Promise(resolve =>
          resolve({
            ok: true,
            json() {
              return { itineraries: [], legs: [] };
            },
          }),
        ),
    );
  });

  it('should render without crashing', async () => {
    const div = document.createElement('div');

    ReactDOM.render(<App />, div);
  });

  it('should render correctly while loading', async () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  it('should render correctly with flight results', async () => {
    await act(async () => {
      const { getByText, container } = render(<App />);
      await waitForElementToBeRemoved(() =>
        getByText('Looking for flights...'),
      );

      expect(container).toMatchSnapshot();
    });

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('flights.json');
  });

  // @TODO investigate testing error conditions
  it.skip('should show an error if flights fail to load', async () => {
    global.fetch = jest.fn().mockImplementation(
      () =>
        new Promise(resolve =>
          resolve({
            ok: false,
            json() {
              return { error: {} };
            },
          }),
        ),
    );

    expect(async () => {
      await act(async () => {
        const { getByText } = render(<App />);
        await waitForElementToBeRemoved(() =>
          getByText('Looking for flights...'),
        );

        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(global.fetch).toHaveBeenCalledWith('flights.json');
      });
    }).toThrowError('There was a problem loading flights');
  });
});
