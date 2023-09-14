'use client'
import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './MovieSwiper.css';

const MovieSwiper = () => {
    return (
        <Swiper className='swiper1'
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            loop={true}
            autoplay={{delay:2500, disableOnInteraction: false}}
            navigation
            onSlideChange={() => console.log('slide change')}
        >
            {/* <SwiperSlide><img src="/img/titIC.png" alt="slide" /></SwiperSlide> */}
            <SwiperSlide className='banner__img'><img src="/img/slide01.jpg" alt="slide" /></SwiperSlide>
            <SwiperSlide className='banner__img'><img src="/img/slide02.jpg" alt="slide" /></SwiperSlide>
            <SwiperSlide className='banner__img'><img src="/img/slide03.jpg" alt="slide" /></SwiperSlide>
            <SwiperSlide className='banner__img'><img src="/img/slide04.jpg" alt="slide" /></SwiperSlide>
      </Swiper>
    );
};

export default MovieSwiper;