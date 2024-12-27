

import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const images = [
  'https://i.ibb.co.com/WpfdLZY/m-tracking.png',
  'https://i.ibb.co.com/WpfdLZY/m-tracking.png',
  'https://i.ibb.co.com/WpfdLZY/m-tracking.png',
  'https://i.ibb.co.com/WpfdLZY/m-tracking.png',
  'https://i.ibb.co.com/WpfdLZY/m-tracking.png',
  'https://i.ibb.co.com/WpfdLZY/m-tracking.png'
];

const Hero = () => {
    return (
      <div className="slide-container">
        <Zoom scale={0.4}>
          {
            images.map((each, index) => <img key={index} style={{width: "100%"}} src={each} />)
          }
        </Zoom>
      </div>
    )
}
export default Hero;
