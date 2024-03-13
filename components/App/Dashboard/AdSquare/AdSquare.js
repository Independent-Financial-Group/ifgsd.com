import React from "react";

// SWIPER IMPORTS
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper";

const AdSquare = () => {
  const ads = [
    {
      name: "Nationwide AD",
      url: "https://mdfarmbureau.com/wp-content/uploads/2018/11/AFO-1105AO_893x893_Farm-Bureau-Co-Branding.jpg",
      description: "Nationwide Ad",
      link: "https://nationwide.com",
    },
    {
      name: "State Street Ad",
      url: "https://images.ctfassets.net/9lvru9ro1ti1/2jE7Kq7unjS3szJ8hZV82P/2a90b7f66fbd754529c18a04b96b9098/statestreet_ad.png",
      description: "Ad for July/August 2023",
      link: "https://www.ssga.com/us/en/intermediary/etfs",
    },
    {
      name: "Angel Oak Ad",
      url: "https://images.ctfassets.net/9lvru9ro1ti1/2LoF86iaGYpoJ2F8oD3fic/1a0cc884b779330840d6c42cbf2fc6da/Angel_Oak_Ad.png",
      description: "Ad for July/August 2023",
      link: "https://angeloakcapital.com/",
    },
  ];

  return (
    <div className="col-span-7">
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        effect={"fade"}
        fadeEffect={{
          crossFade: true,
        }}
        speed={1500}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay]}
      >
        {ads.map((ad) => {
          return (
            <SwiperSlide key={ad.link}>
              <a
                key={ad.name}
                href={ad.link}
                target="_blank"
                rel="noopener"
                className="bg-red block w-full"
              >
                <img
                  src={ad.url}
                  alt={ad.description}
                  className="mx-auto h-[500px] w-full rounded-lg  object-cover"
                />
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default AdSquare;
