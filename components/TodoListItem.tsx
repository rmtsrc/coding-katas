import React from 'react';
import { StyleSheet } from 'react-native';
import { ListItem, CheckBox } from 'react-native-elements';

export default function TodoListItem({
  id,
  task,
  checked,
  remove,
  toggleDone,
}) {
  return (
    <ListItem
      leftElement={
        <CheckBox checked={checked} onPress={() => toggleDone(id)} />
      }
      title={task}
      titleStyle={checked && styles.checkedText}
      onPress={() => toggleDone(id)}
      rightIcon={{ name: 'delete', onPress: () => remove(id) }}
      bottomDivider
      pad={0}
    />
  );
}

const styles = StyleSheet.create({
  checkedText: {
    fontStyle: 'italic',
    textDecorationLine: 'line-through',
  },
});
