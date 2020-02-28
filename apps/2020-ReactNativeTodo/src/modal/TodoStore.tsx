import React, { createContext, useReducer, useEffect } from 'react';
import { AsyncStorage } from 'react-native';

type Task = { id: string; task: string; done: boolean };
type TodoList = Task[];
type TodoDispatch = (action: object) => void;

const defaultTodoList = [
  {
    id: '1',
    task: 'Example completed task',
    done: true,
  },
  {
    id: '2',
    task: 'Example todo',
    done: false,
  },
];

export const todoReducer = (list, action) => {
  let newList;
  switch (action.type) {
    case 'loaded': {
      newList = action.list === null ? [...defaultTodoList] : [...action.list];
      break;
    }
    case 'add': {
      newList = [
        ...list,
        {
          id: `${list.length + 1}`,
          task: action.task,
          done: false,
        },
      ];
      break;
    }
    case 'edit': {
      const index = list.findIndex(item => item.id === action.id);
      const item = list[index];
      newList = [...list.slice(0, index), { ...item, task: action.task }, ...list.slice(index + 1)];
      break;
    }
    case 'remove': {
      newList = list.filter(item => item.id !== action.id);
      break;
    }
    case 'toggleDone': {
      const index = list.findIndex(item => item.id === action.id);
      const item = list[index];
      newList = [...list.slice(0, index), { ...item, done: !item.done }, ...list.slice(index + 1)];
      break;
    }
    default: {
      throw new Error(`Unknown action type: ${action.type}`);
    }
  }

  async function persistData() {
    await AsyncStorage.setItem('todo-list', JSON.stringify(newList));
  }
  persistData();

  return newList;
};

export const TodoStore = createContext<TodoList>(null);
export const TodoDispatch = createContext<TodoDispatch>(() => {});

export function TodoStoreProvider({ children }) {
  const [list, dispatch] = useReducer(todoReducer, null);

  useEffect(() => {
    async function fetchData() {
      const list = await AsyncStorage.getItem('todo-list');
      dispatch({ type: 'loaded', list: JSON.parse(list) });
    }
    fetchData();
  }, []);

  return (
    <TodoDispatch.Provider value={dispatch}>
      <TodoStore.Provider value={list}>{children}</TodoStore.Provider>
    </TodoDispatch.Provider>
  );
}
