import React from 'react'
import Link from 'next/link'

const Stats = () => {
    return (
        <>
            <p className='text-[80px] text-[#E2E7EB] font-bold absolute z-0 bottom-80'>integrity. balance.</p>
            <p className='text-[80px] text-[#E2E7EB] font-bold absolute z-0 bottom-64'>independence.</p>
            <div className='flex gap-x-4'>
                <div className='max-w-prose'>
                    <h2 className="font-bold text-hazard-blue-500 sm:text-2xl lg:text-4xl">
                        Why IFG?
                    </h2>

                    <p className="my-4 text-gray-500 sm:text-xl">
                        We are based on three core values shared by our executive team: integrity, balance and independence. Founders Scott Heising and David Fischer along with their home office team of employees are committed to providing excellent customer service while always keeping these values at the forefront of decisions as leaders.
                        <br />
                        <br />
                        From the top down, each employee shares in this understanding while providing efficient and friendly service to our advisors according to those beliefs. Independent Financial Group is committed to bringing true independence to the marketplace while staying true to the values the founders have set in place.
                    </p>
                    <Link className='font-bold bg-neon-orange-500 py-2 px-4 rounded-lg text-seabreeze-500' href="/about/our-story">Our Story</Link>
                </div>
                <div className='w-1/2 grid grid-rows-2 grid-cols-2 gap-4'>
                    <div className='bg-gray-300 row-start-1 col-start-1 rounded-lg'><img className='w-full h-48 object-cover object-bottom rounded-lg' src="/home/EAC_APP-photo-20-compressed.jpg" /></div>
                    <div className='bg-gray-300 row-start-1 col-start-2 rounded-lg'><img className='w-full h-48 object-cover object-top rounded-lg' src="/home/national-attendees-1.jpg" /></div>
                    <div className='bg-gray-300 row-start-2 col-span-2 rounded-lg'><img className='w-full h-48 object-cover object-bottom rounded-lg' src="/home/ifg-20-year-celebration-compressed.jpg" /></div>
                </div>
            </div>
            <div className="sm:mt-60">
                <h2 className='text-4xl font-bold text-hazard-blue-500'>Rankings</h2>
                <dl className="flex font-bold">
                    <div
                        className="flex px-4 py-8 justify-center items-center"
                    >
                        <dt className="order-last text-lg text-sunburst-500">
                            Largest Independent Broker-Dealer*
                        </dt>

                        <dd>
                            <img src="/home/award-ribbon-1.png" />
                        </dd>
                    </div>

                    <div
                        className="flex px-4 py-8 items-center"
                    >
                        <dt className="order-last text-lg text-sunburst-500">
                            Overall Experience Satisfaction**
                        </dt>

                        <dd>
                            <img src="/home/award-ribbon-2.png" />
                        </dd>
                    </div>

                    <div
                        className="flex px-4 py-8 items-center"
                    >
                        <dt className="order-last text-lg text-sunburst-500">
                            Largest Privately Held Company in San Diego***
                        </dt>

                        <dd>
                            <img src="/home/award-ribbon-3.png" />
                        </dd>
                    </div>
                </dl>
            </div>
        </>
    )
}

export default Stats