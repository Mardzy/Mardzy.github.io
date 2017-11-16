import React from 'react';
import { Link } from 'react-router-dom';


const MainNav =({handleClick, condition})=>{


  // componentDidMount(){
  //   const navLinks = document.querySelectorAll('nav-links');
  //   const mainMenu = document.getElementById('transition');
  //   console.log(navLinks);
  //   const navIcon = document.getElementById('nav-icon');
  //   console.log(navIcon);
  //   const toggleIcon = () =>{
  //     navIcon.addEventListener('click', ()=> {
  //       navIcon.classList.toggle('open');
  //       mainMenu.classList.toggle('opened');
  //     });
  //   };
  //   toggleIcon();
  //   navLinks.addEventListener('click', ()=> toggleIcon);
  // }
  //
  // render(){
  //   console.log(this.state);

  return (
    <section className="menu-wrapper">
      <nav id="main-menu">
        <ul id="transition"  onClick={handleClick} className={ condition ? 'nav menu opened' : 'nav menu'}>
          <li className="home-link default"><Link to="/" className="nav-links">Home</Link></li>
          <li className="about-link current active"><Link to="/about" className="nav-links">About</Link></li>
          <li className="projects-link"><Link to="/projects" className="nav-links">Projects</Link></li>
          <li className="contact-link"><Link to="/contact" className="nav-links">Contact</Link></li>
        </ul>
      </nav>
      <a href="#" className="menu-toggle">
        <div id="nav-icon" onClick={handleClick} className={ condition ? 'open' : ''}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </a>
    </section>
  );
  // }
};

export default MainNav;
