import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';

import AddTodo from './components/AddItem';
import TodoList from './components/TodoList';
import { TodoStoreProvider } from './modal/TodoStore';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TodoStoreProvider>
        <AddTodo />
        <TodoList />
      </TodoStoreProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight + 10,
  },
});
