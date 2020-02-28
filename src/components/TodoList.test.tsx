import React from 'react';
import renderer from 'react-test-renderer';

import TodoList from './TodoList';
import { TodoStore } from '../modal/TodoStore';

describe('<TodoList />', () => {
  test('renders correctly when no data is given', () => {
    let wrapper = renderer.create(<TodoList />);
    expect(wrapper.toJSON()).toBeNull();
  });

  test('renders correctly when an empty todo list is given', () => {
    let wrapper = renderer.create(
      <TodoStore.Provider value={[]}>
        <TodoList />
      </TodoStore.Provider>
    );

    const {children} = wrapper.root.findByType('Text').props;
    expect(children).toBe('📋✅');

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('renders correctly when a valid todo list is given', () => {
    let wrapper = renderer.create(
      <TodoStore.Provider value={[{ id: '1', task: 'my task', done: false }]}>
        <TodoList />
      </TodoStore.Provider>
    );

    const { children } = wrapper.root.findByProps({ testID: 'listItemTitle' }).props;
    expect(children).toBe('my task');
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
