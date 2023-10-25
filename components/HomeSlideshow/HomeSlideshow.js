import React from "react";

// NEXT IMPORTS
import Image from "next/image";

// SWIPER IMPORTS
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper";

// IMPORT IMAGES
import image1 from "../../public/_home/images/slideshow/compressed/image1.webp";
import image2 from "../../public/_home/images/slideshow/compressed/image2.webp";
import image3 from "../../public/_home/images/slideshow/compressed/image3.webp";
import image4 from "../../public/_home/images/slideshow/compressed/image4.webp";
import image5 from "../../public/_home/images/slideshow/compressed/image5.webp";
import image6 from "../../public/_home/images/slideshow/compressed/image6.webp";
import image7 from "../../public/_home/images/slideshow/compressed/image7.webp";
import image8 from "../../public/_home/images/slideshow/compressed/image8.webp";
import image9 from "../../public/_home/images/slideshow/compressed/image9.webp";
import image10 from "../../public/_home/images/slideshow/compressed/image10.webp";
import image11 from "../../public/_home/images/slideshow/compressed/image11.webp";
import image12 from "../../public/_home/images/slideshow/compressed/image12.webp";
import image13 from "../../public/_home/images/slideshow/compressed/image13.webp";
import image14 from "../../public/_home/images/slideshow/compressed/image14.webp";
import image15 from "../../public/_home/images/slideshow/compressed/image15.webp";
import image16 from "../../public/_home/images/slideshow/compressed/image16.webp";
import image17 from "../../public/_home/images/slideshow/compressed/image17.webp";
import image18 from "../../public/_home/images/slideshow/compressed/image18.webp";
import image19 from "../../public/_home/images/slideshow/compressed/image19.webp";
import image20 from "../../public/_home/images/slideshow/compressed/image20.JPEG";
import image21 from "../../public/_home/images/slideshow/compressed/image21.webp";
import image22 from "../../public/_home/images/slideshow/compressed/image22.webp";
import image23 from "../../public/_home/images/slideshow/compressed/image23.webp";
import image24 from "../../public/_home/images/slideshow/compressed/image24.webp";
import image25 from "../../public/_home/images/slideshow/compressed/image25.webp";
import image26 from "../../public/_home/images/slideshow/compressed/image26.webp";


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
              <Image
                alt="ifg slide show image"
                className="h-48 w-full rounded-lg !object-cover !object-top"
                src={image1}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                alt="ifg slide show image"
                className="h-48 w-full rounded-lg !object-cover !object-top"
                src={image2}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                alt="ifg slide show image"
                className="h-48 w-full rounded-lg !object-cover !object-top"
                src={image3}
              />
            </SwiperSlide>
            <SwiperSlide>
            <Image
                alt="ifg slide show image"
                className="h-48 w-full rounded-lg !object-cover !object-top"
                src={image4}
              />
            </SwiperSlide>
            <SwiperSlide>
            <Image
                alt="ifg slide show image"
                className="h-48 w-full rounded-lg !object-cover !object-top"
                src={image5}
              />
            </SwiperSlide>
            <SwiperSlide>
            <Image
                alt="ifg slide show image"
                className="h-48 w-full rounded-lg !object-cover !object-top"
                src={image6}
              />
            </SwiperSlide>
            <SwiperSlide>
            <Image
                alt="ifg slide show image"
                className="h-48 w-full rounded-lg !object-cover !object-top"
                src={image7}
              />
            </SwiperSlide>
            <SwiperSlide>
            <Image
                alt="ifg slide show image"
                className="h-48 w-full rounded-lg !object-cover !object-top"
                src={image8}
              />
            </SwiperSlide>
            <SwiperSlide>
            <Image
                alt="ifg slide show image"
                className="h-48 w-full rounded-lg !object-cover !object-top"
                src={image9}
              />
            </SwiperSlide>
            <SwiperSlide>
            <Image
                alt="ifg slide show image"
                className="h-48 w-full rounded-lg !object-cover !object-top"
                src={image10}
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
            <Image
                alt="ifg slide show image"
                className="h-48 w-full rounded-lg !object-cover !object-top"
                src={image11}
              />
            </SwiperSlide>
            <SwiperSlide>
            <Image
                alt="ifg slide show image"
                className="h-48 w-full rounded-lg !object-cover !object-top"
                src={image12}
              />
            </SwiperSlide>
            <SwiperSlide>
            <Image
                alt="ifg slide show image"
                className="h-48 w-full rounded-lg !object-cover !object-top"
                src={image13}
              />
            </SwiperSlide>
            <SwiperSlide>
            <Image
                alt="ifg slide show image"
                className="h-48 w-full rounded-lg !object-cover !object-top"
                src={image14}
              />
            </SwiperSlide>
            <SwiperSlide>
            <Image
                alt="ifg slide show image"
                className="h-48 w-full rounded-lg !object-cover !object-top"
                src={image15}
              />
            </SwiperSlide>
            <SwiperSlide>
            <Image
                alt="ifg slide show image"
                className="h-48 w-full rounded-lg !object-cover !object-top"
                src={image16}
              />
            </SwiperSlide>
            <SwiperSlide>
            <Image
                alt="ifg slide show image"
                className="h-48 w-full rounded-lg !object-cover !object-top"
                src={image17}
              />
            </SwiperSlide>
            <SwiperSlide>
            <Image
                alt="ifg slide show image"
                className="h-48 w-full rounded-lg !object-cover !object-top"
                src={image18}
              />
            </SwiperSlide>
            <SwiperSlide>
            <Image
                alt="ifg slide show image"
                className="h-48 w-full rounded-lg !object-cover !object-top"
                src={image19}
              />
            </SwiperSlide>
            <SwiperSlide>
            <Image
                alt="ifg slide show image"
                className="h-48 w-full rounded-lg !object-cover !object-top"
                src={image20}
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
            <Image
                alt="ifg slide show image"
                className="h-48 w-full rounded-lg !object-cover !object-top"
                src={image21}
              />
            </SwiperSlide>
            <SwiperSlide>
            <Image
                alt="ifg slide show image"
                className="h-48 w-full rounded-lg !object-cover !object-top"
                src={image22}
              />
            </SwiperSlide>
            <SwiperSlide>
            <Image
                alt="ifg slide show image"
                className="h-48 w-full rounded-lg !object-cover !object-top"
                src={image23}
              />
            </SwiperSlide>
            <SwiperSlide>
            <Image
                alt="ifg slide show image"
                className="h-48 w-full rounded-lg !object-cover !object-top"
                src={image24}
              />
            </SwiperSlide>
            <SwiperSlide>
            <Image
                alt="ifg slide show image"
                className="h-48 w-full rounded-lg !object-cover !object-top"
                src={image25}
              />
            </SwiperSlide>
            <SwiperSlide>
            <Image
                alt="ifg slide show image"
                className="h-48 w-full rounded-lg !object-cover !object-top"
                src={image26}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default HomeSlideshow;
