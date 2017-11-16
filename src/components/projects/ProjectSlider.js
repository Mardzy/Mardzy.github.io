import React from 'react';
import Slider from 'react-slick';


class ProjectSlider extends React.Component {


  render(){
    const settings = {
      arrows: true,
      dots: true,
      className: 'project-slider',
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true
    };
    return (
      <div>
        <Slider {...settings} >

          <img src="https://placeimg.com/640/480/any"/>

          {/* <div>
            <img src="https://placeimg.com/640/480/arch"/>
          </div>
          <div>
          <img src="https://placeimg.com/640/480/nature"/>
        </div>
        <div>
        <img src="https://placeimg.com/640/480/animals"/>
      </div> */}
    </Slider>
  </div>
);
}
}

export default ProjectSlider;
