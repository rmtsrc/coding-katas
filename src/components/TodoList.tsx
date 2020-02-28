import React from 'react';
import { FlatList, Text } from 'react-native';
import TodoListItem from './TodoListItem';
import { TodoStore } from '../modal/TodoStore';

export default function TodoList() {
  return (
    <TodoStore.Consumer>
      {list =>
        list !== null && (
          <FlatList
            data={list}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <TodoListItem id={item.id} task={item.task} checked={item.done} />}
            ListEmptyComponent={<Text style={{ fontSize: 110, textAlign: 'center', marginTop: 40 }}>📋✅</Text>}
          />
        )
      }
    </TodoStore.Consumer>
  );
}
