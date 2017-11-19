import React from 'react';
import { Row } from 'reactstrap';
import projectData from '../utility/data';
// import ImageCarousel from '../utility/ImageCarousel';
import Project from '../projects/Project';

const Projects = ()=> {
  return (
    <div id="projects">
      <h1>Projects</h1>
      
      {projectData.map((project, i) =>
        <Row className="projects-row" key={i}><Project  {...project} /></Row>)}

    </div>
  );
};

export default Projects;
