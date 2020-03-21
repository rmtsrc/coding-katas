import { configureStore } from '@reduxjs/toolkit';

import counterSlice from './slices/counter';
import emojiSlice from './slices/emoji';

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    emoji: emojiSlice.reducer,
  },
});

export default store;
