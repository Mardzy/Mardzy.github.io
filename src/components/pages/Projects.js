import React from 'react';
import { Row } from 'reactstrap';
import projectData from '../utility/data';
// import ImageCarousel from '../utility/ImageCarousel';
import Project from '../projects/Project';

const Projects = ()=> {
  return (
    <div id="projects">
      <h1>Projects</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      {projectData.map((project, i) =>
        <Row className="justify-content-center" key={i}><Project  {...project} /></Row>)}

    </div>
  );
};

export default Projects;
