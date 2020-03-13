import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView, FlatList } from 'react-native-gesture-handler';

import TransactionRow from '../components/TransactionRow';
import { Transaction } from '../types/Transaction';
import { api } from '../constants/config';
import { useNavigation } from '@react-navigation/native';

export default function TransactionsScreen() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const { addListener } = useNavigation();

  addListener('focus', () => {
    async function fetchData() {
      const response = await fetch(`${api.hostname}${api.transactions}`);
      if (!response.ok) {
        throw new Error('There was a problem loading your transactions');
      }
      setTransactions((await response.json()).data);
    }
    fetchData();
  });

  const balance = transactions.reduce(
    (prev, curr) => ({
      amount: `${(parseFloat(prev.amount) + parseFloat(curr.amount)).toFixed(2)}`,
      currency: curr.currency,
    }),
    { amount: '0', currency: '' }
  );

  return transactions.length ? (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceText}>
          Balance: {balance.amount} {balance.currency}
        </Text>
        <FlatList
          data={transactions}
          style={styles.transactions}
          renderItem={({ item, index }) => (
            <TransactionRow
              id={item.id}
              amount={item.amount}
              counterparty={item.counterparty}
              category={item.category}
              currency={item.currency}
              isLastRow={index + 1 === transactions.length}
            />
          )}
        />
      </View>
    </ScrollView>
  ) : (
    <View style={[styles.container, styles.balanceContainer]}>
      <Text style={styles.balanceText}>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  balanceContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  balanceText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  transactions: {
    width: '100%',
  },
});
