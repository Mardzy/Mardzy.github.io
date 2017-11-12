import React from 'react';
import projectData from './data';
import ProjectSlider from './ProjectSlider';

import { Button, Col } from 'reactstrap';

const Project = () => {
// const Project = ({ title, link, gallery,  tech }) => {
  console.log(projectData);
  return (
    <div>
      <ProjectSlider />
      <Col md={4} sm={6}>
        <Button>{2+2}</Button>
      </Col>
    </div>
  );
};

export default Project;
