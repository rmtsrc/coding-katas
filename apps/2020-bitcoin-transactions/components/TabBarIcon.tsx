import * as React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../constants/colors';

export default function TabBarIcon({ name, focused }) {
  return (
    <MaterialCommunityIcons
      name={name}
      size={30}
      style={{ marginBottom: -3 }}
      color={focused ? colors.tabIconSelected : colors.tabIconDefault}
    />
  );
}
