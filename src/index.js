import './index.css';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { fetchUsers, userApiSlice } from './features/users/usersSlice';

import App from './App';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { extendedApiSlice } from './features/posts/postsSlice';
import { store } from './app/store';

store.dispatch(extendedApiSlice.endpoints.getPosts.initiate());
store.dispatch(userApiSlice.endpoints.getUsers.initiate());

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
