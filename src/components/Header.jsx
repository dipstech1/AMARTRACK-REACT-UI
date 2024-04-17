import React from 'react'

import collapseLogo from '../assets/img/collapse-logo.png';
import logoImg from '../assets/img/logo.svg';


const Header = () => {
  return (
    <header className="header">
    <div className="container">
      <nav className="navbar navbar-expand-md">
        <a href="index.html" className="navbar-brand">
          <img src={logoImg} alt="" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-menu">
          <span className="navbar-toggler-icon"><img src={collapseLogo} alt="" /></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar-menu">
          <ul className="navbar-nav m-auto">
            <li className="nav-item current-menu-item"><a href="#" className="nav-link">Home</a></li>
            <li className="nav-item"><a href="#" className="nav-link">About Us</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Services</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Testimonials</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Our Team</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Our Story</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Contact Us</a></li>
          </ul>
        </div>
        <div className="header-right">
          <a href="#" className="btn">Sign Up </a>
        </div>
      </nav>
    </div>
  </header>
  )
}

export default Header