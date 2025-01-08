import React from 'react';
import Swiper from 'react-id-swiper';  // Import react-id-swiper
import 'swiper/swiper-bundle.min.css';

const Hero = () => {
  return (
    <div className='mt-44'>
      <Swiper>
        <div>
          <img className='max-w-full'
            src="https://i.ibb.co.com/sKs6Mpd/AC-service.png"
            alt="AC Servicing"
          />
        </div>
        <div>
          <img
            src="https://i.ibb.co.com/sKs6Mpd/AC-service.png"
            alt="AC Servicing"
          />
        </div>
        <div>
          <img
            src="https://i.ibb.co.com/sKs6Mpd/AC-service.png"
            alt="AC Servicing"
          />
        </div>
        <div>
          <img
            src="https://i.ibb.co.com/sKs6Mpd/AC-service.png"
            alt="AC Servicing"
          />
        </div>
        <div>
          <img
            src="https://i.ibb.co.com/sKs6Mpd/AC-service.png"
            alt="AC Servicing"
          />
        </div>
      </Swiper>
    </div>
  );
};

export default Hero;
