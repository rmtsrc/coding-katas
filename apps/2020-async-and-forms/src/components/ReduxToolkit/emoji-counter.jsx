import React from 'react';
import { useSelector } from 'react-redux';
import { getEmoji } from './store/slices/emoji';
import { getCount } from './store/slices/counter';

const EmojiCounter = () => {
  const emoji = useSelector(getEmoji);
  const count = useSelector(getCount);

  return <>{emoji.repeat(count)}</>;
};

export default EmojiCounter;
