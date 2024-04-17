import React, { useState, useRef } from 'react'

import collapseLogo from '../assets/img/collapse-logo.png';
import logoImg from '../assets/img/logo.svg';


const Header = ({ isScrolled }) => {

  let [menus, setMenus] = useState([
    { href: "#heroSec", title: "Home", isActive: true },
    { href: "#aboutSec", title: "About Us", isActive: false },
    { href: "#services", title: "Services", isActive: false },
    { href: "#testimonial", title: "Testimonials", isActive: false },
    { href: "#team", title: "Our Team", isActive: false },
    { href: "#contactus", title: "Contact Us", isActive: false },
  ])

  let sticky = isScrolled ? 'sticky' : '';

  const selectedMenu = (menu, id) => {

    menus.forEach((m) => {
      m.isActive = false;
    });

    menus[id].isActive = true;

    setMenus([...menus])

  }



  return (
    <header className={`header ${sticky}`}>
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
              {
                menus.map((menu, id) => (
                  <li key={menu.href} onClick={() => selectedMenu(menu, id)} className={`nav-item ${menu.isActive ? 'current-menu-item' : ''}`}>
                    <a href={menu.href} className="nav-link">{menu.title}</a>
                  </li>
                ))
              }

            </ul>
          </div>
          <div className="header-right">
            <a href="#" className="btn btn-outline-primary">Sign Up </a>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header