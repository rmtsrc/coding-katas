import React from 'react';
import renderer from 'react-test-renderer';
const { act } = renderer;

import TodoListItem from './TodoListItem';
import { TodoDispatch } from '../modal/TodoStore';

describe('<TodoListItem />', () => {
  const defaultProps = { id: '1', task: 'my task', checked: false };
  let wrapper = renderer.create(<TodoListItem {...defaultProps} />);
  let tree = wrapper.toJSON();

  test('renders correctly when not editing', () => {
    expect(tree).toMatchSnapshot();
  });

  test('renders correctly when editing', () => {
    act(() => {
      const { onPress } = wrapper.toTree().rendered.props;
      onPress();
    });

    const { value } = wrapper.root.findByType('TextInput').props;
    expect(value).toBe('my task');

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('dispatches correct action when the CheckBox is pressed', () => {
    const mockDispatch = jest.fn();

    wrapper = renderer.create(
      <TodoDispatch.Provider value={mockDispatch}>
        <TodoListItem {...defaultProps} />
      </TodoDispatch.Provider>
    );

    act(() => {
      const { onPress } = wrapper.root.findAllByProps({ checked: false })[1].props;
      onPress();
    });

    expect(mockDispatch).toHaveBeenCalledWith({ type: 'toggleDone', id: '1' });
  });

  test('dispatches correct action when the delete button is pressed', () => {
    const mockDispatch = jest.fn();

    wrapper = renderer.create(
      <TodoDispatch.Provider value={mockDispatch}>
        <TodoListItem {...defaultProps} />
      </TodoDispatch.Provider>
    );

    act(() => {
      const { onPress } = wrapper.root.findByProps({ name: 'delete' }).props;
      onPress();
    });

    expect(mockDispatch).toHaveBeenCalledWith({ type: 'remove', id: '1' });
  });

  test('dispatches correct action when enter is pressed while editing', () => {
    const mockDispatch = jest.fn();

    wrapper = renderer.create(
      <TodoDispatch.Provider value={mockDispatch}>
        <TodoListItem {...defaultProps} />
      </TodoDispatch.Provider>
    );

    act(() => {
      const { onPress } = wrapper.toTree().rendered.props;
      onPress();
    });

    const { onChangeText } = wrapper.root.findByType('TextInput').props;
    act(() => {
      onChangeText('changed input value');
    });

    const { onSubmitEditing } = wrapper.root.findByType('TextInput').props;
    act(() => {
      onSubmitEditing();
    });

    expect(mockDispatch).toHaveBeenCalledWith({ type: 'edit', id: '1', task: 'changed input value' });
  });
});
