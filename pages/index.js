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
    </>
  )
}

export default HomePage