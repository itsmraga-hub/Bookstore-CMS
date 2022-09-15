import React from 'react';

import style from './css/BookItem.module.css';

const BookItem = (props) => {
  const book = props;
  const { title, author } = book;
  return (
    <li className={style.BookContainer}>
      <div className={style.BookInfo}>
        <p className={style.BookGenre}>Action</p>
        <p className={style.BookTitle}>{title}</p>
        <p className={style.BookAuthor}>{author}</p>
        <ul>
          <li><a href="./">Comments</a></li>
          <li><a href="./">Remove</a></li>
          <li><a href="./">Edit</a></li>
        </ul>
      </div>
      <div className={style.BookProgress}>
        <div className={style.Oval} />
        <h1>8%</h1>
        <p>completed</p>
      </div>
      <div className={style.Progress}>
        <h3>CURRENT CHAPTER</h3>
        <h4>Chapter 17</h4>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </li>
  );
};

export default BookItem;
