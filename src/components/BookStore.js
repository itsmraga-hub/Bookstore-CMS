import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import BookItem from './BookItem';

import { fetchBooks } from '../reducers/books/books';

import style from './css/BookStore.module.css';
import InputBook from './InputBook';

const BookStore = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  const books = useSelector((state) => state.books);
  return (
    <>
      <ul className={style.BooksContainer}>
        {
        books.map((book) => {
          const { title, author, id } = book;
          return <BookItem key={`book-${id}`} id={id} title={title} author={author} />;
        })
      }
      </ul>
      <InputBook />
    </>
  );
};

export default BookStore;
