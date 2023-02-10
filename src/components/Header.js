import { Link } from "react-router-dom";
import React from 'react';
import { useDispatch } from "react-redux";

function Header() {
  const dispatch = useDispatch();

  return (
    <header className="header">
      <h1>Redux Blog</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/post">Post</Link></li>
          <li><Link to="/user">Users</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header