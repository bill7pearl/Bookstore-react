import { createReducer } from '@reduxjs/toolkit';

const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const booksReducer = createReducer([], {
  [ADD_BOOK]: (state, action) => {
    state.push(action.payload);
  },

  [REMOVE_BOOK]: (state, action) => {
    state.filter((payload) => payload.id !== action.payload.id);
  },
});

export default booksReducer;
