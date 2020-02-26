import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';
import { TodoDispatch } from '../modal/TodoStore';

export default function AddTodo() {
  const [inputText, setInputText] = useState();

  const addTodo = dispatch => () => {
    if (inputText !== '') {
      dispatch({ type: 'add', task: inputText });
      setInputText('');
    }
  };

  return (
    <TodoDispatch.Consumer>
      {dispatch => (
        <Input
          leftIconContainerStyle={styles.leftIcon}
          leftIcon={{
            type: 'font-awesome',
            name: 'plus',
            onPress: addTodo(dispatch),
          }}
          placeholder="What needs to be done?"
          value={inputText}
          onChangeText={text => setInputText(text)}
          onSubmitEditing={addTodo(dispatch)}
        />
      )}
    </TodoDispatch.Consumer>
  );
}

const styles = StyleSheet.create({
  leftIcon: {
    paddingRight: 20,
  },
});
