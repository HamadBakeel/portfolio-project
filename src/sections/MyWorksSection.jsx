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
        <div className="pt-10">
            <h2 className="title ml-6 mb-3">Some projects I worked on</h2>
            <div className="slider-controler">
                <div className="swiper-button-prev slider-arrow">
                    <MdKeyboardDoubleArrowLeft />
                </div>
                <div className="swiper-button-next slider-arrow">
                    <MdKeyboardDoubleArrowRight />
                </div>
            </div>
            <Swiper
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                grabCursor={true}
                loop={true}
                spaceBetween={20}
                slidesOffsetBefore={20}
                slidesPerView={1}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[Pagination, Navigation, Autoplay]}
                speed={700}
                breakpoints={{
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 40,
                    }
                  }}
                className="swiper_container"
            >
                <SwiperSlide>

                    <div className="img-container">
                        <div className="overlay">
                            <h3 className='font-bold'>Project title</h3>
                            <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur aut harum eum architecto quidem quae rerum assumenda est tempora odit magnam adipisci enim ex dolorem blanditiis, nostrum repellat ab cupiditate!</p>
                            <a href='#' className="">Visit website</a>
                        </div>
                        <img src="https://picsum.photos/200/300?random=1" />
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="img-container">
                        <div className="overlay">
                            <h3 className='font-bold'>Project title</h3>
                            <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur aut harum eum architecto quidem quae rerum assumenda est tempora odit magnam adipisci enim ex dolorem blanditiis, nostrum repellat ab cupiditate!</p>
                            <a href='#' className="">Visit website</a>
                        </div>
                        <img src="https://picsum.photos/200/300?random=2" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="img-container">
                        <div className="overlay">
                            <h3 className='font-bold'>Project title</h3>
                            <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur aut harum eum architecto quidem quae rerum assumenda est tempora odit magnam adipisci enim ex dolorem blanditiis, nostrum repellat ab cupiditate!</p>
                            <a href='#' className="">Visit website</a>
                        </div>
                        <img src="https://picsum.photos/200/300?random=3" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="img-container">
                        <div className="overlay">
                            <h3 className='font-bold'>Project title</h3>
                            <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur aut harum eum architecto quidem quae rerum assumenda est tempora odit magnam adipisci enim ex dolorem blanditiis, nostrum repellat ab cupiditate!</p>
                            <a href='#' className="">Visit website</a>
                        </div>
                        <img src="https://picsum.photos/200/300?random=4" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="img-container">
                        <div className="overlay">
                            <h3 className='font-bold'>Project title</h3>
                            <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur aut harum eum architecto quidem quae rerum assumenda est tempora odit magnam adipisci enim ex dolorem blanditiis, nostrum repellat ab cupiditate!</p>
                            <a href='#' className="">Visit website</a>
                        </div>
                        <img src="https://picsum.photos/200/300?random=5" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="img-container">
                        <div className="overlay">
                            <h3 className='font-bold'>Project title</h3>
                            <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur aut harum eum architecto quidem quae rerum assumenda est tempora odit magnam adipisci enim ex dolorem blanditiis, nostrum repellat ab cupiditate!</p>
                            <a href='#' className="">Visit website</a>
                        </div>
                        <img src="https://picsum.photos/200/300?random=6" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="img-container">
                        <div className="overlay">
                            <h3 className='font-bold'>Project title</h3>
                            <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur aut harum eum architecto quidem quae rerum assumenda est tempora odit magnam adipisci enim ex dolorem blanditiis, nostrum repellat ab cupiditate!</p>
                            <a href='#' className="">Visit website</a>
                        </div>
                        <img src="https://picsum.photos/200/300?random=7" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default MyWorksSection