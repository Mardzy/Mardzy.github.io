import React from 'react';
import Slider from 'react-slick';

function SampleNextArrow(props) {
  const {className, style, onClick} = props;
  return (
    <div
      className={className}
      style={{...style, display: 'block', background: 'red'}}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props) {
  const {className, style, onClick} = props;
  return (
    <div
      className={className}
      style={{...style, display: 'block', background: 'green'}}
      onClick={onClick}
    ></div>
  );
}

class ProjectSlider extends React.Component {


  render(){
    const settings = {
      arrows: true,
      dots: true,
      className: 'project-slider',
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      autoplay: false
    };
    return (
      <Slider {...settings} >
        <div>
          <img src="https://placeimg.com/640/480/any"/>
        </div>
        <div>
          <img src="https://placeimg.com/640/480/arch"/>
        </div>
        <div>
          <img src="https://placeimg.com/640/480/nature"/>
        </div>
        <div>
          <img src="https://placeimg.com/640/480/animals"/>
        </div>
      </Slider>
    );
  }
}

export default ProjectSlider;
