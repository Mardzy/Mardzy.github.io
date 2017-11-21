import React from 'react';
// import { Link } from 'react-router-dom';

import { Row } from 'reactstrap';


class About extends React.Component {
  render(){
    return (
      <div id="about">
        <header>
          <h2>About Me</h2>
        </header>

        <Row>
          <div className="about-image">
            <img src="../../src/assets/images/icons/paul.jpg" alt="photo of Paul Mardling"/>
          </div>
          <div className="about-content">
            <p>From an early age I enjoyed problem solving, especially when it was paired with building things.<br/>
            This lead me to a career as a Manufacturing Engineer, where I worked with CNC machines to create products for automotive, transportation, oil and gas, pneumatic, medical, and aerospace industries.<br/>
            When I started playing around with coding tutorials, I realised that coding used very similar programmatic problem solving techniques, which was what I enjoyed most about my engineering role.<br/>
            The more code I wrote, and the more I built, the more time I wanted to spend learning to design and code. Through these projects I realised how satisfying it can be to have something look sharp, and function the way I expect it should.<br/>
            </p>
            <p>I grew up in Canada, and now live with my wife, and our two cats in London, UK.</p>
          </div>
        </Row>


      </div>
    );
  }
}

export default About;
