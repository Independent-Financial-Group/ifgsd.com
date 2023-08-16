import React from 'react'

import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <header
            className="px-6 pt-14 lg:px-8 relative bg-[url('/home/ifg-hero-surfer-wave-flipped-compressed.jpg')] bg-no-repeat bg-cover bg-center md:rounded-bl-[80px] md:rounded-br-[80px]"
            >
            <div className="mx-auto max-w-[1500px] py-32 sm:py-48 lg:py-56">
                <div className="hidden sm:mb-8 sm:flex sm:justify-center md:justify-start">
                    <div className="rounded-full px-3 py-1 text-sm leading-6 text-seabreeze-100 drop-shadow-xl bg-sunburst-500">
                        IFG & Reg Bi{' '}
                        <a href="#" className="font-semibold text-sunburst-100">
                            <span className="1 inset-0" aria-hidden="true" />
                            Read more <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0}}
                    whileInView={{ opacity: 1}}
                    transition={{ type: 'spring', duration: 2}}
                    viewport={{ once: true }}
                    className='max-w-prose'
                    >
                    <h1 className="text-4xl font-bold tracking-tight text-seabreeze-500 sm:text-6xl">
                        We're Different
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-seabreeze-500">
                        Discover IFG, a firm that values community and family. Join us to immerse yourself in an environment that supports your independence. Contact us now and discover where you belong.
                    </p>
                    <div className="mt-10 flex items-center gap-x-6">
                        <a
                            href="#"
                            className="rounded-md bg-blue-wave-500 px-3.5 py-2.5 text-sm font-semibold text-seabreeze-500 shadow-sm hover:bg-sunburst-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Get started
                        </a>
                        <a href="#" className="text-sm font-semibold leading-6 text-sunburst-500">
                            Learn more <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </motion.div>
            </div>
        </header>
    )
}

export default Hero