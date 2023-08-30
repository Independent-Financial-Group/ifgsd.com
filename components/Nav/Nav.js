import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

const Nav = () => {
    return (
        <nav className='py-5 bg-seabreeze-100 relative hidden lg:block z-10'>
            <div className="row mx-auto max-w-screen-xl flex flex-row justify-between">
                <div className="col">
                    <Link href="/">
                        <img
                        width={200}
                            alt='IFG logo'
                            src='/logo-full-color.png'
                        />
                    </Link>
                </div>
                <div className="col flex flex-row gap-x-10 shrink-0 items-center ">
                    <Menu>
                        <div>
                            <Menu.Button className='h-full flex flex-row bg-sunburst-500 text-seabreeze-500 p-3 rounded drop-shadow'>
                                <p>Join IFG</p>
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
                                                                Advisor Testimonials
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
                                                Business Solutions Models
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
                                                                href="/about/why-choose-us/independent-practice"
                                                            >
                                                                Independent Practice
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item className='py-3 px-2'>
                                                        {({ active }) => (
                                                            <Link
                                                                className={`${active && 'bg-blue-wave-500'} hover:text-seabreeze-500`}
                                                                href="/about/why-choose-us/our-misison"
                                                            >
                                                                Solo Practitioner
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item className='py-3 px-2'>
                                                        {({ active }) => (
                                                            <Link
                                                                className={`${active && 'bg-blue-wave-500'} hover:text-seabreeze-500`}
                                                                href="/about/why-choose-us/compensation"
                                                            >
                                                                Join an Existing Practice
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item className='py-3 px-2'>
                                                        {({ active }) => (
                                                            <Link
                                                                className={`${active && 'bg-blue-wave-500'} hover:text-seabreeze-500`}
                                                                href="/about/why-choose-us/transition-support"
                                                            >
                                                                Selling Your Practice
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>
                                    </Menu.Item>
                                    <Menu.Item className='py-3 px-2'>
                                        {({ active }) => (
                                            <Link
                                                className={`${active && 'bg-blue-wave-500'} hover:text-seabreeze-500`}
                                                href="/join/visit-us"
                                            >
                                                Request More Information
                                            </Link>
                                        )}
                                    </Menu.Item>
                                </Menu.Items>
                            </Transition>
                        </div>
                    </Menu>
                    <Menu>
                        <div>
                            <Menu.Button className='flex flex-row items-center'>
                                <p>About</p>
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
                                                href="/about/our-story"
                                            >
                                                Our Story
                                            </Link>
                                        )}
                                    </Menu.Item>
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
                                                href="/about/culture"
                                            >
                                                Culture
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item className='hover:text-seabreeze-500 py-3 px-2'>
                                        {({ active }) => (
                                            <Link
                                                className={`${active && 'bg-blue-wave-500'}`}
                                                href="/about/leadership"
                                            >
                                                Philanthropy
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
                                                href="/press-media/IFG-in-the-news"
                                            >
                                                IFG in the News
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item className='py-3 px-2'>
                                        {({ active }) => (
                                            <Link
                                                className={`${active && 'bg-blue-wave-500'} hover:text-seabreeze-500`}
                                                href="/press-and-media/awards-and-recognition"
                                            >
                                                Awards & Recognition
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
                                                href="/offerings/products"
                                            >
                                                Products & Platforms
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item className='py-3 px-2'>
                                        {({ active }) => (
                                            <Link
                                                className={`${active && 'bg-blue-wave-500'} hover:text-seabreeze-500`}
                                                href="/offerings/marketing-and-product-support"
                                            >
                                                Marketing & Product Support
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item className='py-3 px-2'>
                                        {({ active }) => (
                                            <Link
                                                className={`${active && 'bg-blue-wave-500'} hover:text-seabreeze-500`}
                                                href="/offerings/platform-support"
                                            >
                                                Platform Support
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
                                                href="/offerings/conferences"
                                            >
                                                Conferences
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
                            <Menu.Button className='flex flex-row items-center'>
                                <p>Careers</p>
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
                                                href="/careers/work-at-ifg"
                                            >
                                                Work at IFG
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item className='hover:text-seabreeze-500 py-3 px-2'>
                                        {({ active }) => (
                                            <Link
                                                className={`${active && 'bg-blue-wave-500'}`}
                                                href="/careers/benefits-and-perks"
                                            >
                                                Benefits & Perks
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item className='hover:text-seabreeze-500 py-3 px-2'>
                                        {({ active }) => (
                                            <Link
                                                className={`${active && 'bg-blue-wave-500'}`}
                                                href="/careers/career-support"
                                            >
                                                Career Support
                                            </Link>
                                        )}
                                    </Menu.Item>
                                </Menu.Items>
                            </Transition>
                        </div>
                    </Menu>
                    <Menu className='relative'>
                        <div>
                            <Menu.Button className='h-full flex flex-row text-dunkel-blue-500 '>
                                <Link href="/advisor-lookup" className='font-bold'>Find an Advisor</Link>
                            </Menu.Button>
                        </div>
                    </Menu>
                    <Menu className='relative'>
                        <div>
                            <Menu.Button className='h-full flex flex-row bg-blue-wave-500 text-seabreeze-500 p-3 rounded drop-shadow'>
                                <Link href="https://new.ifgsd.com" className='font-bold'>Rep Login</Link>
                            </Menu.Button>
                        </div>
                    </Menu>
                </div>
            </div>
        </nav>
    )
}

export default Nav