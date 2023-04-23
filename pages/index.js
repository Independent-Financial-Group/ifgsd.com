import React from 'react'
import Head from 'next/head'

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
        <section class="bg-white dark:bg-gray-900">
          <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div class="max-w-screen-md mb-8 lg:mb-16">
              <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-blue-wave dark:text-white">Designed for practices like yours</h2>
              <p class="text-gray-500 sm:text-xl dark:text-gray-400">At IFG, we focus on technology, innovation, and expertise that can unlock long-term value and drive growth for your practice.</p>
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
      </main>
    </>
  )
}

export default HomePage