import * as React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { api } from '../constants/config';

export default function DepositScreen() {
  const [value, onChangeText] = React.useState('');
  const { navigate } = useNavigation();

  const onSubmit = async () => {
    if (value === '') return;

    await fetch(`${api.hostname}${api.transactions}`, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        currency: 'Bø',
        amount: value,
        counterparty: 'Bit Credit',
        category: 'Gifts',
      }),
    });

    onChangeText('');

    navigate('Transactions');
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.row, styles.title]}>Add Bitcoin</Text>
      <TextInput
        onChangeText={text => onChangeText(text)}
        onFocus={() => onChangeText('')}
        value={value}
        keyboardType="number-pad"
        style={[styles.row, styles.input]}
        onSubmitEditing={onSubmit}
      />
      <Button title="Add" onPress={onSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdfdfd',
    padding: 15,
    flexDirection: 'column',
    alignItems: 'center',
  },
  row: {
    margin: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: { height: 40, borderColor: 'gray', borderWidth: 1, width: 100 },
});
