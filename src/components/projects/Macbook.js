import React from 'react';
// import ProjectSlider from './ProjectSlider';

const Macbook = () => {


  // const events = {
  //   onChanged: function(event) {...}
  // };

  return (
    <div className='pca-hold'>
      <div className='pca-main'>
        <div className='pca-inner'>
          {/* <ProjectSlider /> */}

          <div><img src="https://placeimg.com/640/480/animals"/></div>

        </div>{/* <!-- 'pca-inner' --> */}
      </div>{/*<!-- 'pca-main' --> */}
      <div className='pca-sub'>
        <div className='pca-top'></div>
        <div className='pca-mid'>
          <div className='pca-part'></div>
        </div>{/* <!-- 'pca-mid' --> */}
        <div className='pca-bot'></div>
      </div>{/* <!-- 'pca-bot' --> */}
    </div>
  );
};

export default Macbook;
