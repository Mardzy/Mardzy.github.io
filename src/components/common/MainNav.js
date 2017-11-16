import React from 'react';
import { Link } from 'react-router-dom';


const MainNav = ({toggle}) => {

  return (
    <section className="menu-wrapper">
      <nav id="main-menu">
        <ul id="transition" className="nav menu">
          <li className="home-link default"><Link to="/">Home</Link></li>
          <li className="about-link current active"><Link to="/about">About</Link></li>
          <li className="projects-link"><Link to="/projects">Projects</Link></li>
          <li className="contact-link"><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <a href="#" onClick={toggle} className="menu-toggle">
        <div id="nav-icon">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </a>
    </section>
  );
};

export default MainNav;
