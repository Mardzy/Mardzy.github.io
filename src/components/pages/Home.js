import React from 'react';
import { Link } from 'react-router-dom';

import { Row, Col, Container } from 'reactstrap';
import Macbook from '../projects/Macbook';


class Home extends React.Component {
  render(){
    return (
      <div id="home">
        <Row className="no-gutters">
          <Col md={6} xs={12} className="home-logo">
            <div className="rounded-circle logo">
              <h1>PM</h1>
            </div>
          </Col>
          <Col md={6} xs={12} className="home-about">
            <Link to="about">

              <div className="home-icon">
                <span className="maple"></span>
              </div>
              <h3>About Me</h3>
            </Link>
          </Col>
          <Col md={6} xs={12} className="home-intro">
            <p>Welcome to my portfolio<br/>
            I'm Paul Mardling<br/></p>
          </Col>
          <Col md={6} xs={12} className="home-projects">
            <Link to="projects">
              <Macbook></Macbook>

              <h3>Projects</h3>
            </Link>
          </Col>
          <Col md={6} xs={12} className="home-contact">
            <Link to="contact">

              <div className="back-to-school__header">
                <svg
                  className="back-to-school__plane"
                  width="106"
                  height="87"
                  viewBox="0 0 106 87" xmlns="http://www.w3.org/2000/svg">
                  <title>Group</title>
                  <g fill="none">
                    <path fill="#E6E6E6" d="M105.307 0L33.255 87l.563-28.258"/>
                    <path fill="#FAFAFA" d="M35.47 62.46l-9.664-4.88L0 49.754 106 0 73.336 83.49"/>
                    <path fill="#C5C5C5" d="M106 0L25.634 57.438 33.292 87l2.028-24.692"/>
                  </g>
                </svg>

              </div>
              <h3>Contact</h3>
            </Link>
          </Col>

          <Col md={6} xs={12} className="home-statement">
            <p>Full stack developer<br/>
            London, UK
            </p>
          </Col>
          <Col md={6} xs={12}  className="home-design">
            <div className="pattern top rotate"></div>
            <div className="pattern right"></div>
            <div className="pattern bottom reverse"></div>
            <div className="pattern left"></div>
            <div className="pattern top rotate"></div>
            <div className="pattern right"></div>
            <div className="pattern bottom reverse"></div>
            <div className="pattern left"></div>
            <div className="pattern top rotate"></div>
            <div className="pattern right"></div>
            <div className="pattern bottom reverse"></div>
            <div className="pattern left"></div>
            <div className="pattern top rotate"></div>
            <div className="pattern right"></div>
            <div className="pattern bottom reverse"></div>
            <div className="pattern left"></div>
            <div className="pattern top rotate"></div>
            <div className="pattern right"></div>
            <div className="pattern bottom reverse"></div>
            <div className="pattern left"></div>
            <div className="pattern top rotate"></div>
            <div className="pattern right"></div>
            <div className="pattern bottom reverse"></div>
            <div className="pattern left"></div>
            <div className="pattern top rotate"></div>
            <div className="pattern right"></div>
            <div className="pattern bottom reverse"></div>
            <div className="pattern left"></div>
            <div className="pattern top rotate"></div>
            <div className="pattern right"></div>
            <div className="pattern bottom reverse"></div>
            <div className="pattern left"></div>
          </Col>
          <Col md={6} xs={12}  className="home-social">
            <Container className="social-container">
              <div className="social-icons rounded-circle">
                <Link className="github" to="https://github.com/Mardzy"><i className="fa fa-github-square" aria-hidden="true"></i></Link>
              </div>
              <div className="social-icons rounded-circle">
                <Link className="linkedin" to="https://www.linkedin.com/in/paul-g-mardling/"><i className="fa fa-linkedin-square" aria-hidden="true"></i></Link>
              </div>
              <div className="social-icons rounded-circle">
                <Link className="instagram" to="https://www.instagram.com/mmmmmardzy/"><i className="fa fa-instagram" aria-hidden="true"></i></Link>
              </div>
              <div className="social-icons rounded-circle">
                <Link className="twitter" to="https://twitter.com/_Mardzy"><i className="fa fa-twitter-square" aria-hidden="true"></i></Link>
              </div>
            </Container>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;
