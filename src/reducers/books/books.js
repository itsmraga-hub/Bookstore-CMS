// import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

// const APP_ID = '782uhXQAzTM0kEfK8j10';
const FETCH_BOOKS = 'bookstore-cms/books/FETCH_BOOKS';

export const fetchBooks = () => async (dispatch) => {
  const response = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/782uhXQAzTM0kEfK8j10/books/', {
    method: 'GET',
  });
  const data = await response.json();
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

export const addBook = (book) => async (dispatch) => {
  await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/782uhXQAzTM0kEfK8j10/books/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(book),
  });
  const id = book.item_id;
  const bk = {
    ...book,
    id,
  };
  dispatch({
    type: ADD_BOOK,
    bk,
  });
};

// books reducer function
const booksReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK: {
      return [
        ...state, action.bk,
      ];
    }
    case REMOVE_BOOK: {
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
