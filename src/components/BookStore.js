import React from 'react';

import BookItem from './BookItem';

import style from './css/BookStore.module.css';
import InputBook from './InputBook';

const books = [
  {
    id: 1,
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
  },
  {
    id: 2,
    title: 'The GodFather',
    author: 'Mario Puzo',
  },
];

const BookStore = () => (
  <>
    <ul className={style.BooksContainer}>
      {
        books.map((book) => {
          const { title, author, id } = book;
          return <BookItem key={`book-${id}`} title={title} author={author} />;
        })
      }
    </ul>
    <InputBook />
  </>
);

export default BookStore;
