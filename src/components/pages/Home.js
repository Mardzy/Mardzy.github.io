import React from 'react';
import { Row, Col } from 'reactstrap';


class Home extends React.Component {
  render(){
    return (
      <div id="home">
        <Row className="no-gutters">
          <Col sm={6} className="home-logo"></Col>
          <Col sm={6} className="home-about"></Col>
          <Col sm={6} className="home-intro"></Col>
          <Col sm={6} className="home-projects"></Col>
          <Col sm={6} className="home-contact"></Col>
          <Col sm={6} className="home-statement"></Col>
          <Col sm={6} className="home-design"></Col>
          <Col sm={6} className="home-social"></Col>
        </Row>
      </div>
    );
  }
}

export default Home;
