import React, { useState } from 'react';
import images from '../../constants/images';

import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
  <nav className="app__navbar">
    <div className="app__navbar-logo">
      <img src={ images.gericht } alt="logo" />
    </div>
    <ul className="app__navbar-links">
      <li className="p__opensans"><a href="#home">Home</a></li>
      <li className="p__opensans"><a href="#About">About</a></li>
      <li className="p__opensans"><a href="#Menu">Menu</a></li>
      <li className="p__opensans"><a href="#Award">Award</a></li>
      <li className="p__opensans"><a href="#Contact">Contact</a></li>
    </ul>
    <div className="app__navbar-login">
      <a href="#login" className="p__opensans">Log In / Register</a>
      <div />
      <a href="/" className="p__opensans">Book Table</a>
    </div>
  </nav>
  );
};

export default Navbar;
