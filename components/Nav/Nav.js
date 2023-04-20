import React from 'react'
import Image from 'next/image'

const Nav = () => {
    return (
        <nav>
            <Image 
                alt='IFG logo'
                width={200}
                height={50}
                src='https://ifgsd.com/wp-content/uploads/2017/09/IFGLogo2016_Full_Large_400px.png'
            />
        </nav>
    )
}

export default Nav