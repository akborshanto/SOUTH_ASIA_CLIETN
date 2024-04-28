import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

//import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const HomeSlider = () => {
  return (
    <div>
    <Swiper
    spaceBetween={30}
    centeredSlides={true}
    autoplay={{
      delay: 2000,
      disableOnInteraction: false,
    }}
    pagination={{
      clickable: true,
    }}
    navigation={true}
    modules={[Autoplay, Pagination, Navigation]}
    className="mySwiper" 
  >
    <SwiperSlide>
    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://img.freepik.com/free-photo/wat-arun-temple-bangkok-thailand_335224-972.jpg?t=st=1714240715~exp=1714244315~hmac=21fce014b780f1b1c56289f2ab1d831120b6cde9e3622e0bd3c654b89351d112&w=900)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">THAILAND</h1>
      <p className="mb-5">Travelling in Thailand doesn't have to break the bank. In fact, it's one of the most budget-friendly destinations..</p>

    </div>
  </div>
</div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://img.freepik.com/free-photo/beautiful-architecture-building-exterior-singapore-city_74190-9943.jpg?t=st=1714240980~exp=1714244580~hmac=6b5c6ba614dcd974b4e6645ca968704f79330312da1d58e76de36bccc86694fd&w=900)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">MALAYSIA</h1>
      <p className="mb-5">Malaysia represents fantastic value for money at almost all levels. Costs for food, lodging, fuel and internal transportation are very reasonable.</p>

    </div>
  </div>
</div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://img.freepik.com/free-photo/young-girl-steps-house-tree-sunrise-nusa-penida-island-bali-indonesia_335224-350.jpg?t=st=1714241126~exp=1714244726~hmac=c2f36ee6a2cb75af916714f3f719e0f74343df3d25ce1e5e51d08150eccb8baa&w=900)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">INDONESIA</h1>
      <p className="mb-5">Indonesia is known for its diverse tourist attractions. The country has an endless list of wonderful tourist places,.</p>

    </div>
  </div>
</div>
    </SwiperSlide>


  </Swiper>
    </div>
  )
}

export default HomeSlider
