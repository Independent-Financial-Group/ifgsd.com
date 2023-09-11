import React from 'react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/effect-fade';

import { EffectFade, Autoplay } from 'swiper'

const Stats = ({content}) => {

    return (
        <>
            <p className='text-4xl lg:text-[80px] text-[#E2E7EB] font-bold lg:absolute lg:z-0 lg:bottom-80'>integrity. balance.</p>
            <p className='text-4xl mb-16 lg:mb-0 lg:text-[80px] text-[#E2E7EB] font-bold lg:absolute lg:z-0 lg:bottom-64'>independence.</p>
            <div className='lg:flex lg:gap-x-4'>
                <div className='lg:max-w-prose'>
                    <h2 className="font-bold text-hazard-blue-500 sm:text-2xl lg:text-4xl">
                        {content.heading}
                    </h2>

                    <p className="my-4 text-gray-500 sm:text-xl">{content.paragraph}</p>
                    <Link className='font-bold bg-neon-orange-500 py-2 px-4 rounded-lg text-seabreeze-500' href="/about/our-story">Our Story</Link>
                </div>
                <div className='my-4 lg:my-0 lg:w-1/2 grid grid-rows-2 grid-cols-2 gap-4'>
                    <div className='row-start-1 col-start-1 rounded-lg'>
                        <Swiper
                            slidesPerView={1}
                            centeredSlides={true}
                            effect={'fade'}
                            fadeEffect={{
                                crossFade: true
                            }}
                            speed={1500}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false
                            }}
                            modules={[EffectFade, Autoplay]}
                            className="row-start-1 col-start-1 rounded-lg"
                        >
                            <SwiperSlide>
                                <img alt="ifg slide show image" className='w-full h-48 !object-cover !object-top rounded-lg' src={`/home/slideshow/ifg-slide-show1-compressed.webp`} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img alt="ifg slide show image" className='w-full h-48 !object-cover !object-top rounded-lg' src={`/home/slideshow/ifg-slide-show2-compressed.webp`} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img alt="ifg slide show image" className='w-full h-48 !object-cover !object-top rounded-lg' src={`/home/slideshow/ifg-slide-show3-compressed.webp`} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img alt="ifg slide show image" className='w-full h-48 !object-cover !object-top rounded-lg' src={`/home/slideshow/ifg-slide-show4-compressed.webp`} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img alt="ifg slide show image" className='w-full h-48 !object-cover !object-top rounded-lg' src={`/home/slideshow/ifg-slide-show5-compressed.webp`} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img alt="ifg slide show image" className='w-full h-48 !object-cover !object-top rounded-lg' src={`/home/slideshow/ifg-slide-show6-compressed.webp`} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img alt="ifg slide show image" className='w-full h-48 !object-cover !object-top rounded-lg' src={`/home/slideshow/ifg-slide-show7-compressed.webp`} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img alt="ifg slide show image" className='w-full h-48 !object-cover !object-top rounded-lg' src={`/home/slideshow/ifg-slide-show8-compressed.webp`} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img alt="ifg slide show image" className='w-full h-48 !object-cover !object-top rounded-lg' src={`/home/slideshow/ifg-slide-show9-compressed.webp`} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img alt="ifg slide show image" className='w-full h-48 !object-cover !object-top rounded-lg' src={`/home/slideshow/ifg-slide-show10-compressed.webp`} />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className='row-start-1 col-start-2 rounded-lg'>
                        <Swiper
                            slidesPerView={1}
                            centeredSlides={true}
                            effect={'fade'}
                            speed={1500}
                            fadeEffect={{
                                crossFade: true
                            }}
                            autoplay={{
                                delay: 1000,
                                disableOnInteraction: false
                            }}
                            modules={[EffectFade, Autoplay]}
                        >
                            <SwiperSlide>
                                <img alt="ifg slide show image" className='w-full h-48 !object-cover !object-top rounded-lg' src={`/home/slideshow/ifg-slide-show11-compressed.webp`} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img alt="ifg slide show image" className='w-full h-48 !object-cover !object-top rounded-lg' src={`/home/slideshow/ifg-slide-show12-compressed.webp`} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img alt="ifg slide show image" className='w-full h-48 !object-cover !object-top rounded-lg' src={`/home/slideshow/ifg-slide-show13-compressed.webp`} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img alt="ifg slide show image" className='w-full h-48 !object-cover !object-top rounded-lg' src={`/home/slideshow/ifg-slide-show14-compressed.webp`} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img alt="ifg slide show image" className='w-full h-48 !object-cover !object-top rounded-lg' src={`/home/slideshow/ifg-slide-show15-compressed.webp`} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img alt="ifg slide show image" className='w-full h-48 !object-cover !object-top rounded-lg' src={`/home/slideshow/ifg-slide-show16-compressed.webp`} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img alt="ifg slide show image" className='w-full h-48 !object-cover !object-top rounded-lg' src={`/home/slideshow/ifg-slide-show17-compressed.webp`} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img alt="ifg slide show image" className='w-full h-48 !object-cover !object-bottom rounded-lg' src={`/home/slideshow/ifg-slide-show18-compressed.webp`} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img alt="ifg slide show image" className='w-full h-48 !object-cover !object-top rounded-lg' src={`/home/slideshow/ifg-slide-show19-compressed.webp`} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img alt="ifg slide show image" className='w-full h-48 !object-cover !object-top rounded-lg' src={`/home/slideshow/ifg-slide-show20-compressed.webp`} />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className='row-start-2 col-span-2 rounded-lg'>
                        <Swiper
                            slidesPerView={1}
                            centeredSlides={true}
                            effect={'fade'}
                            speed={1500}
                            fadeEffect={{
                                crossFade: true
                            }}
                            autoplay={{
                                delay: 1500,
                                disableOnInteraction: false
                            }}
                            modules={[EffectFade, Autoplay]}
                        >
                                                        <SwiperSlide>
                                <img alt="ifg slide show image" className='w-full h-48 !object-cover !object-center  rounded-lg' src={`/home/slideshow/ifg-slide-show21-compressed.webp`} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img alt="ifg slide show image" className='w-full h-48 !object-cover !object-top rounded-lg' src={`/home/slideshow/ifg-slide-show22-compressed.webp`} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img alt="ifg slide show image" className='w-full h-48 !object-cover !object-top rounded-lg' src={`/home/slideshow/ifg-slide-show23-compressed.webp`} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img alt="ifg slide show image" className='w-full h-48 !object-cover !object-top rounded-lg' src={`/home/slideshow/ifg-slide-show24-compressed.webp`} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img alt="ifg slide show image" className='w-full h-48 !object-cover !object-top rounded-lg' src={`/home/slideshow/ifg-slide-show25-compressed.webp`} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img alt="ifg slide show image" className='w-full h-48 !object-cover !object-top rounded-lg' src={`/home/slideshow/ifg-slide-show26-compressed.webp`} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img alt="ifg slide show image" className='w-full h-48 !object-cover !object-center rounded-lg' src={`/home/slideshow/ifg-slide-show27-compressed.webp`} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img alt="ifg slide show image" className='w-full h-48 !object-cover !object-center rounded-lg' src={`/home/slideshow/ifg-slide-show28-compressed.webp`} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img alt="ifg slide show image" className='w-full h-48 !object-cover !object-top rounded-lg' src={`/home/slideshow/ifg-slide-show29-compressed.webp`} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img alt="ifg slide show image" className='w-full h-48 !object-cover !object-bottom rounded-lg' src={`/home/slideshow/ifg-slide-show30-compressed.webp`} />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
            <div className="lg:mt-60">
                <h2 className='text-center lg:text-left text-4xl font-bold text-hazard-blue-500 py-8 lg:py-0'>Rankings</h2>
                <dl className="flex font-bold">
                    <div
                        className="flex flex-col lg:flex-row justify-center items-center"
                    >
                        <dt className="order-last text-xs mt-4 text-center lg:text-left lg:text-lg text-neon-orange-500">
                            Largest Independent Broker-Dealer*
                        </dt>

                        <dd>
                            <img className='max-w-fit' src="/home/award-ribbon-1.png" />
                        </dd>
                    </div>

                    <div
                        className="flex flex-col lg:flex-row items-center"
                    >
                        <dt className="order-last text-xs mt-4 text-center lg:text-left lg:text-lg text-neon-orange-500">
                            Overall Experience Satisfaction**
                        </dt>

                        <dd>
                            <img className='max-w-fit' src="/home/award-ribbon-2.png" />
                        </dd>
                    </div>

                    <div
                        className="flex flex-col lg:flex-row items-center"
                    >
                        <dt className="order-last text-xs mt-4 text-center lg:text-left lg:text-lg text-neon-orange-500">
                            Largest Privately Held Company in San Diego***
                        </dt>

                        <dd>
                            <img className='max-w-fit' src="/home/award-ribbon-3.png" />
                        </dd>
                    </div>
                </dl>
            </div>
        </>
    )
}

export default Stats