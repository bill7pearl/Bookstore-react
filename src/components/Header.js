import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <div>
    <nav>
      <div>
        <h1>bookstore CMS</h1>
        <ul>
          <li><Link to="/">BOOKS</Link></li>
          <li><Link to="/categories">CATEGORIES</Link></li>
        </ul>
      </div>
    </nav>

  </div>
);

export default Navigation;
