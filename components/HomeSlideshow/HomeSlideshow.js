import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/effect-fade";

import { EffectFade, Autoplay } from "swiper";

const HomeSlideshow = () => {
  return (
    <>
      <div className="my-4 grid grid-cols-2 grid-rows-2 gap-4 lg:my-0 lg:w-1/2">
        <div className="col-start-1 row-start-1 rounded-lg">
          <Swiper
            slidesPerView={1}
            centeredSlides={true}
            effect={"fade"}
            fadeEffect={{
              crossFade: true,
            }}
            speed={1500}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[EffectFade, Autoplay]}
            className="col-start-1 row-start-1 rounded-lg"
          >
            <SwiperSlide>
              <img
                alt="ifg slide show image"
                className="h-48 w-full rounded-lg !object-cover !object-top"
                src={`/home/slideshow/ifg-slide-show1-compressed.webp`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="ifg slide show image"
                className="h-48 w-full rounded-lg !object-cover !object-top"
                src={`/home/slideshow/ifg-slide-show2-compressed.webp`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="ifg slide show image"
                className="h-48 w-full rounded-lg !object-cover !object-top"
                src={`/home/slideshow/ifg-slide-show3-compressed.webp`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="ifg slide show image"
                className="h-48 w-full rounded-lg !object-cover !object-top"
                src={`/home/slideshow/ifg-slide-show4-compressed.webp`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="ifg slide show image"
                className="h-48 w-full rounded-lg !object-cover !object-top"
                src={`/home/slideshow/ifg-slide-show5-compressed.webp`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="ifg slide show image"
                className="h-48 w-full rounded-lg !object-cover !object-top"
                src={`/home/slideshow/ifg-slide-show6-compressed.webp`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="ifg slide show image"
                className="h-48 w-full rounded-lg !object-cover !object-top"
                src={`/home/slideshow/ifg-slide-show7-compressed.webp`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="ifg slide show image"
                className="h-48 w-full rounded-lg !object-cover !object-top"
                src={`/home/slideshow/ifg-slide-show8-compressed.webp`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="ifg slide show image"
                className="h-48 w-full rounded-lg !object-cover !object-top"
                src={`/home/slideshow/ifg-slide-show9-compressed.webp`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="ifg slide show image"
                className="h-48 w-full rounded-lg !object-cover !object-top"
                src={`/home/slideshow/ifg-slide-show10-compressed.webp`}
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="col-start-2 row-start-1 rounded-lg">
          <Swiper
            slidesPerView={1}
            centeredSlides={true}
            effect={"fade"}
            speed={1500}
            fadeEffect={{
              crossFade: true,
            }}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            modules={[EffectFade, Autoplay]}
          >
            <SwiperSlide>
              <img
                alt="ifg slide show image"
                className="h-48 w-full rounded-lg !object-cover !object-top"
                src={`/home/slideshow/ifg-slide-show11-compressed.webp`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="ifg slide show image"
                className="h-48 w-full rounded-lg !object-cover !object-top"
                src={`/home/slideshow/ifg-slide-show12-compressed.webp`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="ifg slide show image"
                className="h-48 w-full rounded-lg !object-cover !object-top"
                src={`/home/slideshow/ifg-slide-show13-compressed.webp`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="ifg slide show image"
                className="h-48 w-full rounded-lg !object-cover !object-top"
                src={`/home/slideshow/ifg-slide-show14-compressed.webp`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="ifg slide show image"
                className="h-48 w-full rounded-lg !object-cover !object-top"
                src={`/home/slideshow/ifg-slide-show15-compressed.webp`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="ifg slide show image"
                className="h-48 w-full rounded-lg !object-cover !object-top"
                src={`/home/slideshow/ifg-slide-show16-compressed.webp`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="ifg slide show image"
                className="h-48 w-full rounded-lg !object-cover !object-top"
                src={`/home/slideshow/ifg-slide-show17-compressed.webp`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="ifg slide show image"
                className="h-48 w-full rounded-lg !object-cover !object-bottom"
                src={`/home/slideshow/ifg-slide-show18-compressed.webp`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="ifg slide show image"
                className="h-48 w-full rounded-lg !object-cover !object-top"
                src={`/home/slideshow/ifg-slide-show19-compressed.webp`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="ifg slide show image"
                className="h-48 w-full rounded-lg !object-cover !object-top"
                src={`/home/slideshow/ifg-slide-show20-compressed.webp`}
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="col-span-2 row-start-2 rounded-lg">
          <Swiper
            slidesPerView={1}
            centeredSlides={true}
            effect={"fade"}
            speed={1500}
            fadeEffect={{
              crossFade: true,
            }}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            modules={[EffectFade, Autoplay]}
          >
            <SwiperSlide>
              <img
                alt="ifg slide show image"
                className="h-48 w-full rounded-lg !object-cover  !object-center"
                src={`/home/slideshow/ifg-slide-show21-compressed.webp`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="ifg slide show image"
                className="h-48 w-full rounded-lg !object-cover !object-top"
                src={`/home/slideshow/ifg-slide-show22-compressed.webp`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="ifg slide show image"
                className="h-48 w-full rounded-lg !object-cover !object-top"
                src={`/home/slideshow/ifg-slide-show23-compressed.webp`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="ifg slide show image"
                className="h-48 w-full rounded-lg !object-cover !object-top"
                src={`/home/slideshow/ifg-slide-show24-compressed.webp`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="ifg slide show image"
                className="h-48 w-full rounded-lg !object-cover !object-center"
                src={`/home/slideshow/ifg-slide-show27-compressed.webp`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="ifg slide show image"
                className="h-48 w-full rounded-lg !object-cover !object-center"
                src={`/home/slideshow/ifg-slide-show28-compressed.webp`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="ifg slide show image"
                className="h-48 w-full rounded-lg !object-cover !object-top"
                src={`/home/slideshow/ifg-slide-show29-compressed.webp`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="ifg slide show image"
                className="h-48 w-full rounded-lg !object-cover !object-bottom"
                src={`/home/slideshow/ifg-slide-show30-compressed.webp`}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default HomeSlideshow;
