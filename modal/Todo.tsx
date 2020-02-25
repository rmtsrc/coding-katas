import React from 'react';

import { createContext, useState } from 'react';

type Task = { id: string; task: string; done: boolean };

type TodoList = Task[];

type TodoContext = {
  list: TodoList;
  add(task: string): void;
  remove(id: string): void;
  toggleDone(id: string): void;
};

export const TodoContext = createContext<Partial<TodoContext>>({});

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

export function TodoProvider({ children }) {
  const [list, setList] = useState(defaultTodoList);

  return (
    <TodoContext.Provider
      value={{
        list,
        add: task =>
          setList([
            ...list,
            {
              id: `${list.length + 1}`,
              task,
              done: false,
            },
          ]),
        remove: id => setList(list.filter(item => item.id !== id)),
        toggleDone: id => {
          const index = list.findIndex(item => item.id === id);
          const item = list[index];
          setList([
            ...list.slice(0, index),
            { ...item, done: !item.done },
            ...list.slice(index + 1),
          ]);
        },
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
