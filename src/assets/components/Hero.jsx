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
              className="w-full h-[400px] object-cover"
              src="https://i.ibb.co/sKs6Mpd/AC-service.png"
              alt="AC Servicing"
            />
<div className="absolute inset-0 bg-gradient-to-r from-black via-black-800 to-[#000000] opacity-70"></div>
<div className='absolute inset-0 flex flex-col items-center justify-center'>
            <h1 className=" text-white text-4xl font-bold">
            Welcome to Fixed It!
            </h1>
            <p className='text-white'>Your one-stop destination for every solution you need to fix anything and everything.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-full h-[400px] object-cover"
              src="https://i.ibb.co.com/kH2hb42/carwash.jpg"
              alt="car Servicing"
            />
              <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className='absolute inset-0 flex flex-col items-center justify-center'>
            <h1 className=" text-white text-4xl font-bold">
            Welcome to Fixed It!
            </h1>
            <p className='text-white'>Your one-stop destination for every solution you need to fix anything and everything.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-full h-[400px] object-cover"
              src="https://i.ibb.co.com/vv1pvsm/laptop.png"
              alt="laptop"
            />
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <div className='absolute inset-0 flex flex-col items-center justify-center'>
            <h1 className=" text-white text-4xl font-bold">
            Welcome to Fixed It!
            </h1>
            <p className='text-white'>Your one-stop destination for every solution you need to fix anything and everything.</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
  
};

export default Hero;
