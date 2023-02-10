import { createAsyncThunk } from '@reduxjs/toolkit';

const BOOKS_API = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/SukL6UM81zzFEr8SdMgf/books';

const id = () => Math.floor((1 + Math.random()) * 0x10000)
  .toString(16)
  .substring(1);

const renderBooks = createAsyncThunk('RENDER_BOOK', async () => {
  const response = await fetch(BOOKS_API);
  return response.json();
});

const addBook = createAsyncThunk('CREATE_BOOK', async (book) => {
  await fetch(BOOKS_API, {
    method: 'POST',
    body: new URLSearchParams({
      item_id: id(),
      title: book.title,
      author: book.author,
      category: book.category,
    }),
  });
  const response = await fetch(BOOKS_API);
  return response.json();
});

const deleteBook = createAsyncThunk('DELETE_BOOK', async (itemId) => {
  await fetch(`${BOOKS_API}/${itemId}`, {
    method: 'DELETE',
  });
  const response = await fetch(BOOKS_API);
  return response.json();
});

const initialState = {};
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case renderBooks.fulfilled.type:
    case addBook.fulfilled.type:
    case deleteBook.fulfilled.type:
      return action.payload;
    default:
      return state;
  }
};

export { renderBooks };
export { addBook };
export { deleteBook };
export default booksReducer;
