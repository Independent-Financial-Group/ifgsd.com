import React from 'react'

const Hero = () => {
    return (
        <header
            className="px-6 pt-14 lg:px-8 relative"
            style={{
                backgroundImage: "url('https://new.ifgsd.com/wp-content/uploads/2023/03/hero-drone-shot-compressed-scaled.webp')",
                backgroundSize: 'cover',
                backgroundPosition: 'right center',
                clipPath: 'polygon(100% 90%, 100% 0%, 0% 0%, 0% 90%, 50% 100%)'
            }}>
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                    <div className="rounded-full px-3 py-1 text-sm leading-6 text-dunkel-blue-500 ring-1 ring-blue-wave-500">
                        IFG & Reg Bi{' '}
                        <a href="#" className="font-semibold text-sunburst-500">
                            <span className="1 inset-0" aria-hidden="true" />
                            Read more <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </div>
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-seabreeze-500 sm:text-6xl">
                        Catch the wave and grow your practice
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-seabreeze-500">
                        Ready to ride the wave? Take your practice to the next level and start growing today. Learn how.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
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
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 absolute left-[49%] bottom-5 text-sunburst-500">
                <path fillRule="evenodd" d="M20.03 4.72a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 11.69l6.97-6.97a.75.75 0 011.06 0zm0 6a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06L12 17.69l6.97-6.97a.75.75 0 011.06 0z" clipRule="evenodd" />
            </svg>

        </header>
    )
}

export default Hero