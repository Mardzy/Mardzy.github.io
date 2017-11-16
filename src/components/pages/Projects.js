import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import projectData from '../utility/data';
import ImageCarousel from '../utility/ImageCarousel';
// import Macbook from '../projects/Macbook';

const Projects = ()=> {
  return (
    <div id="projects">
      <h1>Projects</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <ImageCarousel/>
      {projectData && projectData.map((project, i)=> {
        console.log(project, i);
        <Container>
          <Row>
            <Col>

            </Col>
            <Col>

            </Col>
          </Row>
        </Container>;
      })}
    </div>

  );

};

export default Projects;
