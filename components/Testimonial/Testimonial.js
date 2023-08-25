import React, { useEffect } from 'react'
import Head from 'next/head'
import Script from 'next/script'
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/css'

import quotes from '../../public/quotes.png'
import Image from 'next/image'

const Testimonial = () => {

    useEffect(() => {
        const swiper = new Swiper('.swiper-container', {
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
                nextEl: '.next-button',
                prevEl: '.prev-button',
            },
        })
    }, [])

    return (
        <>
            <div>
                <div className='mx-auto text-center max-w-prose'>
                    <h2 className=' lg:text-2xl font-bold text-dunkel-blue-500'>Don't just take our word for it!</h2>
                    <h3 className='lg:text-6xl font-bold text-blue-wave-500'>Our reps love IFG.</h3>
                    <p className="lg:text-xl md:mt-5 text-dunkel-blue-500">
                        Our representatives come from all walks of life, but they all seek the same thing: A place where they don't feel like another number, instead like family.
                    </p>
                </div>
                <div
                    className="grid gap-y-8 lg:grid-cols-2 items-center lg:gap-x-16"
                >
                    <div className='lg:col-span-1 '>
                        <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}><iframe src="https://player.vimeo.com/video/857208581?h=59ff69fde7&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} title="IFG 20th Anniversary"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
                    </div>

                    <div className="-mx-6 lg:col-span-1 lg:mx-0 relative">
                        <div className='flex flex-row items-center'>
                            <button
                                className="prev-button rounded-full border border-blue-wave-500 p-3 text-blue-wave-500 hover:bg-blue-wave-500 hover:text-white"
                            >
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


                            <div className="swiper-container !overflow-hidden">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide !h-[600px]">
                                        <blockquote
                                            className="flex h-full flex-col justify-between p-12"
                                        >
                                            <div>
                                                <div className="mt-4">
                                                    <p className="text-2xl font-bold text-sunburst-500 sm:text-3xl">
                                                        Committed to Excellence
                                                    </p>

                                                    <p className="mt-4 leading-relaxed text-dunkel-blue-500">
                                                        I have been with four broker-dealers over my 36 year career,
                                                        including my own. I have now been with IFG for 14 years and
                                                        could not be more pleased with the character and quality of
                                                        the firm. They are committed to excellence and integrity,
                                                        focusing on the important values in our industry rather than
                                                        their profits. I am delighted to be associated with such a
                                                        first-rate, high-className firm!
                                                    </p>
                                                </div>
                                            </div>

                                            <footer className="mt-8 text-sm text-gray-500 flex items-center gap-3">
                                                <div>
                                                    <p className='text-blue-wave-500 font-bold text-right text-sm'>Arthuer Malloy</p>
                                                    <p className="text-blue-wave-900 font-semibold text-right text-xs">
                                                        California
                                                    </p>
                                                </div>
                                                <Image
                                                    src="https://ifgsd.com/wp-content/uploads/2013/05/Art-Molloy.png"
                                                    width={50}
                                                    height={50}
                                                />
                                            </footer>
                                        </blockquote>
                                    </div>

                                    <div className="swiper-slide !h-[480px]">
                                        <blockquote
                                            className="flex flex-col flex-auto h-full justify-between p-12"
                                        >
                                            <div>

                                                <div className="mt-4">
                                                    <p className="text-2xl font-bold text-sunburst-500 sm:text-3xl">
                                                        When and where we need them
                                                    </p>

                                                    <p className="mt-4 leading-relaxed text-dunkel-blue-500 max-w-prose">
                                                        Since we joined the IFG family, I am consistently reminded of
                                                        how cooperative and helpful IFG is of our business. Those
                                                        reminders are not slogans and mission statements included at
                                                        the tops of letters or the bottoms of emails. They are a real
                                                        help on important matters when and where we need them. Our
                                                        business supports our clients, and IFG supports our business.
                                                        We are very happy to have a partner so clearly interested in
                                                        helping us all grow together.
                                                    </p>
                                                </div>
                                            </div>

                                            <footer className="mt-8 text-sm flex items-center gap-3 text-gray-500">
                                                <div>
                                                    <p className='text-blue-wave-500 font-bold text-right text-sm'>Anna Luke</p>
                                                    <p className="text-blue-wave-900 font-semibold text-right text-xs">
                                                        California
                                                    </p>
                                                </div>
                                                <Image
                                                    src="https://ifgsd.com/wp-content/uploads/2018/04/Anna-Luke.png"
                                                    width={50}
                                                    height={50}
                                                />
                                            </footer>
                                        </blockquote>
                                    </div>

                                    <div className="swiper-slide !h-[480px]">
                                        <blockquote
                                            className="flex h-full flex-col justify-between p-12"
                                        >
                                            <div>


                                                <div className="mt-4">
                                                    <p className="text-2xl font-bold text-sunburst-500 sm:text-3xl">
                                                        Family Oriented with great educational content
                                                    </p>

                                                    <p className="mt-4 leading-relaxed text-dunkel-blue-500">
                                                        Hard to believe it’s been six years since we have joined the
                                                        IFG family. Top rate professional and caring service team
                                                        always ready to respond to needs. Conferences are top notch.
                                                        Family oriented with great educational content. Consultants,
                                                        management specialists, product specialists, asset management
                                                        and insurance resources. A complete suite. Couldn’t ask for
                                                        more in a broker dealer. Great family environment. Hats off to
                                                        the management team and principals Scott, Joe and Dave.
                                                    </p>
                                                </div>
                                            </div>

                                            <footer className="mt-8 text-sm flex items-center gap-3 text-gray-500">
                                                <div>
                                                    <p className='text-blue-wave-500 font-bold text-right text-sm'>Larry Steckler</p>
                                                    <p className="text-blue-wave-900 font-semibold text-right text-xs">
                                                        California
                                                    </p>
                                                </div>
                                                <Image
                                                    src="https://ifgsd.com/wp-content/uploads/2014/11/Larry-Steckler.png"
                                                    width={50}
                                                    height={50}
                                                />
                                            </footer>
                                        </blockquote>
                                    </div>

                                    <div className="swiper-slide !h-[480px]">
                                        <blockquote
                                            className="flex h-full flex-col justify-between  p-12"
                                        >
                                            <div>


                                                <div className="mt-4">
                                                    <p className="text-2xl font-bold text-sunburst-500 sm:text-3xl">
                                                        Extreme Pleasure
                                                    </p>

                                                    <p className="mt-4 leading-relaxed text-dunkel-blue-500">

                                                        My extreme pleasure from my association with Independent Financial Group is due the entire organization sharing a common vision with their representatives. That being our mutual success.
                                                    </p>
                                                </div>
                                            </div>

                                            <footer className="mt-8 text-sm flex items-center gap-3 text-gray-500">
                                                <div>
                                                    <p className='text-blue-wave-500 font-bold text-right text-sm'>Chris Divito</p>
                                                    <p className="text-blue-wave-900 font-semibold text-right text-xs">
                                                        Ohio
                                                    </p>
                                                </div>
                                                <Image
                                                    src="https://ifgsd.com/wp-content/uploads/2013/05/Chris-DiVito.png"
                                                    width={50}
                                                    height={50}
                                                />
                                            </footer>
                                        </blockquote>
                                    </div>

                                    <div className="swiper-slide !h-[480px]">
                                        <blockquote
                                            className="flex h-full flex-col justify-between  p-12"
                                        >
                                            <div>


                                                <div className="mt-4">
                                                    <p className="text-2xl font-bold text-sunburst-500 sm:text-3xl">
                                                        The epitome of a broker-dealer
                                                    </p>

                                                    <p className="mt-4 leading-relaxed text-dunkel-blue-500">

                                                        I have been in the investment/financial planning business for over 41 years, and I can safely say that IFG is the epitome of what a broker-dealer should be– accessible, responsive, future-oriented, with honesty and integrity and providing the independence we all want. It starts at the top with the leadership of Scott, Joe, and David, and permeates the whole organization. I wish the opportunity would have been available for me when I started in the business, but I couldn’t be happier now!
                                                    </p>
                                                </div>
                                            </div>

                                            <footer className="mt-8 text-sm flex items-center gap-3 text-gray-500">
                                                <div>
                                                    <p className='text-blue-wave-500 font-bold text-right text-sm'>Gregory Lohmer</p>
                                                    <p className="text-blue-wave-900 font-semibold text-right text-xs">
                                                        Minnesota
                                                    </p>
                                                </div>
                                                <Image
                                                    src="https://ifgsd.com/wp-content/uploads/2014/11/Gregory-Lohmer.png"
                                                    height={50}
                                                    width={50}
                                                />
                                            </footer>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>

                            <button
                                className="next-button rounded-full border border-blue-wave-500 p-3 text-blue-wave-500 hover:bg-blue-wave-500 hover:text-white"
                            >
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
    )
}

export default Testimonial