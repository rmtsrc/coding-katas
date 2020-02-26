import React, { createContext, useReducer } from 'react';

type Task = { id: string; task: string; done: boolean };
type TodoList = Task[];
type TodoDispatch = (action: object) => void;

const defaultTodoList = [
  {
    id: '1',
    task: 'Foo',
    done: true,
  },
  {
    id: '2',
    task: 'Bar',
    done: false,
  },
];

const todoReducer = (list, action) => {
  switch (action.type) {
    case 'add':
      return [
        ...list,
        {
          id: `${list.length + 1}`,
          task: action.task,
          done: false,
        },
      ];

    case 'remove':
      return list.filter(item => item.id !== action.id);

    case 'toggleDone':
      const index = list.findIndex(item => item.id === action.id);
      const item = list[index];
      return [...list.slice(0, index), { ...item, done: !item.done }, ...list.slice(index + 1)];

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

export const TodoStore = createContext<TodoList>([]);
export const TodoDispatch = createContext<TodoDispatch>(() => {});

export function TodoStoreProvider({ children }) {
  const [list, dispatch] = useReducer(todoReducer, defaultTodoList);

  return (
    <TodoDispatch.Provider value={dispatch}>
      <TodoStore.Provider value={list}>{children}</TodoStore.Provider>
    </TodoDispatch.Provider>
  );
}
