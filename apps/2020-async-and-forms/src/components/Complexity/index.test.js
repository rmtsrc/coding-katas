import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, fireEvent } from '@testing-library/react';

import Complexity from '.';

describe('Complexity', () => {
  test('rendering correctly', () => {
    const { baseElement } = render(<Complexity />);
    expect(baseElement).toMatchSnapshot();
  });

  test('open modal', () => {
    const { baseElement, getByText } = render(<Complexity />);
    fireEvent.click(getByText('Compute'));
    expect(baseElement).toMatchSnapshot();
  });

  test('enter text and submit', async () => {
    const { baseElement, getByText, getByLabelText } = render(<Complexity />);
    fireEvent.click(getByText('Compute'));
    fireEvent.change(getByLabelText('Complexity'), { target: { value: '1' } })

    await act(async () => {
      await fireEvent.click(getByText('Apply'));
    });

    expect(baseElement).toMatchSnapshot();
  });
});
