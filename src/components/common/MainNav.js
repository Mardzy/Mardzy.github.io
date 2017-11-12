import React from 'react';


const MainNav = () => {

  return (
    <section className="menuwrapper">
      <nav id="mainmenu">
        <ul className="nav menu">
          <li className="item-101 default"><a href="/">Home</a></li>
          <li className="item-102 current active"><a href="/about-irene-demetri.html">About</a></li>
          <li className="item-103"><a href="/what-i-do-web-design-branding.html">What I do</a></li>
          <li className="item-104"><a href="/contact.html">Contact</a></li>
        </ul>

      </nav>
      <a href="#" className="sprite menutoggle kellum">
        <div id="nav-icon3">
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
