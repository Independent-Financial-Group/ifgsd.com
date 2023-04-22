import React from 'react'
import Nav from '../components/Nav/Nav'
import MobileNav from '../components/MobileNav/MobileNav'
import Head from 'next/head'

const HomePage = () => {
  return (
    <>
    <Head>
      <title>Independent Financial Group - Independence Perfected</title>
    </Head>
    <Nav />
    <MobileNav />
    <h1>
      Independence, Perfected.
    </h1>
    </>
  )
}

export default HomePage