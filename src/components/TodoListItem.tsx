import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { ListItem, CheckBox, Input } from 'react-native-elements';
import { TodoDispatch } from '../modal/TodoStore';

export default function TodoListItem({ id, task, checked }) {
  const [editing, setEditing] = useState({ isEditing: false, text: task });

  return (
    <TodoDispatch.Consumer>
      {dispatch =>
        editing.isEditing ? (
          <View style={styles.editingInput}>
            <Input
              value={editing.text}
              onChangeText={text => setEditing({ ...editing, text })}
              onSubmitEditing={() => {
                setEditing({ ...editing, isEditing: false });
                if (editing.text !== '') {
                  dispatch({ type: 'edit', id, task: editing.text });
                }
              }}
            />
          </View>
        ) : (
          <ListItem
            leftElement={<CheckBox checked={checked} onPress={() => dispatch({ type: 'toggleDone', id })} />}
            title={task}
            titleStyle={checked && styles.checkedText}
            onPress={() => setEditing({ isEditing: true, text: task })}
            rightIcon={{ name: 'delete', onPress: () => dispatch({ type: 'remove', id }) }}
            bottomDivider
            pad={0}
          />
        )
      }
    </TodoDispatch.Consumer>
  );
}

const styles = StyleSheet.create({
  checkedText: {
    fontStyle: 'italic',
    textDecorationLine: 'line-through',
  },
  editingInput: {
    padding: 20,
    paddingLeft: 50,
  },
});
