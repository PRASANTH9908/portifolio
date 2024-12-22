import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaUser, FaEnvelope, FaFileAlt } from 'react-icons/fa';
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg  text-primary">
      <div className="container-fluid">
        <NavLink className="navbar-brand text-primary">PORTFOLIO</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                className="nav-link text-white"
                to="/"
                activeClassName="active-link"
              >
                <FaHome className="me-2" /> Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-white"
                to="/about"
                activeClassName="active-link"
              >
                <FaUser className="me-2" /> About Me
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-white"
                to="/contact"
                activeClassName="active-link"
              >
                <FaEnvelope className="me-2" /> Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-white"
                to="/resume"
                activeClassName="active-link"
              >
                <FaFileAlt className="me-2" /> Resume
              </NavLink>
            </li>
          </ul>
        </div>                        
      </div>
    </nav>
  );
}

export default Navbar;
