import React, { useEffect } from 'react'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const BranchAnnouncement = ({ newBranch }) => {

    const fields = newBranch.fields;

    return (
        <div className='bg-blue-wave-700/10 text-seabreeze-500 h-[500px] relative overflow-hidden rounded-[40px]'>
            <div className="bg-blue-wave-700/60 rounded-[40px] py-8 px-4 sm:py-16 lg:px-6 h-full">
                <div className='object-cover absolute inset-0 -z-50'>
                    <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}><iframe src="https://player.vimeo.com/video/862579473?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;background=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
                </div>
                <div className='text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                    <h2 className='text-4xl lg:text-7xl font-bold uppercase'>IFG Welcomes</h2>
                    <p className='font-semibold text-lg lg:text-xl my-4'>{`${fields.repNames[0]} ${fields.repNames[1]}`} with {fields.dba} from {fields.officeLocation}</p>
                    <Link className='font-bold bg-neon-orange-500 py-2 px-4 rounded-lg' href="#">Read More</Link>
                </div>
            </div>
        </div>
    )
}

export default BranchAnnouncement