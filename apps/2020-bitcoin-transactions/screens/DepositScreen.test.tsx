import * as React from 'react';
import renderer from 'react-test-renderer';

import DepositScreen from './DepositScreen';

const { act } = renderer;

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn().mockImplementation(() => ({
    navigate: jest.fn(),
  })),
}));

describe('DepositScreen', () => {
  beforeEach(() => {
      global.fetch = jest.fn().mockImplementation(
        () =>
          new Promise(resolve =>
            resolve({
              ok: true,
              json() {
                return { itineraries: [], legs: [] };
              },
            })
          )
      );
  });

  test('rendering', () => {
    const tree = renderer.create(<DepositScreen />);
    expect(tree).toMatchSnapshot();
  });

  test('adding credit', async () => {
    const wrapper = renderer.create(<DepositScreen />);

    act(() => {
      const { onChangeText } = wrapper.root.findByType('TextInput').props;
      onChangeText('1.23');
    });

    await act(async () => {
      const { onSubmitEditing } = wrapper.root.findByType('TextInput').props;
      await onSubmitEditing();
    });

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('http://localhost:8080/transactions', {
      body: '{"currency":"Bø","amount":"1.23","counterparty":"Bit Credit","category":"Gifts"}',
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      mode: 'no-cors',
    });
  });
});
