import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import Slide from './Slide'

import bg_img1 from '../assets/image/carousel_11.jpg'
import bg_img2 from '../assets/image/carousel_22.jpg'
import bg_img3 from '../assets/image/carousel_33.jpg'

const SwiperSlider = () => {
    return (
        <div className='container mx-auto'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
          <Slide
            image={bg_img1}
            text='Organize Your Marathon Events Effortlessly in Minutes!'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bg_img2}
            text='Run Your Marathon Events, We Handle the Rest!'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bg_img3}
            text='Effortless Marathon Management, One Dash at a Time!'
          />
        </SwiperSlide>
      </Swiper>
    </div>
    );
};

export default SwiperSlider;