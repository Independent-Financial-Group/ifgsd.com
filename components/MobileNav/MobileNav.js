import React from 'react'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const MobileNav = () => {
    return (
        <Disclosure as="nav" className="bg-white drop-shadow lg:hidden">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute z-0 inset-y-0 left-0 flex items-center">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 bg-blue-wave-500 text-white drop-shadow font-bold">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center lg:items-stretch lg:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <img
                                        className="block h-8 w-auto"
                                        src="https://new.ifgsd.com/wp-content/uploads/2019/04/cropped-IFGLogo2016_icon.png"
                                        alt="IFG Logo Icon"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>




                    <Disclosure.Panel className="p-3 lg:hidden">
                        <div className="flex flex-col">
                            <Menu>
                                <div>
                                    <Menu.Button className='h-full flex flex-row items-center p-3'>
                                        <p>Join IFG</p>
                                        <ChevronDownIcon
                                            className='h-5 w-5 ml-2'
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
                                        <Menu.Items className='flex flex-col ml-10'>
                                            <Menu.Item>
                                                <Menu as='div' className='p-3'>
                                                    <Menu.Button className='flex flex-row items-center'>
                                                        Why Choose Us
                                                        <ChevronDownIcon className='w-5 h-5 ml-2' />
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
                                                        <Menu.Items className='flex flex-col ml-10'>
                                                            <Menu.Item className='p-3'>
                                                                {({ active }) => (
                                                                    <Link
                                                                        className={`${active && 'bg-blue-500'}`}
                                                                        href="/join-ifg/why-choose-us/our-mission"
                                                                    >
                                                                        Our Mission
                                                                    </Link>
                                                                )}
                                                            </Menu.Item>
                                                            <Menu.Item className='p-3'>
                                                                {({ active }) => (
                                                                    <Link
                                                                        className={`${active && 'bg-blue-500'}`}
                                                                        href="/join-ifg/why-choose-us/compensation"
                                                                    >
                                                                        Compensation
                                                                    </Link>
                                                                )}
                                                            </Menu.Item>
                                                            <Menu.Item className='p-3'>
                                                                {({ active }) => (
                                                                    <Link
                                                                        className={`${active && 'bg-blue-500'}`}
                                                                        href="/join-ifg/why-choose-us/transition-support"
                                                                    >
                                                                        Transition Support
                                                                    </Link>
                                                                )}
                                                            </Menu.Item>
                                                            <Menu.Item className='p-3'>
                                                                {({ active }) => (
                                                                    <Link
                                                                        className={`${active && 'bg-blue-500'}`}
                                                                        href="/join-ifg/why-choose-us/customer-service"
                                                                    >
                                                                        Customer Service
                                                                    </Link>
                                                                )}
                                                            </Menu.Item>
                                                            <Menu.Item className='p-3'>
                                                                {({ active }) => (
                                                                    <Link
                                                                        className={`${active && 'bg-blue-500'}`}
                                                                        href="/join-ifg/why-choose-us/advisor-testimonials"
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
                                                <Menu as='div' className='p-3'>
                                                    <Menu.Button className='flex flex-row items-center'>
                                                        Business Solution Models
                                                        <ChevronDownIcon className='w-5 h-5 ml-2' />
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
                                                        <Menu.Items className='flex flex-col ml-10'>
                                                            <Menu.Item className='p-3'>
                                                                {({ active }) => (
                                                                    <Link
                                                                        className={`${active && 'bg-blue-500'}`}
                                                                        href="/join-ifg/business-solutions/solo-practitioner"
                                                                    >
                                                                        Solo Practitioner
                                                                    </Link>
                                                                )}
                                                            </Menu.Item>
                                                            <Menu.Item className='p-3'>
                                                                {({ active }) => (
                                                                    <Link
                                                                        className={`${active && 'bg-blue-500'}`}
                                                                        href="/join-ifg/business-solutions/join-an-existing-practice"
                                                                    >
                                                                        Join an Existing Practice
                                                                    </Link>
                                                                )}
                                                            </Menu.Item>
                                                            <Menu.Item className='p-3'>
                                                                {({ active }) => (
                                                                    <Link
                                                                        className={`${active && 'bg-blue-500'}`}
                                                                        href="/join-ifg/business-solutions/selling-your-practice"
                                                                    >
                                                                        Selling Your Practice
                                                                    </Link>
                                                                )}
                                                            </Menu.Item>
                                                        </Menu.Items>
                                                    </Transition>
                                                </Menu>
                                            </Menu.Item>
                                            <Menu.Item className='p-3'>
                                                {({ active }) => (
                                                    <Link
                                                        className={`${active && 'bg-blue-500'}`}
                                                        href="/join/contact"
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
                                    <Menu.Button className='h-full flex flex-row items-center p-3'>
                                        <p>About</p>
                                        <ChevronDownIcon
                                            className='h-5 w-5 ml-2'
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
                                        <Menu.Items className='flex flex-col ml-10'>
                                            <Menu.Item className='p-3'>
                                                {({ active }) => (
                                                    <Link
                                                        className={`${active && 'bg-blue-500'} p-3`}
                                                        href="/about/our-story"
                                                    >
                                                        Our Story
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item className='p-3'>
                                                {({ active }) => (
                                                    <Link
                                                        className={`${active && 'bg-blue-500'} p-3`}
                                                        href="/about/leadership"
                                                    >
                                                        Leadership
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item className='p-3'>
                                                {({ active }) => (
                                                    <Link
                                                        className={`${active && 'bg-blue-500'} p-3`}
                                                        href="/about/culture"
                                                    >
                                                        Culture
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item className='p-3'>
                                                {({ active }) => (
                                                    <Link
                                                        className={`${active && 'bg-blue-500'} p-3`}
                                                        href="/about/philanthropy"
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
                                    <Menu.Button className='h-full flex flex-row items-center p-3'>
                                        <p>Press & Media</p>
                                        <ChevronDownIcon
                                            className='h-5 w-5 ml-2'
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
                                        <Menu.Items className='flex flex-col ml-10'>
                                            <Menu.Item className='p-3'>
                                                {({ active }) => (
                                                    <Link
                                                        className={`${active && 'bg-blue-500'}`}
                                                        href="/press-media/ifg-in-the-news"
                                                    >
                                                        IFG in the News
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item className='p-3'>
                                                {({ active }) => (
                                                    <Link
                                                        className={`${active && 'bg-blue-500'}`}
                                                        href="/press-and-media/awards-and-recognition"
                                                    >
                                                        Awards & Recognition
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item className='p-3'>
                                                {({ active }) => (
                                                    <Link
                                                        className={`${active && 'bg-blue-500'}`}
                                                        href="/press-media/press-releases"
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
                                    <Menu.Button className='h-full flex flex-row p-3 items-center'>
                                        <p>Offerings</p>
                                        <ChevronDownIcon
                                            className='h-5 w-5 ml-2'
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
                                        <Menu.Items className='flex flex-col ml-10'>
                                            <Menu.Item className='p-3'>
                                                {({ active }) => (
                                                    <Link
                                                        className={`${active && 'bg-blue-500'}`}
                                                        href="/offerings/products-and-platforms"
                                                    >
                                                        Products & Platforms
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item className='p-3'>
                                                {({ active }) => (
                                                    <Link
                                                        className={`${active && 'bg-blue-500'}`}
                                                        href="/offerings/technology"
                                                    >
                                                        Technology
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item className='p-3'>
                                                {({ active }) => (
                                                    <Link
                                                        className={`${active && 'bg-blue-500'}`}
                                                        href="/offerings/practice-development"
                                                    >
                                                        Practice Development
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item className='p-3'>
                                                {({ active }) => (
                                                    <Link
                                                        className={`${active && 'bg-blue-500'}`}
                                                        href="/offerings/conferences"
                                                    >
                                                        Conferences
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item className='p-3'>
                                                {({ active }) => (
                                                    <Link
                                                        className={`${active && 'bg-blue-500'}`}
                                                        href="/offerings/marketing-support"
                                                    >
                                                        Marketing Support
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item className='p-3'>
                                                {({ active }) => (
                                                    <Link
                                                        className={`${active && 'bg-blue-500'}`}
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
                                    <Menu.Button className='h-full flex flex-row p-3 items-center'>
                                        <p>Careers</p>
                                        <ChevronDownIcon
                                            className='h-5 w-5 ml-2'
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
                                        <Menu.Items className='flex flex-col ml-10'>
                                            <Menu.Item className='p-3'>
                                                {({ active }) => (
                                                    <Link
                                                        className={`${active && 'bg-blue-500'}`}
                                                        href="/careers/job-openings"
                                                    >
                                                        Job Openings
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item className='p-3'>
                                                {({ active }) => (
                                                    <Link
                                                        className={`${active && 'bg-blue-500'}`}
                                                        href="/careers/benefits"
                                                    >
                                                        Benefits
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item className='p-3'>
                                                {({ active }) => (
                                                    <Link
                                                        className={`${active && 'bg-blue-500'}`}
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
                            <Menu className="bg-sunburst-500 h-full rounded mb-2">
                                <div>
                                    <Menu.Button className='h-full flex flex-row items-center mx-auto p-3 text-seabreeze-500'>
                                        <Link href="https://new.ifgsd.com">Find an Advisor</Link>
                                    </Menu.Button>
                                </div>
                            </Menu>
                            <Menu className="bg-blue-wave-500 h-full rounded">
                                <div>
                                    <Menu.Button className='h-full flex flex-row items-center mx-auto p-3 text-seabreeze-500'>
                                        <Link href="https://new.ifgsd.com">Login</Link>
                                    </Menu.Button>
                                </div>
                            </Menu>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

export default MobileNav