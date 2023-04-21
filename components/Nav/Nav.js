import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

const Nav = () => {
    return (
        <nav className='py-5 mx-auto bg-white relative drop-shadow'>
            <div className="row container mx-auto flex flex-row justify-between">
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
                                <Menu.Items className='absolute top-full w-64 bg-white flex flex-col gap-y-5 drop-shadow rounded'>
                                    <Menu.Item className='hover:bg-blue-foam p-3'>
                                        {({ active }) => (
                                            <Link
                                                className={`${active && 'bg-blue-500'}`}
                                                href="/about/leadership"
                                            >
                                                Leadership
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item className='hover:bg-blue-foam p-3'>
                                        {({ active }) => (
                                            <Link
                                                className={`${active && 'bg-blue-500'}`}
                                                href="/about/our-story"
                                            >
                                                Our Story
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item className='hover:bg-blue-foam p-3'>
                                        <Menu as='div' className='relative'>
                                            <Menu.Button className='flex flex-row w-full hover:bg-blue-foam'>
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
                                                <Menu.Items className='absolute -right-full top-0 w-64 bg-white flex flex-col gap-y-5 drop-shadow-md rounded'>
                                                    <Menu.Item className='hover:bg-blue-foam p-3'>
                                                        {({ active }) => (
                                                            <Link
                                                                className={`${active && 'bg-blue-500'}`}
                                                                href="/about/work-at-ifg/careers"
                                                            >
                                                                Careers
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item className='hover:bg-blue-foam p-3'>
                                                        {({ active }) => (
                                                            <Link
                                                                className={`${active && 'bg-blue-500'}`}
                                                                href="/about/work-at-ifg/culture"
                                                            >
                                                                Culture
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item className='hover:bg-blue-foam p-3'>
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
                                    <Menu.Item className='hover:bg-blue-foam p-3'>
                                        <Menu as='div' className='relative'>
                                            <Menu.Button className='flex flex-row w-full hover:bg-blue-foam'>
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
                                                <Menu.Items className='absolute -right-full top-0 w-64 bg-white flex flex-col gap-y-5 drop-shadow-md rounded'>
                                                    <Menu.Item className='hover:bg-blue-foam p-3'>
                                                        {({ active }) => (
                                                            <Link
                                                                className={`${active && 'bg-blue-500'}`}
                                                                href="/about/why-choose-us/our-misison"
                                                            >
                                                                Our Mission
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item className='hover:bg-blue-foam p-3'>
                                                        {({ active }) => (
                                                            <Link
                                                                className={`${active && 'bg-blue-500'}`}
                                                                href="/about/why-choose-us/compensation"
                                                            >
                                                                Compensation
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item className='hover:bg-blue-foam p-3'>
                                                        {({ active }) => (
                                                            <Link
                                                                className={`${active && 'bg-blue-500'}`}
                                                                href="/about/why-choose-us/transition-support"
                                                            >
                                                                Transition Support
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item className='hover:bg-blue-foam p-3'>
                                                        {({ active }) => (
                                                            <Link
                                                                className={`${active && 'bg-blue-500'}`}
                                                                href="/about/why-choose-us/customer-service"
                                                            >
                                                                Customer Service
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
                            <Menu.Button className='h-full flex flex-row'>
                                <p>Offerings</p>
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
                                <Menu.Items className='absolute top-full w-64 bg-white flex flex-col gap-y-5 drop-shadow rounded'>
                                    <Menu.Item className='hover:bg-blue-foam p-3'>
                                        {({ active }) => (
                                            <Link
                                                className={`${active && 'bg-blue-500'}`}
                                                href="/offerings/practice-development"
                                            >
                                                Practice Development
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item className='hover:bg-blue-foam p-3'>
                                        {({ active }) => (
                                            <Link
                                                className={`${active && 'bg-blue-500'}`}
                                                href="/offerings/products"
                                            >
                                                Products
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item className='hover:bg-blue-foam p-3'>
                                        {({ active }) => (
                                            <Link
                                                className={`${active && 'bg-blue-500'}`}
                                                href="/offerings/technology"
                                            >
                                                Technology
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item className='hover:bg-blue-foam p-3'>
                                        {({ active }) => (
                                            <Link
                                                className={`${active && 'bg-blue-500'}`}
                                                href="/offerings/marketing-support"
                                            >
                                                Marketing Support
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item className='hover:bg-blue-foam p-3'>
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
                            <Menu.Button className='h-full flex flex-row'>
                                <p>Press & Media</p>
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
                                <Menu.Items className='absolute top-full w-64 bg-white flex flex-col gap-y-5 drop-shadow rounded'>
                                    <Menu.Item className='hover:bg-blue-foam p-3'>
                                        {({ active }) => (
                                            <Link
                                                className={`${active && 'bg-blue-500'}`}
                                                href="/press-and-media/blog"
                                            >
                                                Blog
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item className='hover:bg-blue-foam p-3'>
                                        {({ active }) => (
                                            <Link
                                                className={`${active && 'bg-blue-500'}`}
                                                href="/press-and-media/press-releases"
                                            >
                                                Press Releases
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item className='hover:bg-blue-foam p-3'>
                                        {({ active }) => (
                                            <Link
                                                className={`${active && 'bg-blue-500'}`}
                                                href="/press-and-media/podcast"
                                            >
                                                Podcast
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item className='hover:bg-blue-foam p-3'>
                                        <Menu as='div' className='relative'>
                                            <Menu.Button className='flex flex-row w-full hover:bg-blue-foam'>
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
                                                <Menu.Items className='absolute -right-full top-0 w-64 bg-white flex flex-col gap-y-5 drop-shadow-md rounded'>
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
                            <Menu.Button className='h-full flex flex-row'>
                                <p>Join Us</p>
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
                                <Menu.Items className='absolute top-full w-64 bg-white flex flex-col gap-y-5 drop-shadow rounded'>
                                    <Menu.Item className='hover:bg-blue-foam p-3'>
                                        {({ active }) => (
                                            <Link
                                                className={`${active && 'bg-blue-500'}`}
                                                href="/join/advisor-diversity-and-inclusion"
                                            >
                                                Advisor Diversity & Inclusion
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item className='hover:bg-blue-foam p-3'>
                                        {({ active }) => (
                                            <Link
                                                className={`${active && 'bg-blue-500'}`}
                                                href="/join/awards-and-recognition"
                                            >
                                                Awards & Recognition
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item className='hover:bg-blue-foam p-3'>
                                        {({ active }) => (
                                            <Link
                                                className={`${active && 'bg-blue-500'}`}
                                                href="/join/independent-business-model"
                                            >
                                                Independent Business Model
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item className='hover:bg-blue-foam p-3'>
                                        {({ active }) => (
                                            <Link
                                                className={`${active && 'bg-blue-500'}`}
                                                href="/join/visit-us"
                                            >
                                                Visit Us
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item className='hover:bg-blue-foam p-3'>
                                        {({ active }) => (
                                            <Link
                                                className={`${active && 'bg-blue-500'}`}
                                                href="/join/recruiting-team"
                                            >
                                                Recruiting Team
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item className='hover:bg-blue-foam p-3'>
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
                    <Menu>
                        <div>
                            <Menu.Button className='h-full flex flex-row bg-blue-wave text-white p-3 rounded'>
                                <p className='font-bold'>Login</p>
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
                                <Menu.Items className='absolute top-full w-64 bg-white flex flex-col gap-y-5 drop-shadow rounded'>
                                    <Menu.Item className='hover:bg-blue-foam p-3'>
                                        {({ active }) => (
                                            <Link
                                                className={`${active && 'bg-blue-500'}`}
                                                href="https://ifg-gateway.com"
                                            >
                                                Gateway
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item className='hover:bg-blue-foam p-3'>
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
            </div>
        </nav>
    )
}

export default Nav