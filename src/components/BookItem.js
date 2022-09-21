import React from 'react';

// Redux functions
import { useDispatch } from 'react-redux';

// import store from '../reducers/configureStore';

import { removeBook } from '../reducers/books/books';

// Style sheets
import style from './css/BookItem.module.css';

const BookItem = (props) => {
  const book = props;
  const { title, author, id } = book;

  const dispatch = useDispatch();

  const remBook = (e) => {
    e.preventDefault();
    dispatch(removeBook(e.target.id));
  };

  return (
    <li className={style.BookContainer}>
      <div className={style.BookInfo}>
        <p className={style.BookGenre}>Action</p>
        <p className={style.BookTitle}>{title}</p>
        <p className={style.BookAuthor}>{author}</p>
        <ul>
          <li><a href="./">Comments</a></li>
          <li><a id={id} onClick={remBook} href="./">Remove</a></li>
          <li><a href="./">Edit</a></li>
        </ul>
      </div>
      <div className={style.BookProgress}>
        <div className={style.Oval} />
        <div className={style.percentage}>
          <h1>64%</h1>
          <p>completed</p>
        </div>
      </div>
      <div className={style.Progress}>
        <h3 className={style.CurrentChapter}>CURRENT CHAPTER</h3>
        <h4 className={style.CurrentLesson}>Chapter 17</h4>
        <button type="button" className={style.btn}>UPDATE PROGRESS</button>
      </div>
    </li>
  );
};

export default BookItem;
