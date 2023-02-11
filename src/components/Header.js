import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../images/avatar.png';

const Navigation = () => (
  <main className="wrapper">
    <nav className="navbar-container">
      <div className="nav-titles">
        <h1 className="nav-header">Bookstore CMS</h1>
        <ul className="nav-links">
          <li><Link to="/">BOOKS</Link></li>
          <li><Link to="/categories">CATEGORIES</Link></li>
        </ul>
      </div>
      <img className="avatar" src={avatar} alt="avatar" />
    </nav>
  </main>
);

export default Navigation;
