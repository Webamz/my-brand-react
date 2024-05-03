import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="navLogo">
        <a href="#home">
          <h1>MyBrand</h1>
        </a>
      </div>
      <div className="openMenu">
        <i className="fa fa-bars"></i>
      </div>
      <ul className="mainMenu">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
         <li>
          <Link to="/blogs">Blogs</Link>
        </li>
        
        <li className="login-btn">
          <Link to='/login'>Login</Link>
        </li>
        <div className="closeMenu">
          <i className="fa fa-times"></i>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
