import React from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const MobileNav = () => {
  return (
    <Disclosure as="nav" className="bg-white drop-shadow lg:hidden">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 z-0 flex items-center">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-hazard-blue-500 p-2 font-bold text-white drop-shadow">
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
                  <Link href="/" passHref>
                    <img
                      className="block h-8 w-auto"
                      src="https://new.ifgsd.com/wp-content/uploads/2019/04/cropped-IFGLogo2016_icon.png"
                      alt="IFG Logo Icon"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="p-3 lg:hidden">
            <div className="flex flex-col">
              <Menu>
                <div>
                  <Menu.Button className="flex h-full w-full flex-row items-center rounded bg-neon-orange-500 p-3 text-seabreeze-500">
                    <p>Join IFG</p>
                    <ChevronDownIcon
                      className="ml-2 h-5 w-5"
                      aria-hidden="true"
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
                    <Menu.Items className="ml-10 flex flex-col">
                      <Menu.Item>
                        <Menu as="div" className="p-3">
                          <Menu.Button className="flex flex-row items-center">
                            Why Choose Us
                            <ChevronDownIcon className="ml-2 h-5 w-5" />
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
                            <Menu.Items className="ml-10 flex flex-col">
                              <Menu.Item className="p-3">
                                {({ active }) => (
                                  <Link
                                    className={`${active && "bg-blue-500"}`}
                                    href="/join/why-choose-us/our-mission-and-values"
                                  >
                                    Our Mission
                                  </Link>
                                )}
                              </Menu.Item>
                              <Menu.Item className="p-3">
                                {({ active }) => (
                                  <Link
                                    className={`${active && "bg-blue-500"}`}
                                    href="/join/why-choose-us/the-ifg-experience"
                                  >
                                    The IFG Experience
                                  </Link>
                                )}
                              </Menu.Item>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </Menu.Item>
                      <Menu.Item className="px-2 py-3">
                        {({ active }) => (
                          <Link
                            className={`${
                              active && "bg-hazard-blue-500"
                            } hover:text-seabreeze-500`}
                            href="/join/business-solutions-models"
                          >
                            Business Solutions Models
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item className="p-3">
                        {({ active }) => (
                          <Link
                            className={`${active && "bg-blue-500"}`}
                            href="/join/contact"
                          >
                            Contact Us
                          </Link>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </div>
              </Menu>
              <Menu>
                <div>
                  <Menu.Button className="flex h-full flex-row items-center p-3">
                    <p>About</p>
                    <ChevronDownIcon
                      className="ml-2 h-5 w-5"
                      aria-hidden="true"
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
                    <Menu.Items className="ml-10 flex flex-col">
                      <Menu.Item className="p-3">
                        {({ active }) => (
                          <Link
                            className={`${active && "bg-blue-500"} p-3`}
                            href="/about/leadership"
                          >
                            Leadership
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item className="p-3">
                        {({ active }) => (
                          <Link
                            className={`${active && "bg-blue-500"} p-3`}
                            href="/about/our-story"
                          >
                            Our Story
                          </Link>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </div>
              </Menu>
              <Menu>
                <div>
                  <Menu.Button className="flex h-full flex-row items-center p-3">
                    <p>Press & Media</p>
                    <ChevronDownIcon
                      className="ml-2 h-5 w-5"
                      aria-hidden="true"
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
                    <Menu.Items className="ml-10 flex flex-col">
                      <Menu.Item className="p-3">
                        {({ active }) => (
                          <Link
                            className={`${active && "bg-blue-500"}`}
                            href="/press-and-media/awards-and-accolades"
                          >
                            Awards & Accolades
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item className="p-3">
                        {({ active }) => (
                          <Link
                            className={`${active && "bg-blue-500"}`}
                            href="/press-and-media/ifg-in-the-news"
                          >
                            IFG in the News
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item className="p-3">
                        {({ active }) => (
                          <Link
                            className={`${active && "bg-blue-500"}`}
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
                  <Menu.Button className="flex h-full flex-row items-center p-3">
                    <p>Offerings</p>
                    <ChevronDownIcon
                      className="ml-2 h-5 w-5"
                      aria-hidden="true"
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
                    <Menu.Items className="ml-10 flex flex-col">
                      <Menu.Item className="p-3">
                        {({ active }) => (
                          <Link
                            className={`${active && "bg-blue-500"}`}
                            href="/offerings/compliance"
                          >
                            Compliance
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item className="p-3">
                        {({ active }) => (
                          <Link
                            className={`${active && "bg-blue-500"}`}
                            href="/offerings/conferences"
                          >
                            Conferences
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item className="p-3">
                        {({ active }) => (
                          <Link
                            className={`${active && "bg-blue-500"}`}
                            href="/offerings/marketing-support"
                          >
                            Marketing Support
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item className="p-3">
                        {({ active }) => (
                          <Link
                            className={`${active && "bg-blue-500"}`}
                            href="/offerings/practice-development-and-succession-planning"
                          >
                            Practice Development & Succession Planning
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item className="p-3">
                        {({ active }) => (
                          <Link
                            className={`${active && "bg-blue-500"}`}
                            href="/offerings/product-platform-support"
                          >
                            Product & Platform Support
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item className="p-3">
                        {({ active }) => (
                          <Link
                            className={`${active && "bg-blue-500"}`}
                            href="/offerings/technology"
                          >
                            Technology
                          </Link>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </div>
              </Menu>
              <Menu className="h-full">
                <div>
                  <Menu.Button className="mx-auto p-3 ">
                    <Link href="/careers">Careers</Link>
                  </Menu.Button>
                </div>
              </Menu>
              <Menu className="h-full rounded bg-hazard-blue-500">
                <div>
                  <Menu.Button className="mx-auto flex h-full flex-row items-center p-3 text-seabreeze-500">
                    <Link href="https://new.ifgsd.com">Rep Login</Link>
                  </Menu.Button>
                </div>
              </Menu>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default MobileNav;
