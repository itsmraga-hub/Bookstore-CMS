import React from 'react';

import style from './css/InputBook.module.css';

const InputBook = () => (
  <section className={style.formContainer}>
    <h2>ADD NEW BOOK</h2>
    <form>
      <input type="test" placeholder="book title" className={style.input} />
      <input type="test" placeholder="author" className={style.input} />
      <button type="button" className={style.inputButton}>Add Book</button>
    </form>
  </section>
);

export default InputBook;
