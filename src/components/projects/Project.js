import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, UncontrolledCarousel } from 'reactstrap';

const Project = ({title, link, gallery, tech}) => {
  console.log(tech);
  return (
    <div>
      <Row className="project-row no-gutters">

        <Link to={link} className="col-12" ><h4>{title}</h4></Link>
        <Col lg={6} md={12} sm={12} xs={12}>

          <Link to={link}>
            <UncontrolledCarousel items={gallery} />
          </Link>
        </Col>
        <Col lg={6} md={12} sm={12} xs={12}>
          <p>Kitsch disrupt leggings iPhone air plant schlitz intelligentsia activated charcoal hot chicken banjo try-hard asymmetrical salvia glossier prism.</p>
          <Row className="tech-icons">{tech && tech.map((item, i)=>
            <div className="icon" key={i}>
              <img src={item.icon} alt={item.name}/>
            </div >
          )}</Row>
        </Col>
      </Row>
    </div>
  );
};

export default Project;
