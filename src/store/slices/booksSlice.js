import { createSlice } from '@reduxjs/toolkit';

export const booksSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
     editBook: (state, action) => {
      const { index, details } = action.payload;
      state[index] = { ...state[index], ...details };
    },
    deleteBook: (state, action) => {
        state.splice(action.payload, 1);
      
    },
    issueBook: (state, action) => {
      const { index, memberId } = action.payload;
      if (state[index]) {
        state[index] = { ...state[index], issuedTo: memberId };
      }
    },
  },
  
});

export const { addBook, editBook, deleteBook, issueBook } = booksSlice.actions;
export default booksSlice.reducer;

