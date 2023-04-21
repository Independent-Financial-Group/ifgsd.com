import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

const Nav = () => {
    return (
        <nav className='py-5 mx-auto bg-white relative'>
            <div className="row container mx-auto flex flex-row justify-between">
                <div className="col">
                    <Image
                        alt='IFG logo'
                        width={200}
                        height={50}
                        src='https://ifgsd.com/wp-content/uploads/2017/09/IFGLogo2016_Full_Large_400px.png'
                    />
                </div>
                <div className="col flex flex-row gap-x-20 shrink-0 items-center ">
                    <Menu>
                        <div>
                            <Menu.Button className='h-full flex flex-row'>
                                <p>About Us</p>
                                <ChevronDownIcon
                                    className='h-5 w-5 ext-dunkel-blue'
                                    aria-hidden='true'
                                />
                            </Menu.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className='absolute top-full w-64 bg-white flex flex-col gap-y-5 p-5 drop-shadow rounded'>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <Link
                                                className={`${active && 'bg-blue-500'}`}
                                                href="/about/leadership"
                                            >
                                                Leadership
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <Link
                                                className={`${active && 'bg-blue-500'}`}
                                                href="/about/our-story"
                                            >
                                                Our Story
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Menu as='div' className='relative'>
                                            <Menu.Button className='flex flex-row w-full'>
                                                <p>Work at IFG</p>
                                                <ChevronRightIcon className='w-5 h-5' />
                                            </Menu.Button>
                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items className='absolute left-60 top-0 w-64 bg-white flex flex-col gap-y-5 p-5 drop-shadow rounded'>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <Link
                                                                className={`${active && 'bg-blue-500'}`}
                                                                href="/about/work-at-ifg/careers"
                                                            >
                                                                Careers
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <Link
                                                                className={`${active && 'bg-blue-500'}`}
                                                                href="/about/work-at-ifg/culture"
                                                            >
                                                                Culture
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <Link
                                                                className={`${active && 'bg-blue-500'}`}
                                                                href="/about/work-at-ifg/benefits"
                                                            >
                                                                Benefits
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Menu as='div'>
                                            <Menu.Button>
                                                Why Choose Us
                                            </Menu.Button>
                                            <Menu.Items>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                            className={`${active && 'bg-blue-500'}`}
                                                            href="/about/why-choose-us/our-misison"
                                                        >
                                                            Our Mission
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                            className={`${active && 'bg-blue-500'}`}
                                                            href="/about/why-choose-us/compensation"
                                                        >
                                                            Compensation
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                            className={`${active && 'bg-blue-500'}`}
                                                            href="/about/why-choose-us/transition-support"
                                                        >
                                                            Transition Support
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                            className={`${active && 'bg-blue-500'}`}
                                                            href="/about/why-choose-us/customer-service"
                                                        >
                                                            Customer Service
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                            className={`${active && 'bg-blue-500'}`}
                                                            href="/about/why-choose-us/advisor-success-stories"
                                                        >
                                                            Advisor Success Stories
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                            className={`${active && 'bg-blue-500'}`}
                                                            href="/about/why-choose-us/partners"
                                                        >
                                                            Our Partners
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                            </Menu.Items>
                                        </Menu>
                                    </Menu.Item>
                                </Menu.Items>
                            </Transition>
                        </div>
                    </Menu>
                </div>
                <div className="col">
                    <button className='button'>
                        <Link href="https://new.ifgsd.com">Login</Link>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Nav