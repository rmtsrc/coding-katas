import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'mobx-react';
import App from './App';

const renderWithProviderStore = (ui, store) => render(<Provider {...store}>{ui}</Provider>);

describe('App', () => {
  let mockStore;
  beforeEach(() => {
    mockStore = {
      transactions: [],
      users: {},
      retailers: {},
      getTransactions: jest.fn(),
    };
  });

  test('renders loading screen', () => {
    const { container } = renderWithProviderStore(<App />, { bankStore: mockStore });
    expect(mockStore.getTransactions).toHaveBeenCalledTimes(1);
    expect(container).toMatchSnapshot();
  });

  test('renders with transaction data with other data loading', () => {
    const bankStore = { ...mockStore, transactions: [{ id: 1, amount: '1', currency: 'USD' }] };

    const { container } = renderWithProviderStore(<App />, { bankStore });
    expect(container).toMatchSnapshot();
  });

  test('renders with transaction & user data, with retailer data loading', () => {
    const bankStore = {
      ...mockStore,
      transactions: [{ id: 1, amount: '1', currency: 'USD', userId: 1 }],
      users: { '1': { name: 'Joe Bloggs' } },
    };

    const { container } = renderWithProviderStore(<App />, { bankStore });
    expect(container).toMatchSnapshot();
  });

  test('renders with transaction, user & retailer data', () => {
    const bankStore = {
      ...mockStore,
      transactions: [
        { id: 1, amount: '1', currency: 'USD', userId: 1, retailerId: 1 },
        { id: 2, amount: '2', currency: 'GBP', userId: 2, retailerId: 2 },
      ],
      users: {
        '1': { name: 'Joe Bloggs' },
        '2': { name: 'Customer 2' },
      },
      retailers: {
        '1': { name: 'Test Company', city: 'Test City' },
        '2': { name: 'Test Company2', city: 'Test City2' },
      },
    };

    const { container } = renderWithProviderStore(<App />, { bankStore });
    expect(container).toMatchSnapshot();
  });
});
