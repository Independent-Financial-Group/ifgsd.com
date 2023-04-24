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
              <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-blue-wave dark:text-white">Designed for practices like yours</h2>
              <p class="text-gray-500 sm:text-xl dark:text-gray-400">At IFG, we focus on technology, innovation, expertise and independence that can unlock long-term value and drive growth for your practice.</p>
            </div>
            <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
              <div>
                <h3 class="mb-2 text-xl font-bold dark:text-white text-red-fire">Practice Development</h3>
                <p class="text-gray-500 dark:text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum labore hic repudiandae consequatur quos temporibus doloremque reiciendis, non iure quibusdam?</p>
              </div>
              <div>
                <h3 class="mb-2 text-xl font-bold dark:text-white text-red-fire">Products</h3>
                <p class="text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam eligendi commodi saepe inventore recusandae! Eius voluptates nemo quasi corrupti reiciendis!</p>
              </div>
              <div>
                <h3 class="mb-2 text-xl font-bold dark:text-white text-red-fire">Technology</h3>
                <p class="text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis illo, nulla sequi veritatis natus aliquam neque fugit quasi officiis quod.</p>
              </div>
              <div>
                <h3 class="mb-2 text-xl font-bold dark:text-white text-red-fire">Marketing Support</h3>
                <p class="text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil explicabo hic voluptatem aliquam aliquid? Id temporibus vel quisquam odio nemo.</p>
              </div>
              <div>
                <h3 class="mb-2 text-xl font-bold dark:text-white text-red-fire">Competitive Compensation</h3>
                <p class="text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eaque blanditiis autem iusto aut laborum rerum itaque excepturi molestiae repellendus!</p>
              </div>
              <div>
                <h3 class="mb-2 text-xl font-bold dark:text-white text-red-fire">Operations</h3>
                <p class="text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, quibusdam. Omnis ullam aspernatur suscipit ipsa magni accusantium quos vel iste.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-blue-wave">
          <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="font-light sm:text-lg dark:text-gray-400 text-white">
              <h3 className='text-red-fire'>Independence, Perfected.</h3>
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white dark:text-white">The IFG way</h2>
              <p className="mb-4">Independent Financial Group, LLC is based on three core values shared by Independent Financial Group’s executive team: integrity, balance and independence. Founders Scott Heising and David Fischer along with their home office team of employees are committed to providing excellent customer service while always keeping these values at the forefront of decisions as leaders.</p>
              <p>From the top down, each employee shares in this understanding while providing efficient and friendly service to our advisors according to those beliefs. Independent Financial Group is committed to bringing true independence to the marketplace while staying true to the values the founders have set in place.</p>
              <button className='rounded-md bg-red-fire text-sm font-semibold text-white shadow-sm hover:bg-red-fire focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 px-3.5 py-2.5'><Link className='px-3.5 py-2.5' href='/about/our-story'>Learn More</Link></button>
            </div>
            <div className="relative">
              <Image
                src='https://ifgsd.com/wp-content/uploads/2019/12/Website-I-Home3-600x776-e1576010522495.png' className='w-full rounded-lg mx'
                width={100} height={100}
                alt='ifg logo with employees'
              />
            </div>
          </div>
        </section>
        <div class="bg-white py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <h2>The Numbers that Matter</h2>
    <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
      <div class="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt class="text-base leading-7 text-gray-600">Transactions every 24 hours</dt>
        <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">44 million</dd>
      </div>
      <div class="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt class="text-base leading-7 text-gray-600">Assets under holding</dt>
        <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">$119 trillion</dd>
      </div>
      <div class="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt class="text-base leading-7 text-gray-600">New users annually</dt>
        <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">46,000</dd>
      </div>
    </dl>
  </div>
</div>

      </main >
    </>
  )
}

export default HomePage