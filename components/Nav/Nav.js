import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Container from "../Container/Container";
import Logo from "../../public/logo-full-color.png";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  const path = router.pathname;

  return (
    <nav className="relative z-10 hidden bg-seabreeze-100 py-5 lg:block">
      <Container>
        <div className="row mx-auto flex max-w-screen-xl flex-row justify-between">
          <div className="col">
            <Link href="/" passHref>
              <Image
                width={250}
                alt="IFG logo"
                src={Logo}
                className="lg:max-w-[120px] xl:max-w-[250px]"
              />
            </Link>
          </div>
          <div className="col flex shrink-0 flex-row items-center lg:gap-x-5 xl:gap-x-10 ">
            <Menu>
              <div>
                <Menu.Button className="flex h-full flex-row rounded bg-neon-orange-500 p-3 text-seabreeze-500 transition-all hover:-translate-y-1 hover:drop-shadow">
                  <p>Join IFG</p>
                  <ChevronDownIcon
                    className="ext-dunkel-blue-500 h-5 w-5"
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
                  <Menu.Items className="absolute right-36 top-3/4 z-10 flex w-56 flex-col rounded bg-white text-sm drop-shadow xl:right-auto">
                    <Menu.Item>
                      <Menu as="div" className="relative">
                        <Menu.Button className="flex w-full flex-row items-center px-2 py-3 hover:bg-hazard-blue-500 hover:text-seabreeze-500">
                          Why Choose Us
                          <ChevronRightIcon className="h-5 w-5" />
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
                          <Menu.Items className="absolute left-full top-0 ml-1 flex w-56 flex-col rounded bg-white drop-shadow-md">
                            <Menu.Item className="px-2 py-3">
                              {({ active }) => (
                                <Link
                                  className={`${
                                    active && "bg-hazard-blue-500"
                                  } hover:text-seabreeze-500`}
                                  href="/join/why-choose-us/our-mission-and-values"
                                >
                                  Our Mission
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item className="px-2 py-3">
                              {({ active }) => (
                                <Link
                                  className={`${
                                    active && "bg-hazard-blue-500"
                                  } hover:text-seabreeze-500`}
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
                    <Menu.Item className="px-2 py-3">
                      {({ active }) => (
                        <Link
                          className={`${
                            active && "bg-hazard-blue-500"
                          } hover:text-seabreeze-500`}
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
                <Menu.Button className="flex flex-row items-center">
                  <p>About</p>
                  <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
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
                  <Menu.Items className="absolute top-3/4 flex w-56 flex-col rounded bg-white text-sm drop-shadow">
                    <Menu.Item className="px-2 py-3 hover:text-seabreeze-500">
                      {({ active }) => (
                        <Link
                          className={`${active && "bg-hazard-blue-500"}`}
                          href="/about/leadership"
                        >
                          Leadership
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item className="px-2 py-3 hover:text-seabreeze-500">
                      {({ active }) => (
                        <Link
                          className={`${active && "bg-hazard-blue-500"}`}
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
                <Menu.Button className="flex h-full flex-row items-center">
                  <p>Press & Media</p>
                  <ChevronDownIcon
                    className="ext-dunkel-blue-500 h-5 w-5"
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
                  <Menu.Items className="absolute top-3/4 flex w-56 flex-col rounded bg-white text-sm drop-shadow">
                    <Menu.Item className="px-2 py-3">
                      {({ active }) => (
                        <Link
                          className={`${
                            active && "bg-hazard-blue-500"
                          } hover:text-seabreeze-500`}
                          href="/press-and-media/awards-and-accolades"
                        >
                          Awards & Accolades
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item className="px-2 py-3">
                      {({ active }) => (
                        <Link
                          className={`${
                            active && "bg-hazard-blue-500"
                          } hover:text-seabreeze-500`}
                          href="/press-and-media/ifg-in-the-news"
                        >
                          IFG in the News
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item className="px-2 py-3">
                      {({ active }) => (
                        <Link
                          className={`${
                            active && "bg-hazard-blue-500"
                          } hover:text-seabreeze-500`}
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
                <Menu.Button className="flex h-full flex-row items-center">
                  <p>Offerings</p>
                  <ChevronDownIcon
                    className="ext-dunkel-blue-500 h-5 w-5"
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
                  <Menu.Items className="absolute top-3/4 flex w-56 flex-col rounded bg-white text-sm drop-shadow">
                    <Menu.Item className="px-2 py-3">
                      {({ active }) => (
                        <Link
                          className={`${
                            active && "bg-hazard-blue-500"
                          } hover:text-seabreeze-500`}
                          href="/offerings/compliance"
                        >
                          Compliance
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item className="px-2 py-3">
                      {({ active }) => (
                        <Link
                          className={`${
                            active && "bg-hazard-blue-500"
                          } hover:text-seabreeze-500`}
                          href="/offerings/conferences"
                        >
                          Conferences
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item className="px-2 py-3">
                      {({ active }) => (
                        <Link
                          className={`${
                            active && "bg-hazard-blue-500"
                          } hover:text-seabreeze-500`}
                          href="/offerings/marketing-support"
                        >
                          Marketing Support
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item className="px-2 py-3">
                      {({ active }) => (
                        <Link
                          className={`${
                            active && "bg-hazard-blue-500"
                          } hover:text-seabreeze-500`}
                          href="/offerings/practice-development-&-succession-planning"
                        >
                          Practice Development & Succession Planning
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item className="px-2 py-3">
                      {({ active }) => (
                        <Link
                          className={`${
                            active && "bg-hazard-blue-500"
                          } hover:text-seabreeze-500`}
                          href="/offerings/product-&-platform-support"
                        >
                          Product & Platform Support
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item className="px-2 py-3">
                      {({ active }) => (
                        <Link
                          className={`${
                            active && "bg-hazard-blue-500"
                          } hover:text-seabreeze-500`}
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
            <Menu>
              <div>
                <Menu.Item className="px-2 py-3">
                  {({ active }) => (
                    <Link className={`${active}`} href="/careers">
                      Careers
                    </Link>
                  )}
                </Menu.Item>
              </div>
            </Menu>
            <Menu className="relative">
              <div>
                <Menu.Button className="flex h-full flex-row text-dunkel-blue-500 ">
                  <Link href="/advisor-lookup" className="font-bold">
                    Find an Advisor
                  </Link>
                </Menu.Button>
              </div>
            </Menu>
            <Menu className="relative">
              <div>
                <Link
                  href="https://new.ifgsd.com"
                  className="flex h-full flex-row rounded bg-hazard-blue-500 p-3 text-seabreeze-500 transition-all hover:-translate-y-1 hover:drop-shadow"
                >
                  Rep Portal
                </Link>
              </div>
            </Menu>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Nav;
