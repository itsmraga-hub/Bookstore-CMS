import React from 'react';

import { useSelector } from 'react-redux';

import BookItem from './BookItem';

import style from './css/BookStore.module.css';
import InputBook from './InputBook';

const BookStore = () => {
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
