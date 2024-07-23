import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import "./navbar.css";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <nav className="nav container">
        <NavLink to="/" className="nav__logo">
          Navigation Bar
        </NavLink>

        <div className={`nav__menu ${isMenuOpen ? "active" : ""}`} id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink exact to="/" className="nav__link" activeClassName="active">
                
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/news" className="nav__link" activeClassName="active">
              </NavLink>
            </li>
          </ul>

          <div className="nav__close" onClick={toggleMenu}>
            <IoClose />
          </div>
        </div>

        <div className="nav__toggle" onClick={toggleMenu}>
          <IoMenu />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
