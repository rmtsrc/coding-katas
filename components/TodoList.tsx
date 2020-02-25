import React from 'react';
import { FlatList, Text } from 'react-native';
import TodoListItem from './TodoListItem';
import { TodoContext } from '../modal/Todo';

export default function TodoList() {
  return (
    <TodoContext.Consumer>
      {context => (
        <FlatList
          data={context.list}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TodoListItem
              id={item.id}
              task={item.task}
              checked={item.done}
              remove={context.remove}
              toggleDone={context.toggleDone}
            />
          )}
          ListEmptyComponent={
            <Text style={{ fontSize: 110, textAlign: 'center', marginTop: 40 }}>
              📋✅
            </Text>
          }
        />
      )}
    </TodoContext.Consumer>
  );
}
