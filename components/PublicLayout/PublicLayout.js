import React from 'react'
import Nav from '../Nav/Nav'
import MobileNav from '../MobileNav/MobileNav'
import Footer from '../Footer/Footer'

const PublicLayout = ({children}) => {
  return (
    <>
        <Nav />
        <MobileNav />
        <main>{children}</main>
        <Footer />
    </>
  )
}

export default PublicLayout