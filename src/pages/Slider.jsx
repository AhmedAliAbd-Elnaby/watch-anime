import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay} from 'swiper/modules'
import {
  anime1,
  anime2,
  anime3,
  anime4,
} from '../assets'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
export default function 
() {
  return (
    <div>
        <Swiper
modules={[Autoplay]}
      spaceBetween={2}
      slidesPerView={4}
    //   onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
                  loop={true}
                  autoplay={{ 
                    delay: 2000,
                    pauseOnMouseEnter : true,
                  }}
    >
      <SwiperSlide>
        <div className='movie-card'>
          <img src={anime1.img} alt="" />
          <p>{anime1.name}</p>
          <span>Rating : {anime1.rating}</span>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='movie-card'>
          <img src={anime1.img} alt="" />
          <p>{anime1.name}</p>
          <span>Rating : {anime1.rating}</span>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='movie-card'>
          <img src={anime1.img} alt="" />
          <p>{anime1.name}</p>
          <span>Rating : {anime1.rating}</span>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='movie-card'>
          <img src={anime1.img} alt="" />
          <p>{anime1.name}</p>
          <span>Rating : {anime1.rating}</span>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='movie-card'>
          <img src={anime1.img} alt="" />
          <p>{anime1.name}</p>
          <span>Rating : {anime1.rating}</span>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='movie-card'>
          <img src={anime1.img} alt="" />
          <p>{anime1.name}</p>
          <span>Rating : {anime1.rating}</span>
        </div>
        </SwiperSlide>
    </Swiper>
    </div>
  )
}
