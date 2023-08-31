import React from 'react'
import Sidebar from '../../components/App/Sidebar/Sidebar'
import { useUser } from '@clerk/nextjs'

const index = () => {
  const { isLoaded, isSignedIn, user } = useUser()

  if(!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <div className='m-0 font-sans text-base antialiased font-normal dark:bg-slate-900 leading-default bg-gray-50 text-slate-500'>
      <Sidebar userInfo={user}/>
    </div>
  )
}

export default index