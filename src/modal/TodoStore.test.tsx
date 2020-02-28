import { todoReducer } from './TodoStore';

describe('todoReducer', () => {
  test('handles the loaded action', () => {
    const result = todoReducer([], { type: 'loaded', list: ['my list'] });
    expect(result).toEqual(['my list']);
  });

  test('handles the add action', () => {
    const result = todoReducer([{}, {}], { type: 'add', task: 'my task' });
    expect(result).toEqual([
      {},
      {},
      {
        done: false,
        id: '3',
        task: 'my task',
      },
    ]);
  });

  test('handles the edit action', () => {
    const result = todoReducer([{ id: '1' }, { id: 'change-me' }], { type: 'edit', id: 'change-me', task: 'my task' });
    expect(result).toEqual([
      {
        id: '1',
      },
      {
        id: 'change-me',
        task: 'my task',
      },
    ]);
  });

  test('handles the remove action', () => {
    const result = todoReducer([{ id: 'keep-me' }, { id: 'delete-me' }], { type: 'remove', id: 'delete-me' });
    expect(result).toEqual([
      {
        id: 'keep-me',
      },
    ]);
  });

  test('handles the toggleDone action', () => {
    const result = todoReducer(
      [
        { id: 'keep-me', done: false },
        { id: 'toggle-me', done: true },
      ],
      { type: 'toggleDone', id: 'toggle-me' }
    );
    expect(result).toEqual([
      { id: 'keep-me', done: false },
      { id: 'toggle-me', done: false },
    ]);
  });

  test('throws an error for unknown actions', () => {
    expect(() => todoReducer([], { type: 'something-else' })).toThrowError('Unknown action type: something-else');
  });
});
