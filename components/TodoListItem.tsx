import React from 'react';
import { StyleSheet } from 'react-native';
import { ListItem, CheckBox } from 'react-native-elements';
import { TodoDispatch } from '../modal/TodoStore';

export default function TodoListItem({ id, task, checked }) {
  return (
    <TodoDispatch.Consumer>
      {dispatch => (
        <ListItem
          leftElement={<CheckBox checked={checked} onPress={() => dispatch({ type: 'toggleDone', id })} />}
          title={task}
          titleStyle={checked && styles.checkedText}
          onPress={() => dispatch({ type: 'toggleDone', id })}
          rightIcon={{ name: 'delete', onPress: () => dispatch({ type: 'remove', id }) }}
          bottomDivider
          pad={0}
        />
      )}
    </TodoDispatch.Consumer>
  );
}

const styles = StyleSheet.create({
  checkedText: {
    fontStyle: 'italic',
    textDecorationLine: 'line-through',
  },
});
