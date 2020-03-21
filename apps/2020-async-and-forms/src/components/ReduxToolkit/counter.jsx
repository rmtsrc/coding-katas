import React from 'react';

import { useSelector } from 'react-redux';
import { getCount } from './store/slices/counter';

const Counter = () => {
  const count = useSelector(getCount);

  return <>Counter: {count}</>;
};

export default Counter;
