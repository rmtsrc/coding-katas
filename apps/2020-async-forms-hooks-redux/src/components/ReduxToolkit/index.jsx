import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import Counter from './counter';
import Buttons from './buttons';
import EmojiCounter from './emoji-counter';
import EmojiSelector from './emoji-selector';

import styles from './styles.module.css';

const ReduxToolkit = () => (
  <Provider store={store}>
    <h1>Redux Toolkit Counter Example</h1>
    <p>
      <Counter />
    </p>
    <p className={styles.big}>
      <EmojiCounter />
    </p>
    <Buttons />
    <EmojiSelector />
  </Provider>
);

export default ReduxToolkit;
