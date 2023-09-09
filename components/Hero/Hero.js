import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Hero = () => {
    return (
        <header
            className="relative bg-[url('/home/ifg-hero-surfer-wave-flipped-compressed.jpg')] bg-no-repeat bg-cover bg-center min-h-[calc(75vh-60px)] md:min-h-[calc(75vh-60px)] lg:min-h-[calc(90vh-60px)] xl:min-h-[calc(70vh-60px)] rounded-bl-[40px] rounded-br-[40px]"
        >
            <div className="mx-auto max-w-screen-xl px-4">
                <div className='absolute top-[50%] translate-y-[-50%]'>
                    <div className="mb-4 sm:flex sm:justify-center md:justify-start">
                        <div className="rounded-full px-3 py-1 text-sm leading-6 text-seabreeze-100 drop-shadow-xl bg-neon-orange-500 font-semibold">
                            IFG & Reg Bi.
                            <Link href="#" className="font-bold text-neon-orange-700/50 ml-4">
                                <span className="1 inset-0" aria-hidden="true" />
                                Read more <span aria-hidden="true">&rarr;</span>
                            </Link>
                        </div>
                    </div>
                    <div
                        className='max-w-prose'
                    >
                        <h1 className="font-bold text-seabreeze-500 text-4xl md:text-6xl">
                            {/* We're Different */}
                            Built on a handshake.
                        </h1>
                        <p className="mt-6 text-xl text-seabreeze-500">
                            Discover IFG, a firm that values community and family. Join us to immerse yourself in an environment that supports your independence. Contact us now and discover where you belong.
                        </p>
                        <div className="mt-10 flex items-center gap-x-6">
                            <a
                                href="#"
                                className="rounded-md bg-hazard-blue-500 px-3.5 py-2.5 text-sm font-semibold text-seabreeze-500 shadow-sm hover:bg-sunburst-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Get started
                            </a>
                            <a href="#" className="text-md font-semibold leading-6 text-neon-orange-500">
                                Learn more <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Hero