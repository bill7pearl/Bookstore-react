const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

export const addBook = () => ({
  type: ADD_BOOK,
});

export const removeBook = () => ({
  type: REMOVE_BOOK,
});

export default function booksReducer(state = [], action) {
  switch (action.type) {
    case addBook.fulfilled.type:
    case removeBook.fulfilled.type:
      return action.payload;
    default: return state;
  }
}
