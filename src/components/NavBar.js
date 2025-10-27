import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-coffee">
      <div className="container">
        <Link className="navbar-brand text-light" to="/">Employee Dashboard</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className={({isActive}) => isActive ? 'nav-link active text-light' : 'nav-link text-light'} to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({isActive}) => isActive ? 'nav-link active text-light' : 'nav-link text-light'} to="/form">Employee Form</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
