import React from 'react';
// import { Link } from 'react-router-dom';

import { Row, Col, Container } from 'reactstrap';


class About extends React.Component {
  render(){
    return (
      <div id="about">
        <header>
          <h1>About Me</h1>
        </header>
        <Container>
          <Row>
            <Col sm={5}>
              <img src="https://placeimg.com/400/400/people" alt="photo ofPaul Mardling"/>
            </Col>
            <Col sm={7}><p>I don't like it here Morty. I can't abide bureaucracy. I don't like being told where to go and what to do. I consider it a violation. Did you get those seeds all the way up your butt? You have to turn them on Morty! The shoes need to be turned on! Oh, we're welllll past that, Jerry! Listen, Morty, I hate to break it to you but what people call "love" is just a chemical reaction that compels animals to breed. It hits hard, Morty, then it slowly fades, leaving you stranded in a failing marriage. I did it. Your parents are gonna do it. Break the cycle, Morty. Rise above. Focus on science.
              <br/>
              It's not like we can do this every week, we get 3 or 4 more of these tops. Rubber baby buggy bumpers! You’re like Hitler, but even Hitler cared about Germany or something.</p></Col>
            </Row>
          </Container>

        </div>
      );
    }
  }

  export default About;
