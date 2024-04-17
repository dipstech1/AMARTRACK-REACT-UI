import React, { useState, useRef, useEffect } from 'react'

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

  const [activeSection, setActiveSection] = useState(null);
  const observer = useRef(null);

  let sticky = isScrolled ? 'sticky' : '';

  const setActiveMenu = (id) => {
    menus.forEach((m) => {
      m.isActive = false;
    });

    menus[id].isActive = true;

    setMenus([...menus]);

    let navMenu = document.querySelector("#navbar-menu");
    if(navMenu.classList.contains('show')){
      navMenu.classList.remove('show')
    }
  }

  const selectedMenu = (menu, id) => {

    setActiveMenu(id)

  }

  useEffect(()=>{
      if(activeSection){
          let ind = menus.findIndex(m => m.href == `#${activeSection}`);
          setActiveMenu(ind)
      }
  },[activeSection])

 

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      const visibleSection = entries.find((entry) => entry.isIntersecting)?.target;
      if (visibleSection) {
        setActiveSection(visibleSection.id);
      }
    });

    const sections = document.querySelectorAll('[data-section]');

    sections.forEach((section) => {
      observer.current.observe(section);
    });
    return () => {
      sections.forEach((section) => {
        observer.current.unobserve(section);
      });
    };
  }, []);



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
           AS {activeSection}
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