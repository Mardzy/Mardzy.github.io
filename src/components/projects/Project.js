import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, UncontrolledCarousel } from 'reactstrap';
// import Macbook from '.Macbook'

const Project = ({title, link, gallery, tech}) => {

  const carouselGallery = gallery;
  // console.log(tech);
  return (
    <div>
      <Row className="project-row no-gutters">
        <Col className="col-12">
          <Link
            to={link}  >
            <h4>{title}</h4>
          </Link>
        </Col>
        <Col lg={6} md={12} sm={12} xs={12}>

          {/* <Link to={link}> */}
          <div className='pca-hold'>
            <div className='pca-main'>
              <div className='pca-inner'>
              </div>{/*<!-- 'pca-inner' --> */}
              <UncontrolledCarousel items={carouselGallery} />
            </div>{/* <!-- 'pca-main' --> */}
            <div className='pca-sub'>
              <div className='pca-top'></div>
              <div className='pca-mid'>
                <div className='pca-part'></div>
              </div>{/* <!-- 'pca-mid' --> */}
              <div className='pca-bot'></div>
            </div>{/* <!-- 'pca-bot' --> */}
          </div>{/* <!-- 'pca-hold' --> */}
          {/* </Link> */}
        </Col>
        <Col className="project-description" lg={6} md={12} sm={12} xs={12}>
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
