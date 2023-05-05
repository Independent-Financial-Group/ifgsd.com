import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

import Nav from "../../../components/Nav/Nav"
import MobileNav from "../../../components/MobileNav/MobileNav"
import Footer from "../../../components/Footer/Footer"

const pressRelease = () => {
    const router = useRouter();
    const { slug } = router.query;

    return (
        <>
            <Nav />
            <MobileNav />
            <main>
                <section className="dark:bg-gray-900">
                    <div className="py-8 px-4 mx-auto max-w-[900px] sm:py-16 lg:px-6">
                        <header class="mb-4 lg:mb-6 not-format">
                            <address class="flex items-center mb-6 not-italic">
                                <div class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                                    <Image class="mr-4 w-16 h-16 rounded-full" width={600} height={600} src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Jese Leos" />
                                    <div>
                                        <a href="#" rel="author" class="text-xl font-bold text-gray-900 dark:text-white">Jese Leos</a>
                                        <p class="text-base font-light text-gray-500 dark:text-gray-400">Graphic Designer, educator & CEO Flowbite</p>
                                        <p class="text-base font-light text-gray-500 dark:text-gray-400"><time pubdate datetime="2022-02-08" title="February 8th, 2022">Feb. 8, 2022</time></p>
                                    </div>
                                </div>
                            </address>
                            <h1 class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">Best practices for successful prototypes</h1>
                        </header>
                        <article>
                            
                        </article>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default pressRelease