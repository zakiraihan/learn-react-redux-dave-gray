import './index.css';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import App from './App';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { fetchPosts } from './features/posts/postsSlice';
import { fetchUsers } from './features/users/usersSlice';
import { store } from './app/store';

store.dispatch(fetchPosts());
store.dispatch(fetchUsers());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
