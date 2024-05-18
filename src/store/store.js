import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './slices/booksSlice.js';
import membersReducer from './slices/membersSlice.js';

export const store = configureStore({
  reducer: {
    books: booksReducer,
    members: membersReducer,
  },
});

