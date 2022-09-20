import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';
import booksReducer from './books/books';
import catReducer from './categories/categories';

const reducer = combineReducers({
  books: booksReducer,
  categories: catReducer,
});

const store = configureStore({
  reducer,
});

export default store;
