import React from 'react'

const Stats = () => {
    return (
        <>
            <div>
                <div className="max-w-3xl">
                    <h2 className="text-3xl font-bold text-blue-wave-500 sm:text-4xl">
                        Why IFG?
                    </h2>

                    <p className="mt-4 text-gray-500 sm:text-xl">
                        We are consistently ranking at the top in the industry as voted by our own advisors. Here are just a few accolades we are proud of.
                    </p>
                </div>

                <div className="mt-8 sm:mt-12">
                    <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                        <div
                            className="flex flex-col rounded-lg border border-dune-100 px-4 py-8 text-center"
                        >
                            <dt className="order-last text-lg font-medium text-gray-500">
                                Largest Independent Broker-Dealer*
                            </dt>

                            <dd className="text-4xl font-extrabold text-blue-wave-500 md:text-5xl">
                                #17
                            </dd>
                        </div>

                        <div
                            className="flex flex-col rounded-lg border border-dune-100 px-4 py-8 text-center"
                        >
                            <dt className="order-last text-lg font-medium text-gray-500">
                                Overall Experience Satisfaction*
                            </dt>

                            <dd className="text-4xl font-extrabold text-blue-wave-500 md:text-5xl">#2</dd>
                        </div>

                        <div
                            className="flex flex-col rounded-lg border border-dune-100 px-4 py-8 text-center"
                        >
                            <dt className="order-last text-lg font-medium text-gray-500">
                                Largest Privately Held Company in San Diego*
                            </dt>

                            <dd className="text-4xl font-extrabold text-blue-wave-500 md:text-5xl">#7</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </>
    )
}

export default Stats