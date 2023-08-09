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
            <Image style={{ width: '100%' }} className='absolute top-0 h-[840px]' src={newRepBanner1} />
            <Image style={{ width: '100%' }} className='absolute top-0' src={newRepBanner2} />
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", duration: 6, delay: 0.3 }}
                className="mx-auto max-w-screen-2xl text-center px-4 py-16 sm:px-6 sm:py-12 absolute inset-0"
            >
                <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-seabreeze-500 border-y-4 py-4 w-1/3 mx-auto'>New Rep Announcement</h2>
                <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-seabreeze-500'>{newBranches[0].dba} joins IFG</h2>
                <p className='mb-8 w-1/2 m-auto'>IFG welcomes {newBranches[0].reps} with {newBranches[0].dba} from {newBranches[0].officeLocation}!</p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
                viewport={{ once: true }}
                transition={{ type: "spring", duration: 1, delay: 2 }}
                className="mx-auto max-w-screen-2xl text-center px-4 py-16 sm:px-6 sm:py-12 absolute inset-60 z-10"
            >
                <Link className='p-4 rounded bg-sunburst-500' href="/">Read their story</Link>
            </motion.div>
            <Image style={{ width: '100%' }} className='absolute bottom-0' src={newRepBanner3} />
            <motion.div
                initial={{ x: 100 }}
                whileInView={{ x: -40 }}
                // viewport={{ once: true }}
                transition={{ type: "spring", duration: 3 }}
                className=' absolute right-0 bottom-0'
            >
                <Image src={newRepBanner4} />
            </motion.div>
            <motion.div
                initial={{ x: 100 }}
                whileInView={{ x: -20 }}
                // viewport={{ once: true }}
                transition={{ type: "spring", duration: 6 }}
                className=' absolute right-0 bottom-0'
            >
                <Image src={newRepBanner4} />
            </motion.div>
            <motion.div
                initial={{ x: 100 }}
                whileInView={{ x: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", duration: 6 }}
                className=' absolute right-0 bottom-5'
            >
                <Image src={newRepBanner4} />
            </motion.div>
        </div>
    )
}

export default BranchAnnouncement