const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE-BOOK';

// addBook action creator
export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

// removeBook action creator
export const removeBook = (book) => ({
  type: REMOVE_BOOK,
  book,
});

// books reducer function
const booksReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK: {
      return [
        ...state, action.book,
      ];
    }
    case REMOVE_BOOK: {
      return state.filter((book) => book.id !== action.book);
    }
    default: {
      return state;
    }
  }
};

export default booksReducer;
