import React from 'react';
import projectData from './data';

import { Button, Col } from 'reactstrap';

const Project = () => {
// const Project = ({ title, link, gallery,  tech }) => {
  console.log(projectData);
  return (
    <Col md={4} sm={6}>
      <Button>{2+2}</Button>
    </Col>
  );
};

export default Project;
