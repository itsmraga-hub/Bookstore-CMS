import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { addBook } from '../reducers/books/books';

import style from './css/InputBook.module.css';

const InputBook = () => {
  const [book, setBook] = useState({
    title: '',
    author: '',
    item_id: '',
    category: 'fiction',
  });

  // Dispatch method to add book to redux store
  const dispatch = useDispatch();

  const handleForm = (e) => {
    e.preventDefault();
    dispatch(addBook(book));
    setBook({
      title: '',
      author: '',
      item_id: '',
      category: 'fiction',
    });
  };

  // Function to handle inputs - title and author
  const handleInput = (e) => {
    setBook({
      ...book,
      item_id: uuidv4(),
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className={style.formContainer}>
      <h2>ADD NEW BOOK</h2>
      <form action="#">
        <input type="test" name="title" onChange={handleInput} placeholder="book title" value={book.title} className={style.inputTitle} />
        <input type="test" name="author" onChange={handleInput} placeholder="author" value={book.author} className={style.inputAuthor} />
        <button type="button" onClick={handleForm} className={style.inputButton}>Add Book</button>
      </form>
    </section>
  );
};

export default InputBook;
