import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import emojiSlice, { getEmoji } from './store/slices/emoji';

import styles from './styles.module.css';

const EmojiSelector = () => {
  const dispatch = useDispatch();
  const value = useSelector(getEmoji);
  const onChange = event => dispatch(emojiSlice.actions.set(event.target.value));

  return <input value={value} type="input" onChange={onChange} size="2" className={styles.big} />;
};

export default EmojiSelector;
