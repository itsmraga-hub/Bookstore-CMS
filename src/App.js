import React from 'react';

import BookStore from './components/BookStore';
import Header from './components/Header';
import './css/App.css';

const App = () => (
  <>
    <div className="Bookstore-CMS">
      <Header />
      <BookStore />
    </div>
  </>
);

export default App;
