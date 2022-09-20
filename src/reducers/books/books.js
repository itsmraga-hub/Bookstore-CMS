// import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

// const APP_ID = '782uhXQAzTM0kEfK8j10';
const FETCH_BOOKS = 'bookstore-cms/books/FETCH_BOOKS';

export const fetchBooks = () => async (dispatch) => {
  const response = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/782uhXQAzTM0kEfK8j10/books/');
  const data = await response.json();
  // console.log(data);
  const bookIDs = Object.entries(data);
  const books = [];
  bookIDs.forEach(([key, book]) => {
    const id = key;
    const { title, author, category } = book[0];
    books.push({
      id, title, author, category,
    });
  });
  dispatch({
    type: FETCH_BOOKS,
    payload: books,
  });
};

export const removeBook = (id) => async (dispatch) => {
  await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/782uhXQAzTM0kEfK8j10/books/${id}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
    }),
  });
  dispatch({
    type: REMOVE_BOOK,
    id,
  });
};

// addBook action creator
export const addBook = (book) => ({
  type: ADD_BOOK,
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
      console.log(action.id);
      return state.filter((book) => book.id !== action.id);
    }
    case FETCH_BOOKS: {
      return [...action.payload];
    }
    default: {
      return state;
    }
  }
};

export default booksReducer;
