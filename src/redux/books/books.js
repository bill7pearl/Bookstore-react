const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const id = () => Math.floor((1 + Math.random()) * 0x10000)
  .toString(16)
  .substring(1);

export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const removeBook = (itemId) => ({
  type: REMOVE_BOOK,
  itemId,
});

const initialState = [
  {
    itemId: id(), title: 'Oliver Twist', author: 'Charles Dikens', category: 'sc-fi',
  },
  {
    itemId: id(), title: 'The World as Will and Representation', author: 'Arthur Schopenhauer', category: 'philosophy',
  },
  {
    itemId: id(), title: 'Thus Spoke Zarathustra', author: 'Friedrich Nietzsche', category: 'philosophy',
  },
  {
    itemId: id(), title: 'Les Misérables', author: 'Victor Hugo', category: 'historical fiction',
  },
];

const booksReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return [...state.filter((book) => book.itemId !== action.itemId)];
    default:
      return state;
  }
};

export default booksReducer;
