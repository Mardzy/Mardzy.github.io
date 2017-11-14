import React from 'react';
import { Link } from 'react-router-dom';

import { Row, Col } from 'reactstrap';


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
              <h2>About Me</h2>
            </Link>
          </Col>
          <Col md={6} xs={12} className="home-intro">
            <p>Welcome <br/> I'm Paul Mardling<br/>This is my portfolio</p>
          </Col>
          <Col md={6} xs={12} className="home-projects">
            <Link to="projects">
              <div className="home-icon">
                <div className='pca-hold'>
                  <div className='pca-main'>
                    <div className='pca-inner'>
                    </div>{/* <!-- 'pca-inner' --> */}
                  </div>{/* <!-- 'pca-main' -->*/}
                  <div className='pca-sub'>
                    <div className='pca-top'></div>
                    <div className='pca-mid'>
                      <div className='pca-part'></div>
                    </div>{/* <!-- 'pca-mid' --> */}
                    <div className='pca-bot'></div>
                  </div>{/* <!-- 'pca-bot' -->*/}
                </div>{/* <!-- 'pca-hold' -->*/}
              </div>

              <h2>Projects</h2>
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

                {/* <img src="http://d.pr/f/rr2qex+"  />

                <svg
                className="back-to-school__paper"
                width="86"
                height="77"
                viewBox="0 0 86 77" xmlns="http://www.w3.org/2000/svg">
                <title>Group</title>
                <g fill="none"><path fill="#FFF" d="M25 3l-8 6L4 26 0 43l7 21 14 6 17 7 19-4 8-6 2-12 18-12-17-22-7-17-17-4"/><path fill="#E1DFDD" d="M29 49l17 5v6l9-12 11-6-2-7-2-14-6 11-2-21 3-5-10 3 1 18-3 16"/><path fill="#E1DFDD" d="M42 75l10-10 6-3V52l11-4 6-9-4-13 10 7 5 10-15 11-2 12-9 9M19 42l-1-8 11-8 5-10v11l-8 5m-8 30l-7-12 8 4M30 9l-12 5 8 4"/><path fill="#CCCAC8" d="M47 47l4-18-6 8m29 10l-13 2-6 8m-22-5l-13 2-6 8"/>
              </g>
            </svg> */}

          </div>


          <h2>Contact</h2>
        </Link>
      </Col>

      <Col md={6} xs={12} className="home-statement">
        <p>Welcome <br/> I'm Paul Mardling<br/>This is my portfolio</p>
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
      </Col>
      <Col md={6} xs={12}  className="home-social">
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

      </Col>
    </Row>
  </div>
);
}
}

export default Home;
