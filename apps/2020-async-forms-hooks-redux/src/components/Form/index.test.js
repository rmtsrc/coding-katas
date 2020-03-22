import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Form from '.';

describe('Form', () => {
  test('rendering correctly', () => {
    const { baseElement } = render(<Form />);
    expect(baseElement).toMatchSnapshot();
  });

  test('submitting with errors', async () => {
    const { baseElement, getByText, findAllByText } = render(<Form />);
    fireEvent.click(getByText('Submit'));

    const errorText = await findAllByText('Needs to be more than 2 characters');
    expect(errorText.length).toBe(3);

    expect(baseElement).toMatchSnapshot();
  });

  test('submitting without errors', () => {
    const { baseElement, getByLabelText, getByText } = render(<Form />);

    fireEvent.change(getByLabelText('Email address *'), { target: { value: 'test@example.com' } });
    fireEvent.change(getByLabelText('First name *'), { target: { value: 'first' } });
    fireEvent.change(getByLabelText('Last name *'), { target: { value: 'last' } });
    fireEvent.click(getByText('Submit'));

    expect(baseElement).toMatchSnapshot();
  });

  test('clearing the form', () => {
    const { baseElement, getByLabelText, getByDisplayValue } = render(<Form />);

    fireEvent.change(getByLabelText('Email address *'), { target: { value: 'test@example.com' } });
    fireEvent.click(getByDisplayValue('Clear'));

    expect(baseElement).toMatchSnapshot();
  });
});
