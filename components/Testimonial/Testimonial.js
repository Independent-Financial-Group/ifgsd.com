import React, { useEffect } from "react";

// SWIPER
import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";

// GRAPHICS
import squiggle from "../../public/_home/graphics/squiggle.png"

// NEXT IMPORTS
import Image from "next/image";

const Testimonial = ({ content, testimonials }) => {
  useEffect(() => {
    const swiper = new Swiper(".swiper-container", {
      modules: [Navigation, Pagination, Autoplay],
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
      autoplay: {
        delay: 5000,
      },
      breakpoints: {
        640: {
          centeredSlides: true,
          slidesPerView: 1,
        },
        1024: {
          centeredSlides: false,
          slidesPerView: 1,
        },
      },
      navigation: {
        nextEl: ".next-button",
        prevEl: ".prev-button",
      },
    });
  }, []);

  return (
    <>
      <div>
        <div className="items-center lg:grid lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8">
          <div className="lg:col-span-1 ">
            <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
              <iframe
                src="https://player.vimeo.com/video/857208581?h=59ff69fde7&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;loop=1&amp;muted=1"
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                title="IFG 20th Anniversary"
              ></iframe>
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>
            <img
              src="/graphicAssets/ornament-2.png"
              alt="ornament"
              className="absolute -left-16 bottom-12 -z-10"
            />
          </div>

          <div className="relative mb-16 lg:col-span-1 lg:mx-0">
            <div className="flex flex-row items-center">
              <button className="prev-button hidden rounded-full border border-neon-orange-500  p-3 text-neon-orange-500 hover:bg-neon-orange-500 hover:text-white lg:block">
                <span className="sr-only">Previous Slide</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-5 w-5 rtl:rotate-180"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
              <Image
                  src={squiggle}
                  alt="decoration"
                  className="absolute right-0 -top-10 z-10"
                />

              <div className=" swiper-container mx-5 !overflow-hidden rounded-[20px] bg-gradient-to-b from-hazard-blue-500 to-blue-wave-300 p-4 relative">
                <div className="swiper-wrapper">
                  {testimonials.map((testimonial) => {
                    return (
                      <div
                        key={testimonial.headshot.sys.id}
                        className="swiper-slide !h-fit lg:!min-h-[500px]"
                      >
                        <blockquote className="flex h-full flex-col justify-between px-4">
                          <div>
                            <div className="mt-4>">
                              <h3 className="text-2xl font-bold text-seabreeze-500 sm:text-3xl">
                                {testimonial.heading}
                              </h3>
                              <p className="mt-4 leading-relaxed text-seabreeze-500 lg:max-w-prose">
                                {testimonial.paragraph}
                              </p>
                            </div>
                          </div>
                          <footer className="mt-8 flex items-center gap-3 text-sm text-gray-500">
                            <div>
                              <p className="text-right text-base font-bold text-seabreeze-500">
                                {testimonial.fullName}
                              </p>
                              <p className="text-right text-sm font-semibold text-seabreeze-500">
                                {testimonial.state}
                              </p>
                            </div>
                            <Image
                              src={`https:${testimonial.headshot.fields.file.url}`}
                              width={80}
                              height={80}
                              alt={testimonial.headshot.fields.title}
                              className="rounded-full"
                            />
                          </footer>
                        </blockquote>
                      </div>
                    );
                  })}
                </div>
              </div>

              <button className="next-button hidden rounded-full border border-neon-orange-500 p-3 text-neon-orange-500 hover:bg-neon-orange-500 hover:text-white lg:block">
                <span className="sr-only">Next Slide</span>
                <svg
                  className="h-5 w-5 rtl:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
