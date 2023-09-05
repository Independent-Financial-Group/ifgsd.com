import React from 'react'
import { UserProfile } from '@clerk/nextjs'

const profile = () => {
  return (
    <div className='bg-[url(/sign-in/bg-coronado-compressed.jpg)] bg-no-repeat bg-cover'>
      <div className='max-w-screen-xl mx-auto relative h-[100vh] relative '>
        <UserProfile
          appearance={{
            elements: {
              rootBox: "absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
            }
          }}
          path='/app/account' routing='path' />
      </div>
    </div>
  )
}

export default profile