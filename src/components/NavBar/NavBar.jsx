import React, { useState } from 'react';
import './NavBar.css';
import logo from '../Asset/Image/logo_2-removebg-preview.png';

const NavBar = () => {
  const [navVisible, setNavVisible] = useState(false);
  const handleLogoClick = () => {
    setNavVisible(!navVisible);
  };

  return (
    <section className='navBarSection'>
      <header className='header'>
        <div className='logoDiv' onClick={handleLogoClick}>
          <a href="#" className='logo'>
            <img src={logo} alt="Logo" className="navbar-logo" />
          </a>
        </div>

        <ul className={`navLists ${navVisible ? 'visible' : ''}`}>
          <li className="navItem">
            <a href="#" className="navLink">HOME</a>
          </li>
          <li className="navItem">
            <a href="#" className="navLink">ABOUT US</a>
          </li>
          <li className="navItem">
            <a href="#" className="navLink">BOOKS</a>
          </li>
          <li className="navItem">
            <a href="#" className="navLink">NEW RELEASE</a>
          </li>
          <li className="navItem">
            <a href="#" className="navLink">CONTACT US</a>
          </li>
          <li className="navItem">
            <a href="#" className="navLink">BLOG</a>
          </li>
        </ul>
      </header>
    </section>
  );
};

export default NavBar;
