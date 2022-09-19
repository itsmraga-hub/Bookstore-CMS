import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// React-redux
import { Provider } from 'react-redux';
import store from './reducers/configureStore';

import App from './App';
import Categories from './routes/Categories';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="categories" element={<Categories />} />
        </Routes>
      </Router>
    </Provider>
    ,
  </React.StrictMode>,
);
