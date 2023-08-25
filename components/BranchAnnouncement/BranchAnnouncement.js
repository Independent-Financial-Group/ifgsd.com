import React, { useEffect } from 'react'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from "framer-motion";

import newRepBanner1 from '../../public/banner1.png'
import newRepBanner2 from '../../public/banner2.png'
import newRepBanner3 from '../../public/banner3.png'
import newRepBanner4 from '../../public/banner4.png'

const BranchAnnouncement = ({ newBranches }) => {

    useEffect(() => { console.log(`Branches: ${JSON.stringify(newBranches, null, 3)}`) }, [])

    return (
        <div className='text-seabreeze-500 w-full relative h-[855px]'>

        </div>
    )
}

export default BranchAnnouncement