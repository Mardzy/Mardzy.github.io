import React from 'react';
import { Row } from 'reactstrap';

class Contact extends React.Component {
  render(){
    return (
      <div id="contact">
        <Row className="contact-heading">
          <h2>Contact Me</h2>
        </Row>
        <Row className="contact-mobile">
          <a href="tel:+447577529059"><i className="fa fa-mobile" aria-hidden="true"></i></a>
          <a href="tel:+447577529059">+44 7577529059</a>
        </Row>
        <Row className="contact-email">
          <a href="mailto:mardlingp@gmail.com"><i className="fa fa-envelope" aria-hidden="true"></i></a>
          <a href="mailto:mardlingp@gmail.com">mardlingp@gmail.com</a>
        </Row>
        <Row className="contact-twitter">
          <i className="fa fa-twitter" aria-hidden="true"></i>
          <a href="https://twitter.com/_Mardzy">Twitter</a>
        </Row>
      </div>

    );
  }
}

export default Contact;
