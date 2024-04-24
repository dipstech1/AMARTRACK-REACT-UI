import React, { useState, useRef, useEffect } from 'react'

import collapseLogo from '../assets/img/collapse-logo.png';
import logoImg from '../assets/img/logo.svg';
import { Link, useNavigate } from 'react-router-dom';


const Header = ({ isScrolled }) => {

  let [menus, setMenus] = useState([
    { scrollTo: "heroSec", href: "#heroSec", title: "Home", isActive: true },
    { scrollTo: "aboutSec", href: "#aboutSec", title: "About Us", isActive: false },
    { scrollTo: "services", href: "#services", title: "Services", isActive: false },
    { scrollTo: "testimonial", href: "#testimonial", title: "Testimonials", isActive: false },
    { scrollTo: "team", href: "#team", title: "Our Team", isActive: false },
    { scrollTo: "contactus", href: "#contactus", title: "Contact Us", isActive: false },
    { href: "our-story", title: "Our Story", isActive: false }
  ])

  const navigate = useNavigate()

  const [activeSection, setActiveSection] = useState(null);
  const observer = useRef(null);

  let sticky = isScrolled ? 'sticky' : '';

  const setActiveMenu = (id, m) => {
    menus.forEach((m) => {
      m.isActive = false;
    });

    menus[id].isActive = true;

    setMenus([...menus]);

    let navMenu = document.querySelector("#navbar-menu");
    if (navMenu.classList.contains('show')) {
      navMenu.classList.remove('show')
    }

    let element = document.getElementById(m?.scrollTo);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });

  }

  const selectedMenu = (e, menu, id) => {
    e?.stopPropagation()
    setActiveMenu(id, menu);
    if (menu.href == 'our-story') {
      navigate("/our-story")
      // window.open("/our-story", "_blank");
    }

  }

  useEffect(() => {
    if (activeSection) {
      let ind = menus.findIndex(m => m.href == `#${activeSection}`);
      if (ind)
        setActiveMenu(ind)
    }
  }, [activeSection])



  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      const visibleSection = entries.find((entry) => entry.isIntersecting)?.target;
      if (visibleSection) {
        setActiveSection(visibleSection.id);
      }
    }, {
      rootMargin: '0px 0px -50% 0px',
      threshold: 0.5
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
          <Link to="/home" className="navbar-brand">
            <img src={logoImg} alt="" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-menu">
            <span className="navbar-toggler-icon"><img src={collapseLogo} alt="" /></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar-menu">
            <ul className="navbar-nav m-auto">
              {
                menus.map((menu, id) => (
                  menu.href !== 'our-story' ? (<li key={menu.href} onClick={(e) => selectedMenu(e, menu, id)} className={`nav-item ${menu.isActive ? 'current-menu-item' : ''}`}>
                    <a href={menu.href} className="nav-link">{menu.title}</a>
                  </li>) : (
                    <li className='nav-item'>
                      <Link to={menu.href} target='_blank' >{menu.title}</Link>
                    </li>
                  )
                ))
              }
              <li>
                {/* <Link to="our-story" target='_blank'>Our Story</Link> */}
              </li>

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