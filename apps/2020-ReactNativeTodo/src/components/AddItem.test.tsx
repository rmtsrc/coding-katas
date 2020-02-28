import React from 'react';
import renderer from 'react-test-renderer';
const { act } = renderer;

import AddItem from './AddItem';
import { TodoDispatch } from '../modal/TodoStore';

describe('<AddItem />', () => {
  let wrapper = renderer.create(<AddItem />);
  let tree = wrapper.toJSON();

  test('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });

  test('has 1 child', () => {
    expect(tree.children.length).toBe(1);
  });

  test('text input updates', () => {
    const { onChangeText } = wrapper.toTree().rendered.props;

    act(() => {
      onChangeText('hello');
    });

    const wrappedTextInput = wrapper.root.findByType('TextInput');
    expect(wrappedTextInput.props.value).toBe('hello');
  });

  test('onSubmitEditing dispatches correctly', () => {
    const mockDispatch = jest.fn();

    let wrapper = renderer.create(
      <TodoDispatch.Provider value={mockDispatch}>
        <AddItem />
      </TodoDispatch.Provider>
    );

    const { onChangeText } = wrapper.toTree().rendered.props;
    act(() => onChangeText('hello'));

    act(() => {
      const { onSubmitEditing } = wrapper.root.findByType('TextInput').props;
      onSubmitEditing();
    });

    expect(mockDispatch).toHaveBeenCalledWith({ type: 'add', task: 'hello' });

    const { value } = wrapper.root.findByType('TextInput').props;
    expect(value).toBe('');
  });
});
