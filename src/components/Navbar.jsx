import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const Logout = async () => {
    try {
      await axios.delete('http://localhost:5000/api/logout');
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <nav
      className="navbar is-light"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <div className="navbar-item" href="#">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
              alt="logo"
            />
          </div>
          <a
            href="/"
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a href="/" class="navbar-item">
              Home
            </a>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div class="buttons">
                <button onClick={Logout} className="button is-light">Logout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
