import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import TransactionsScreen from '../screens/TransactionsScreen';
import DepositScreen from '../screens/DepositScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Transactions';

export default function BottomTabNavigator({ navigation, route }) {
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Transactions"
        component={TransactionsScreen}
        options={{
          title: 'Transactions',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="bank-transfer" />,
        }}
      />
      <BottomTab.Screen
        name="Deposit"
        component={DepositScreen}
        options={{
          title: 'Add Bitcoin',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="bank-transfer-in" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Transactions':
      return 'Bitcoin Transactions';
    case 'Deposit':
      return 'Add Bitcoin';
  }
}
