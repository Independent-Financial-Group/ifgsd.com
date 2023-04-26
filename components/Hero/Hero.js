import React from 'react'

const Hero = () => {
    return (
        <div
            className="px-6 pt-14 lg:px-8"
            style={{
                backgroundImage: "url('https://new.ifgsd.com/wp-content/uploads/2023/03/ifg-hero.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'right center'
            }}>
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                    <div className="rounded-full px-3 py-1 text-sm leading-6 text-dunkel-blue ring-1 ring-blue-wave">
                        IFG & Reg Bi{' '}
                        <a href="#" className="font-semibold text-red-fire">
                            <span className="1 inset-0" aria-hidden="true" />
                            Read more <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </div>
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-blue-wave sm:text-6xl">
                        Catch the wave and grow your practice
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-dunkel-blue">
                        Ready to ride the wave? Take your practice to the next level and start growing today. Learn how.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            href="#"
                            className="rounded-md bg-blue-wave px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-fire focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Get started
                        </a>
                        <a href="#" className="text-sm font-semibold leading-6 text-red-fire">
                            Learn more <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero