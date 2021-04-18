import { configureStore, createStore } from '@reduxjs/toolkit';
import throttle from 'lodash.throttle';
import { loadState, saveState } from "../localStorage";
import reducer from '../reducers/comment';

const persistedState = loadState();

export const store = configureStore({
  reducer: {
    comments: reducer,
  },
  persistedState
});

store.subscribe(throttle(() => {
  saveState(store.getState().comments.comments_list);
}, 1000));