import React, { useState } from 'react';
import images from '../../constants/images';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdRestaurantMenu } from "react-icons/md";

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
    <div className="app__navbar-smallscreen">
      <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => {setToggleMenu(true)}}/>
      
      {toggleMenu && 

      <div className="app__navbar-smallscreen_overlay">
        <MdRestaurantMenu className='overlay__close' color='#fff' fontSize={27} onClick={() => {setToggleMenu(false)}}/>
        <ul className="app__navbar-links">
          <li className="p__opensans"><a href="#home">Home</a></li>
          <li className="p__opensans"><a href="#About">About</a></li>
          <li className="p__opensans"><a href="#Menu">Menu</a></li>
          <li className="p__opensans"><a href="#Award">Award</a></li>
          <li className="p__opensans"><a href="#Contact">Contact</a></li>
        </ul>
      </div>
      }
    
    </div>
  </nav>
  );
};

export default Navbar;
