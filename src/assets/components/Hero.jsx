import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules'; // Ensure correct version import

const Hero = () => {
  return (
    <div className=" shadow-[0px_4px_6px_rgba(0,0,0,0.3)]">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
      >
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-full h-[300px] object-cover"
              src="https://i.ibb.co/sKs6Mpd/AC-service.png"
              alt="AC Servicing"
            />
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
              Welcome
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-full h-[300px] object-cover"
              src="https://i.ibb.co/sKs6Mpd/AC-service.png"
              alt="AC Servicing"
            />
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
              Welcome
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-full h-[300px] object-cover"
              src="https://i.ibb.co/sKs6Mpd/AC-service.png"
              alt="AC Servicing"
            />
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
              Welcome
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
  
};

export default Hero;
