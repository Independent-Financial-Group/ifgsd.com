import React, { useEffect } from 'react'

import Link from 'next/link'
import Image from 'next/image'
import newRepBanner from '../../public/new-rep-banner.jpg'

const BranchAnnouncement = ({ newBranches }) => {

    useEffect(() => {console.log(`Branches: ${JSON.stringify(newBranches, null, 3)}`)}, [])

    return (
        <div className='bg-gradient-to-r from-blue-wave-400 to-blue-wave-800 text-seabreeze-500 w-full border-b-8 border-dune-500'>
            <div
                className="mx-auto max-w-screen-xl text-center px-4 py-16 sm:px-6 sm:py-12"
            >
                <Image className='m-auto mb-8 rounded border-4 border-seabreeze-500' src={newRepBanner} />
                <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-seabreeze-500'>{newBranches[0].dba} joins IFG</h2>
                <p className='mb-8 w-1/2 m-auto'>IFG welcomes {newBranches[0].reps} with {newBranches[0].dba} from {newBranches[0].officeLocation}!</p>
                <Link className='p-4 rounded bg-sunburst-500' href="#">Read their story</Link>
            </div>
        </div>
    )
}

export default BranchAnnouncement