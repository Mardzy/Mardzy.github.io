import React from 'react';
import ProjectSlider from '../projects/ProjectSlider';
import Macbook from '../projects/Macbook';

class Contact extends React.Component {
  render(){
    return (
      <div>
        <Macbook />
        <ProjectSlider />
      </div>

    );
  }
}

export default Contact;
