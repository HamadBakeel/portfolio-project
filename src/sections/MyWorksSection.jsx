import React from 'react'
import '../swiperStyle.css'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper';
import Tilt from 'react-vanilla-tilt'
import { MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft } from 'react-icons/md';



function MyWorksSection() {
    return (
        <div className="py-10">
            <h2 className="title ml-6 mb-3">Some projects I worked on</h2>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
               
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                className="swiper_container"
            >
                <SwiperSlide>
                    <Tilt options={{ scale: 2, max: 25 }}>
                        <div className="img-container">
                            <img src="https://picsum.photos/200/300?random=1" />
                        </div>
                    </Tilt>
                </SwiperSlide>
                <SwiperSlide>
                    <Tilt options={{ scale: 2, max: 25 }}>
                        <div className="img-container">
                            <img src="https://picsum.photos/200/300?random=2" />
                        </div>
                    </Tilt>
                </SwiperSlide>
                <SwiperSlide>
                    <Tilt options={{ scale: 2, max: 25 }}>
                        <div className="img-container">
                            <img src="https://picsum.photos/200/300?random=3" />
                        </div>
                    </Tilt>
                </SwiperSlide>
                <SwiperSlide>
                    <Tilt options={{ scale: 2, max: 25 }}>
                        <div className="img-container">
                            <img src="https://picsum.photos/200/300?random=4" />
                        </div>
                    </Tilt>
                </SwiperSlide>
                <SwiperSlide>
                    <Tilt options={{ scale: 2, max: 25 }}>
                        <div className="img-container">
                            <img src="https://picsum.photos/200/300?random=5" />
                        </div>
                    </Tilt>
                </SwiperSlide>
                <SwiperSlide>
                    <Tilt options={{ scale: 2, max: 25 }}>
                        <div className="img-container">
                            <img src="https://picsum.photos/200/300?random=6" />
                        </div>
                    </Tilt>
                </SwiperSlide>
                <SwiperSlide>
                    <Tilt options={{ scale: 2, max: 25 }}>
                        <div className="img-container">
                            <img src="https://picsum.photos/200/300?random=7" />
                        </div>
                    </Tilt>
                </SwiperSlide>

                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <MdKeyboardDoubleArrowLeft/>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <MdKeyboardDoubleArrowRight/>
                    </div>
                </div>
            </Swiper>
        </div>
    )
}

export default MyWorksSection