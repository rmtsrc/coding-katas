import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';
import { TodoContext } from '../modal/Todo';

export default function AddTodo() {
  const [inputText, setInputText] = useState();

  const addTodo = add => () => {
    add(inputText);
    setInputText('');
  };

  return (
    <TodoContext.Consumer>
      {context => (
        <Input
          leftIconContainerStyle={styles.leftIcon}
          leftIcon={{
            type: 'font-awesome',
            name: 'plus',
            onPress: addTodo(context.add),
          }}
          placeholder="What needs to be done?"
          value={inputText}
          onChangeText={text => setInputText(text)}
          onSubmitEditing={addTodo(context.add)}
        />
      )}
    </TodoContext.Consumer>
  );
}

const styles = StyleSheet.create({
  leftIcon: {
    paddingRight: 20,
  },
});
