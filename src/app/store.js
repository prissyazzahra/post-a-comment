import { configureStore } from '@reduxjs/toolkit';
import reducer from '../reducers/comment';

export const store = configureStore({
  reducer: {
    comments: reducer,
  },
});
