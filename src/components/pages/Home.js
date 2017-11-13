 import React from 'react';
import { Link } from 'react-router-dom';

import { Row, Col } from 'reactstrap';


class Home extends React.Component {
  render(){
    return (
      <div id="home">
        <Row className="no-gutters">
          <Col md={6} sm={12}  className="home-logo">
            <img src="src/images/icons/pm.png" className="rounded-circle logo" />
          </Col>
          <Col md={6} sm={12}  className="home-about"></Col>
          <Col md={6} sm={12}  className="home-intro">
            <p>Welcome <br/> I`m Paul Mardling<br/>This is my portfolio</p>
          </Col>
          <Col md={6} sm={12}  className="home-projects"></Col>
          <Col md={6} sm={12}  className="home-contact"></Col>

          <Col md={6} sm={12}  className="home-statement">
            <p>Welcome <br/> I``m Paul Mardling<br/>This is my portfolio</p>
          </Col>
          <Col md={6} sm={12}  className="home-design"></Col>
          <Col md={6} sm={12}  className="home-social">
            <div className="social-icons rounded-circle">
              <Link to="https://github.com/Mardzy"><i className="fa fa-github-square" aria-hidden="true"></i></Link>
            </div>
            <div className="social-icons rounded-circle">
              <Link to="https://www.instagram.com/mmmmmardzy/"><i className="fa fa-instagram" aria-hidden="true"></i></Link>
            </div>
            <div className="social-icons rounded-circle">
              <Link to="https://www.linkedin.com/in/paul-g-mardling/"><i className="fa fa-linkedin-square" aria-hidden="true"></i></Link>
            </div>
            <div className="social-icons rounded-circle">
              <Link to="https://twitter.com/_Mardzy"><i className="fa fa-twitter-square" aria-hidden="true"></i></Link>
            </div>

          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;
