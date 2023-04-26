import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Nav from '../components/Nav/Nav'
import MobileNav from '../components/MobileNav/MobileNav'
import Hero from '../components/Hero/Hero'

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Independent Financial Group - Independence Perfected</title>
      </Head>
      <Nav />
      <MobileNav />
      <Hero />
      <main>
        <section class="dark:bg-gray-900">
          <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div class="max-w-screen-md mb-8 lg:mb-16">
              <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-blue-wave-500 dark:text-seabreeze-500">Designed for practices like yours</h2>
              <p class="text-dunkel-blue sm:text-xl dark:text-gray-400">With 20-years of experience and a focus on technology, innovation, expertise and independence, we can unlock long-term value and drive growth for your practice.</p>
            </div>
            <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
                <h3 class="mb-2 text-xl font-bold dark:text-seabreeze-500 text-blue-wave-500">Practice Development</h3>
                <p class="text-dunkel-blue dark:text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum labore hic repudiandae consequatur quos temporibus doloremque reiciendis, non iure quibusdam?</p>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                </svg>

                <h3 class="mb-2 text-xl font-bold dark:text-seabreeze-500 text-blue-wave-500">Products</h3>
                <p class="text-dunkel-blue dark:text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam eligendi commodi saepe inventore recusandae! Eius voluptates nemo quasi corrupti reiciendis!</p>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                </svg>

                <h3 class="mb-2 text-xl font-bold dark:text-seabreeze-500 text-blue-wave-500">Technology</h3>
                <p class="text-dunkel-blue dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis illo, nulla sequi veritatis natus aliquam neque fugit quasi officiis quod.</p>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                </svg>

                <h3 class="mb-2 text-xl font-bold dark:text-seabreeze-500 text-blue-wave-500">Marketing Support</h3>
                <p class="text-dunkel-blue dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil explicabo hic voluptatem aliquam aliquid? Id temporibus vel quisquam odio nemo.</p>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

                <h3 class="mb-2 text-xl font-bold dark:text-seabreeze-500 text-blue-wave-500">Competitive Compensation</h3>
                <p class="text-dunkel-blue dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eaque blanditiis autem iusto aut laborum rerum itaque excepturi molestiae repellendus!</p>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                </svg>

                <h3 class="mb-2 text-xl font-bold dark:text-seabreeze-500 text-blue-wave-500">Operations</h3>
                <p class="text-dunkel-blue dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, quibusdam. Omnis ullam aspernatur suscipit ipsa magni accusantium quos vel iste.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-dune-500">
          <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="sm:text-lg dark:text-gray-400 text-dunkel-blue-500">
              <h3 className='font-medium'>Independence, Perfected.</h3>
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-blue-wave-500 dark:text-seabreeze-500">The IFG way</h2>
              <p className="mb-4">Independent Financial Group, LLC is based on three core values shared by Independent Financial Group’s executive team: integrity, balance and independence. Founders Scott Heising and David Fischer along with their home office team of employees are committed to providing excellent customer service while always keeping these values at the forefront of decisions as leaders.</p>
              <p>From the top down, each employee shares in this understanding while providing efficient and friendly service to our advisors according to those beliefs. Independent Financial Group is committed to bringing true independence to the marketplace while staying true to the values the founders have set in place.</p>
              <button className='mt-5 rounded-md bg-blue-wave-500 text-sm font-semibold text-seabreeze-500 shadow-sm hover:bg-red-fire focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 px-3.5 py-2.5'><Link className='px-3.5 py-2.5' href='/about/our-story'>Learn More</Link></button>
            </div>
            <div className="relative">
              <Image
                src='https://new.ifgsd.com/wp-content/uploads/2023/03/Mask-group.png' className='w-full rounded-lg mx'
                width={600} height={600}
                alt='ifg logo with employees'
              />
            </div>
          </div>
        </section>
        <div class="py-24 sm:py-32">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-center font-bold text-lg text-blue-wave-500">The Numbers that Matter</h2>
            <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
              <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt class="text-base leading-7 text-gray-600">Advisors</dt>
                <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">500+</dd>
              </div>
              <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt class="text-base leading-7 text-gray-600">Assets Under Management</dt>
                <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">$119 trillion</dd>
              </div>
              <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt class="text-base leading-7 text-gray-600">Offices</dt>
                <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">411+</dd>
              </div>
            </dl>
          </div>
        </div>

      </main >
    </>
  )
}

export default HomePage