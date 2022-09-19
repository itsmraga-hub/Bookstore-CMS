import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE-BOOK';

const defaultState = [
  {
    id: uuidv4(),
    title: 'The hunger games',
    author: 'William Raga',
  },
  {
    id: uuidv4(),
    title: 'Water under the bridge',
    author: 'Mikaela Adios',
  },
  {
    id: uuidv4(),
    title: 'The Great Gatsby',
    author: 'Guy',
  },
];

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
const booksReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_BOOK: {
      return [
        ...state, action.book,
      ];
    }
    case REMOVE_BOOK: {
      return state.filter((book) => book.id !== action.book.id);
    }
    default: {
      return state;
    }
  }
};

export default booksReducer;
