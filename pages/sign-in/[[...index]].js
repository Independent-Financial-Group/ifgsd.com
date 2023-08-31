import React from 'react'
import { SignIn } from '@clerk/nextjs'

const index = () => {
  return (
    <>
      <div className='relative'>
        <SignIn className="absolute right-0" />
      </div>
    </>
  )
}

export default index