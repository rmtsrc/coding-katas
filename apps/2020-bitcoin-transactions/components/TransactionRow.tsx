import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Transaction } from '../types/Transaction';
import colors from '../constants/colors';

const categoryIconMap = {
  default: 'file-document-outline',
  'Eating Out': 'food-fork-drink',
  Entertainment: 'movie',
  Gifts: 'gift',
  Groceries: 'cart',
  Subscriptions: 'file-document-box-multiple-outline',
};

export default function TransactionRow({
  id,
  amount,
  counterparty,
  category,
  currency,
  isLastRow,
}: Transaction & { isLastRow: boolean }) {
  return (
    <View
      style={[styles.container, { backgroundColor: colors.rows[id % colors.rows.length] }, isLastRow && styles.lastRow]}
    >
      <Text style={styles.description}>
        <MaterialCommunityIcons
          name={categoryIconMap[category] || categoryIconMap.default}
          title={category}
          size={30}
          style={styles.icon}
        />
        {counterparty}
      </Text>
      <Text>
        {amount} {currency}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  description: { marginTop: -7 },
  lastRow: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  icon: { marginRight: 10 },
});
