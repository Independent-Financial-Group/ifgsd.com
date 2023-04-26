import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

const Nav = () => {
    return (
        <nav className='py-5 bg-seabreeze-100 relative drop-shadow hidden lg:block'>
            <div className="row mx-auto max-w-screen-xl flex flex-row justify-between">
                <div className="col">
                    <Link href="/">
                        <Image
                            alt='IFG logo'
                            width={200}
                            height={50}
                            src='https://ifgsd.com/wp-content/uploads/2017/09/IFGLogo2016_Full_Large_400px.png'
                        />
                    </Link>
                </div>
                <div className="col flex flex-row gap-x-10 shrink-0 items-center ">
                    <Menu>
                        <div>
                            <Menu.Button className='flex flex-row items-center'>
                                <p>About Us</p>
                                <ChevronDownIcon
                                    className='h-5 w-5'
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
                                <Menu.Items className='absolute top-3/4 w-56 bg-white flex flex-col drop-shadow rounded text-sm'>
                                    <Menu.Item className='hover:text-seabreeze-500 py-3 px-2'>
                                        {({ active }) => (
                                            <Link
                                                className={`${active && 'bg-blue-wave-500'}`}
                                                href="/about/leadership"
                                            >
                                                Leadership
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item className='hover:text-seabreeze-500 py-3 px-2'>
                                        {({ active }) => (
                                            <Link
                                                className={`${active && 'bg-blue-wave-500'}`}
                                                href="/about/our-story"
                                            >
                                                Our Story
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Menu as='div' className='relative'>
                                            <Menu.Button className='flex flex-row items-center w-full hover:text-seabreeze-500 hover:bg-blue-wave-500 py-3 px-2'>
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
                                                <Menu.Items className='absolute left-full ml-1 top-0 w-56 bg-white flex flex-col drop-shadow-md rounded'>
                                                    <Menu.Item className='py-3 px-2'>
                                                        {({ active }) => (
                                                            <Link
                                                                className={`${active && 'bg-blue-wave-500'} hover:text-seabreeze-500`}
                                                                href="/about/work-at-ifg/careers"
                                                            >
                                                                Careers
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item className='py-3 px-2'>
                                                        {({ active }) => (
                                                            <Link
                                                                className={`${active && 'bg-blue-wave-500'} hover:text-seabreeze-500`}
                                                                href="/about/work-at-ifg/culture"
                                                            >
                                                                Culture
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item className='py-3 px-2'>
                                                        {({ active }) => (
                                                            <Link
                                                                className={`${active && 'bg-blue-wave-500'} hover:text-seabreeze-500`}
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
                                        <Menu as='div' className='relative'>
                                            <Menu.Button className='flex flex-row items-center w-full hover:bg-blue-wave-500 hover:text-seabreeze-500 py-3 px-2'>
                                                Why Choose Us
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
                                                <Menu.Items className='absolute left-full ml-1 top-0 w-56 bg-white flex flex-col drop-shadow-md rounded'>
                                                    <Menu.Item className='py-3 px-2'>
                                                        {({ active }) => (
                                                            <Link
                                                                className={`${active && 'bg-blue-wave-500'} hover:text-seabreeze-500`}
                                                                href="/about/why-choose-us/our-misison"
                                                            >
                                                                Our Mission
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item className='py-3 px-2'>
                                                        {({ active }) => (
                                                            <Link
                                                                className={`${active && 'bg-blue-wave-500'} hover:text-seabreeze-500`}
                                                                href="/about/why-choose-us/compensation"
                                                            >
                                                                Compensation
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item className='py-3 px-2'>
                                                        {({ active }) => (
                                                            <Link
                                                                className={`${active && 'bg-blue-wave-500'} hover:text-seabreeze-500`}
                                                                href="/about/why-choose-us/transition-support"
                                                            >
                                                                Transition Support
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item className='py-3 px-2'>
                                                        {({ active }) => (
                                                            <Link
                                                                className={`${active && 'bg-blue-wave-500'} hover:text-seabreeze-500`}
                                                                href="/about/why-choose-us/customer-service"
                                                            >
                                                                Customer Service
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item className='py-3 px-2'>
                                                        {({ active }) => (
                                                            <Link
                                                                className={`${active && 'bg-blue-wave-500'} hover:text-seabreeze-500`}
                                                                href="/about/why-choose-us/advisor-success-stories"
                                                            >
                                                                Advisor Success Stories
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item className='py-3 px-2'>
                                                        {({ active }) => (
                                                            <Link
                                                                className={`${active && 'bg-blue-wave-500'} hover:text-seabreeze-500`}
                                                                href="/about/why-choose-us/partners"
                                                            >
                                                                Our Partners
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>
                                    </Menu.Item>
                                </Menu.Items>
                            </Transition>
                        </div>
                    </Menu>
                    <Menu>
                        <div>
                            <Menu.Button className='h-full flex flex-row items-center'>
                                <p>Offerings</p>
                                <ChevronDownIcon
                                    className='h-5 w-5 ext-dunkel-blue-500'
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
                                <Menu.Items className='absolute top-3/4 w-56 bg-white flex flex-col drop-shadow rounded text-sm'>
                                    <Menu.Item className='py-3 px-2'>
                                        {({ active }) => (
                                            <Link
                                                className={`${active && 'bg-blue-wave-500'} hover:text-seabreeze-500`}
                                                href="/offerings/practice-development"
                                            >
                                                Practice Development
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item className='py-3 px-2'>
                                        {({ active }) => (
                                            <Link
                                                className={`${active && 'bg-blue-wave-500'} hover:text-seabreeze-500`}
                                                href="/offerings/products"
                                            >
                                                Products
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item className='py-3 px-2'>
                                        {({ active }) => (
                                            <Link
                                                className={`${active && 'bg-blue-wave-500'} hover:text-seabreeze-500`}
                                                href="/offerings/technology"
                                            >
                                                Technology
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item className='py-3 px-2'>
                                        {({ active }) => (
                                            <Link
                                                className={`${active && 'bg-blue-wave-500'} hover:text-seabreeze-500`}
                                                href="/offerings/marketing-support"
                                            >
                                                Marketing Support
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item className='py-3 px-2'>
                                        {({ active }) => (
                                            <Link
                                                className={`${active && 'bg-blue-wave-500'} hover:text-seabreeze-500`}
                                                href="/offerings/compliance"
                                            >
                                                Compliance
                                            </Link>
                                        )}
                                    </Menu.Item>
                                </Menu.Items>
                            </Transition>
                        </div>
                    </Menu>
                    <Menu>
                        <div>
                            <Menu.Button className='h-full flex flex-row items-center'>
                                <p>Press & Media</p>
                                <ChevronDownIcon
                                    className='h-5 w-5 ext-dunkel-blue-500'
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
                                <Menu.Items className='absolute top-3/4 w-56 bg-white flex flex-col drop-shadow rounded text-sm'>
                                    <Menu.Item className='py-3 px-2'>
                                        {({ active }) => (
                                            <Link
                                                className={`${active && 'bg-blue-wave-500'} hover:text-seabreeze-500`}
                                                href="/press-and-media/blog"
                                            >
                                                Blog
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item className='py-3 px-2'>
                                        {({ active }) => (
                                            <Link
                                                className={`${active && 'bg-blue-wave-500'} hover:text-seabreeze-500`}
                                                href="/press-and-media/press-releases"
                                            >
                                                Press Releases
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item className='py-3 px-2'>
                                        {({ active }) => (
                                            <Link
                                                className={`${active && 'bg-blue-wave-500'} hover:text-seabreeze-500`}
                                                href="/press-and-media/podcast"
                                            >
                                                Podcast
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Menu as='div' className='relative'>
                                            <Menu.Button className='flex flex-row w-full py-3 px-2 hover:bg-blue-wave-500 hover:text-seabreeze-500'>
                                                Press Room
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
                                                <Menu.Items className='absolute left-full ml-1 top-0 w-56 bg-white flex flex-col drop-shadow-md rounded'>
                                                    <Menu.Item className='py-3 px-2'>
                                                        {({ active }) => (
                                                            <Link
                                                                className={`${active && 'bg-blue-wave-500'} hover:text-seabreeze-500`}
                                                                href="/press-and-media/ifg-connect"
                                                            >
                                                                IFG Connect
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item className='py-3 px-2'>
                                                        {({ active }) => (
                                                            <Link
                                                                className={`${active && 'bg-blue-wave-500'} hover:text-seabreeze-500`}
                                                                href="/press-and-media/bluechip"
                                                            >
                                                                Bluechip
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item className='py-3 px-2'>
                                                        {({ active }) => (
                                                            <Link
                                                                className={`${active && 'bg-blue-wave-500'} hover:text-seabreeze-500`}
                                                                href="/press-and-media/the-independent"
                                                            >
                                                                The Independent
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item className='py-3 px-2'>
                                                        {({ active }) => (
                                                            <Link
                                                                className={`${active && 'bg-blue-wave-500'} hover:text-seabreeze-500`}
                                                                href="/press-and-media/advisor-success-stories"
                                                            >
                                                                Advisor Success Stories
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item className='py-3 px-2'>
                                                        {({ active }) => (
                                                            <Link
                                                                className={`${active && 'bg-blue-wave-500'} hover:text-seabreeze-500`}
                                                                href="/about/why-choose-us/partners"
                                                            >
                                                                Our Partners
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>
                                    </Menu.Item>
                                </Menu.Items>
                            </Transition>
                        </div>
                    </Menu>
                    <Menu>
                        <div>
                            <Menu.Button className='h-full flex flex-row'>
                                <p>Join Us</p>
                                <ChevronDownIcon
                                    className='h-5 w-5 ext-dunkel-blue-500'
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
                                <Menu.Items className='absolute top-3/4 right-36 xl:right-auto w-56 bg-white flex flex-col drop-shadow rounded text-sm z-10'>
                                    <Menu.Item className='py-3 px-2'>
                                        {({ active }) => (
                                            <Link
                                                className={`${active && 'bg-blue-wave-500'} hover:text-seabreeze-500`}
                                                href="/join/advisor-diversity-and-inclusion"
                                            >
                                                Advisor Diversity & Inclusion
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item className='py-3 px-2'>
                                        {({ active }) => (
                                            <Link
                                                className={`${active && 'bg-blue-wave-500'} hover:text-seabreeze-500`}
                                                href="/join/awards-and-recognition"
                                            >
                                                Awards & Recognition
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item className='py-3 px-2'>
                                        {({ active }) => (
                                            <Link
                                                className={`${active && 'bg-blue-wave-500'} hover:text-seabreeze-500`}
                                                href="/join/independent-business-model"
                                            >
                                                Independent Business Model
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item className='py-3 px-2'>
                                        {({ active }) => (
                                            <Link
                                                className={`${active && 'bg-blue-wave-500'} hover:text-seabreeze-500`}
                                                href="/join/visit-us"
                                            >
                                                Visit Us
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item className='py-3 px-2'>
                                        {({ active }) => (
                                            <Link
                                                className={`${active && 'bg-blue-wave-500'} hover:text-seabreeze-500`}
                                                href="/join/recruiting-team"
                                            >
                                                Recruiting Team
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item className='py-3 px-2'>
                                        {({ active }) => (
                                            <Link
                                                className={`${active && 'bg-blue-wave-500'} hover:text-seabreeze-500`}
                                                href="/join/we-value-you"
                                            >
                                                We Value You
                                            </Link>
                                        )}
                                    </Menu.Item>
                                </Menu.Items>
                            </Transition>
                        </div>
                    </Menu>
                    <Menu className='relative'>
                        <div>
                            <Menu.Button className='h-full flex flex-row bg-blue-wave-500 text-seabreeze-500 p-3 rounded drop-shadow'>
                                <p className='font-bold'>Login</p>
                                <ChevronDownIcon
                                    className='h-5 w-5 ext-dunkel-blue-500'
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
                                <Menu.Items className='absolute top-full -ml-40 xl:ml-0 xl:-left-full mt-8 w-64 bg-white flex flex-col drop-shadow rounded'>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <Link
                                                className={`${active && 'bg-blue-wave-500'} py-3 px-2 hover:text-seabreeze-500`}
                                                href="https://ifg-gateway.com"
                                            >
                                                Gateway
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item className='p-3'>
                                        {({ active }) => (
                                            <Link
                                                className={`${active && 'bg-blue-wave-500'} py-3 px-2 hover:text-seabreeze-500`}
                                                href="https://new.ifgsd.com"
                                            >
                                                Advisor Portal
                                            </Link>
                                        )}
                                    </Menu.Item>
                                </Menu.Items>
                            </Transition>
                        </div>
                    </Menu>
                </div>
            </div>
        </nav>
    )
}

export default Nav