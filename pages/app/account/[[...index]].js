import React from 'react'
import { UserProfile } from '@clerk/nextjs'

const profile = () => {
  return (
    <div className='max-w-screen-xl mx-auto relative h-[100vh] outline'>
        <UserProfile path='/app/account' routing='path' />
    </div>
  )
}

export default profile