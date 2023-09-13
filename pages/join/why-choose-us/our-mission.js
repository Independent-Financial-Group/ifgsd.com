import React from 'react'
import PublicLayout from '../../../components/publicLayout/PublicLayout'
import Container from '../../../components/Container/Container'
import Link from 'next/link'

const ourMission = () => {
    return (
        <PublicLayout>
            <section className='bg-hazard-blue-500 h-[20vh] relative mb-32'>
                <Container>
                    <div className='absolute top-1/2 -translate-y-1/2'>
                        <h2 className='text-2xl font-bold text-white'><img src="/graphicAssets/triangle-highlight.png" className='inline mr-2' />Committed to Excellence</h2>
                        <h1 className='lg:text-6xl font-bold text-white'>Our Mission</h1>
                    </div>
                </Container>
            </section>
            <section className='my-32'>
                <Container>
                    <div className='lg:flex lg:gap-5'>
                        <div>
                            <h2 className='text-3xl font-bold text-hazard-blue-500'>Personalized Services</h2>
                            <p className='text-lg'>Independent Financial Group is a comprehensive Independent Financial Services company committed to the support, success and independence of our financial advisors and their clients. We provide personalized service, common sense compliance and access to high quality products, technology and practice management solutions. We actively encourage an environment that balances business and family; where employees are valued, provided quality benefits and a supportive work environment that encourages personal and professional growth.</p>
                        </div>
                        <div className='relative'>
                            <img className='absolute -right-9 top-1/2 -translate-y-1/2' src="/graphicAssets/CTA-ornament.png" />
                            <img className='rounded-lg' src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=5040&q=80" />
                        </div>
                    </div>
                </Container>
            </section>
            <section className='text-white py-10 my-32'>
                <Container classes={"bg-neon-orange-500 rounded-[40px] py-8"}>
                    <h2 className='text-3xl font-bold text-center'>Our Core Values</h2>
                    <div className='lg:grid lg:grid-cols-3 gap-5 p-4'>
                        <div className='border-r-2'>
                            <img src="/graphicAssets/handshake.png" alt="handshake of integrity" />
                            <h3 className='text-xl font-bold my-4'>Integrity</h3>
                            <p className='text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas alias, debitis saepe nesciunt natus esse at aut neque officia suscipit.</p>
                        </div>
                        <div className='border-r-2'>
                            <img src="/graphicAssets/balance.png" alt="balanced scale" />
                            <h3 className='text-xl font-bold my-4'>Balance</h3>
                            <p className='text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas alias, debitis saepe nesciunt natus esse at aut neque officia suscipit.</p>
                        </div>
                        <div>
                            <img src="/graphicAssets/person.png" alt="Independent Person" />
                            <h3 className='text-xl font-bold my-4'>Independence</h3>
                            <p className='text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas alias, debitis saepe nesciunt natus esse at aut neque officia suscipit.</p>
                        </div>
                    </div>
                </Container>
            </section>
            <section className='my-32'>
                <Container>
                    <div className='lg:grid lg:grid-cols-2 lg:gap-5'>
                        <div className='self-center'>
                            <h2 className='text-3xl font-bold'><img src="/graphicAssets/triangle-highlight.png" alt="ornament" className='inline mr-4' />Experience independence.</h2>
                            <p className='my-6 text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore alias nemo nulla nam. Vel recusandae saepe a veritatis quo. Laudantium aspernatur recusandae, facilis blanditiis accusantium impedit reiciendis eos cum hic corporis voluptatem dolore est, vitae repellendus ipsa nostrum itaque perferendis dignissimos. A ab iure vel odit, voluptatum eaque repellendus perspiciatis.</p>
                            <Link href="/join/contact" className='border-2 border-neon-orange-500 px-4 py-2 text-neon-orange-500 font-bold rounded'>Talk to an IFG Rep</Link>
                        </div>
                        <div className='lg:w-1/2 place-self-center'>
                            <div className='relative'>
                                <img src='/graphicAssets/CTA-ornament.png' alt='ornament' className='absolute left-1/2 -translate-x-1/2 -bottom-10'/>
                                <img className='rounded-lg' src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3149&q=80" alt="Financial Professional" />
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </PublicLayout>
    )
}

export default ourMission