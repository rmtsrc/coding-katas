import React from 'react';

import { useDispatch } from 'react-redux';
import counterSlice from './store/slices/counter';

import styles from './styles.module.css';

const Buttons = () => {
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(counterSlice.actions.decrement())} className={styles.big}>-</button>
      <button onClick={() => dispatch(counterSlice.actions.increment())} className={styles.big}>+</button>
    </>
  );
};

export default Buttons;
