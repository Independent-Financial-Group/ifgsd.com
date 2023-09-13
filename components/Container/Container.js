import React from 'react'

const Container = ({children, classes}) => {
  return (
    <div className={`px-4 lg:px-0 lg:mx-auto lg:max-w-screen-xl ${classes}`}>{children}</div>
  )
}

export default Container