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
                                        <p>About Us</p>
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
                                                        href="/about/our-story"
                                                    >
                                                        Our Story
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item className='p-3'>
                                                <Menu as='div'>
                                                    <Menu.Button className='flex flex-row w-full items-center'>
                                                        <p>Work at IFG</p>
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
                                                                        href="/about/work-at-ifg/careers"
                                                                    >
                                                                        Careers
                                                                    </Link>
                                                                )}
                                                            </Menu.Item>
                                                            <Menu.Item className='p-3'>
                                                                {({ active }) => (
                                                                    <Link
                                                                        className={`${active && 'bg-blue-500'}`}
                                                                        href="/about/work-at-ifg/culture"
                                                                    >
                                                                        Culture
                                                                    </Link>
                                                                )}
                                                            </Menu.Item>
                                                            <Menu.Item className='p-3'>
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
                                                                        href="/about/why-choose-us/our-misison"
                                                                    >
                                                                        Our Mission
                                                                    </Link>
                                                                )}
                                                            </Menu.Item>
                                                            <Menu.Item className='p-3'>
                                                                {({ active }) => (
                                                                    <Link
                                                                        className={`${active && 'bg-blue-500'}`}
                                                                        href="/about/why-choose-us/compensation"
                                                                    >
                                                                        Compensation
                                                                    </Link>
                                                                )}
                                                            </Menu.Item>
                                                            <Menu.Item className='p-3'>
                                                                {({ active }) => (
                                                                    <Link
                                                                        className={`${active && 'bg-blue-500'}`}
                                                                        href="/about/why-choose-us/transition-support"
                                                                    >
                                                                        Transition Support
                                                                    </Link>
                                                                )}
                                                            </Menu.Item>
                                                            <Menu.Item className='p-3'>
                                                                {({ active }) => (
                                                                    <Link
                                                                        className={`${active && 'bg-blue-500'}`}
                                                                        href="/about/why-choose-us/customer-service"
                                                                    >
                                                                        Customer Service
                                                                    </Link>
                                                                )}
                                                            </Menu.Item>
                                                            <Menu.Item className='p-3'>
                                                                {({ active }) => (
                                                                    <Link
                                                                        className={`${active && 'bg-blue-500'}`}
                                                                        href="/about/why-choose-us/advisor-success-stories"
                                                                    >
                                                                        Advisor Success Stories
                                                                    </Link>
                                                                )}
                                                            </Menu.Item>
                                                            <Menu.Item className='p-3'>
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
                                                    </Transition>
                                                </Menu>
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
                                                        href="/offerings/products"
                                                    >
                                                        Products
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
                                                        href="/press-and-media/blog"
                                                    >
                                                        Blog
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item className='p-3'>
                                                {({ active }) => (
                                                    <Link
                                                        className={`${active && 'bg-blue-500'}`}
                                                        href="/press-and-media/press-releases"
                                                    >
                                                        Press Releases
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item className='p-3'>
                                                {({ active }) => (
                                                    <Link
                                                        className={`${active && 'bg-blue-500'}`}
                                                        href="/press-and-media/podcast"
                                                    >
                                                        Podcast
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                <Menu as='div'>
                                                    <Menu.Button className='flex flex-row w-full items-center p-3'>
                                                        Press Room
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
                                                            <Menu.Item className='hover:bg-blue-foam p-3'>
                                                                {({ active }) => (
                                                                    <Link
                                                                        className={`${active && 'bg-blue-500'}`}
                                                                        href="/press-and-media/ifg-connect"
                                                                    >
                                                                        IFG Connect
                                                                    </Link>
                                                                )}
                                                            </Menu.Item>
                                                            <Menu.Item className='hover:bg-blue-foam p-3'>
                                                                {({ active }) => (
                                                                    <Link
                                                                        className={`${active && 'bg-blue-500'}`}
                                                                        href="/press-and-media/bluechip"
                                                                    >
                                                                        Bluechip
                                                                    </Link>
                                                                )}
                                                            </Menu.Item>
                                                            <Menu.Item className='hover:bg-blue-foam p-3'>
                                                                {({ active }) => (
                                                                    <Link
                                                                        className={`${active && 'bg-blue-500'}`}
                                                                        href="/press-and-media/the-independent"
                                                                    >
                                                                        The Independent
                                                                    </Link>
                                                                )}
                                                            </Menu.Item>
                                                            <Menu.Item className='hover:bg-blue-foam p-3'>
                                                                {({ active }) => (
                                                                    <Link
                                                                        className={`${active && 'bg-blue-500'}`}
                                                                        href="/press-and-media/advisor-success-stories"
                                                                    >
                                                                        Advisor Success Stories
                                                                    </Link>
                                                                )}
                                                            </Menu.Item>
                                                            <Menu.Item className='hover:bg-blue-foam p-3'>
                                                                {({ active }) => (
                                                                    <Link
                                                                        className={`${active && 'bg-blue-500'}`}
                                                                        href="/about/why-choose-us/advisor-success-stories"
                                                                    >
                                                                        Advisor Success Stories
                                                                    </Link>
                                                                )}
                                                            </Menu.Item>
                                                            <Menu.Item className='hover:bg-blue-foam p-3'>
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
                                                    </Transition>
                                                </Menu>
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </div>
                            </Menu>
                            <Menu>
                                <div>
                                    <Menu.Button className='h-full flex flex-row items-center p-3'>
                                        <p>Join Us</p>
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
                                                        href="/join/advisor-diversity-and-inclusion"
                                                    >
                                                        Advisor Diversity & Inclusion
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item className='p-3'>
                                                {({ active }) => (
                                                    <Link
                                                        className={`${active && 'bg-blue-500'}`}
                                                        href="/join/awards-and-recognition"
                                                    >
                                                        Awards & Recognition
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item className='p-3'>
                                                {({ active }) => (
                                                    <Link
                                                        className={`${active && 'bg-blue-500'}`}
                                                        href="/join/independent-business-model"
                                                    >
                                                        Independent Business Model
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item className='p-3'>
                                                {({ active }) => (
                                                    <Link
                                                        className={`${active && 'bg-blue-500'}`}
                                                        href="/join/visit-us"
                                                    >
                                                        Visit Us
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item className='p-3'>
                                                {({ active }) => (
                                                    <Link
                                                        className={`${active && 'bg-blue-500'}`}
                                                        href="/join/recruiting-team"
                                                    >
                                                        Recruiting Team
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item className='p-3'>
                                                {({ active }) => (
                                                    <Link
                                                        className={`${active && 'bg-blue-500'}`}
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
                            <Menu className="bg-blue-wave-500 h-full rounded">
                                <div>
                                    <Menu.Button className='h-full flex flex-row items-center mx-auto p-3 text-seabreeze-500'>
                                        <p>Login</p>
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
                                        <Menu.Items className='flex flex-col text-center bg-seabreeze-500'>
                                            <Menu.Item className='p-3'>
                                                {({ active }) => (
                                                    <Link
                                                        className={`${active && 'bg-blue-500'}`}
                                                        href="https://ifg-gateway.com"
                                                    >
                                                        Gateway
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item className='p-3'>
                                                {({ active }) => (
                                                    <Link
                                                        className={`${active && 'bg-blue-500'}`}
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
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

export default MobileNav