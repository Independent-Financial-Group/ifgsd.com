import React, { useEffect } from 'react'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const BranchAnnouncement = ({ newBranches }) => {

    // useEffect(() => { console.log(`Branches: ${JSON.stringify(newBranches, null, 3)}`) }, [])

    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 1, delay: 0.3 }}
            className='text-seabreeze-500 h-[500px] relative bg-[url("/home/surfer-ifg-drone-compressed.jpg")] bg-bottom rounded-[80px]'>
            <div className="bg-blue-wave-700/60 rounded-[80px] py-8 px-4 sm:py-16 lg:px-6 h-full">
                <div className='text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                    <h2 className='text-7xl font-bold uppercase'>IFG Welcomes</h2>
                    <p className='font-semibold text-xl my-4'>{newBranches[0].reps} with {newBranches[0].dba} from {newBranches[0].officeLocation}</p>
                    <Link className='font-bold bg-neon-orange-500 py-2 px-4 rounded-lg' href="#">Read More</Link>
                </div>
            </div>
        </motion.div>
    )
}

export default BranchAnnouncement