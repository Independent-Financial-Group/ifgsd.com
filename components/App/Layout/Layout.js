import { Fragment, useState } from "react";
import { Dialog, Transition, Disclosure } from "@headlessui/react";
import {
  Bars3Icon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
  ChevronRightIcon,
  PhoneIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/outline";

import { UserButton } from "@clerk/nextjs";

import Image from "next/image";
import Link from "next/link";

import logoIcon from "../../../public/ifg-icon.png";

const navigation = [
  { name: "Dashboard", href: "/app", icon: HomeIcon, current: true },
  {
    name: "Departments",
    icon: BuildingOffice2Icon,
    current: false,
    children: [
      {
        name: "Advisory",
        links: [
          { name: "Overview", href: "#" },
          { name: "Approved Products", href: "#" },
          { name: "Partners", href: "#" },
          { name: "Tools", href: "#" },
          { name: "Education", href: "#" },
        ],
      },
      {
        name: "Alt. Investments",
        links: [
          { name: "Overview", href: "#" },
          { name: "Approved Products", href: "#" },
          { name: "Partners", href: "#" },
          { name: "Tools", href: "#" },
          { name: "Education", href: "#" },
        ],
      },
      {
        name: "Annuities",
        links: [
          { name: "Overview", href: "#" },
          { name: "Approved Products", href: "#" },
          { name: "Partners", href: "#" },
          { name: "Tools", href: "#" },
          { name: "Education", href: "#" },
        ],
      },
      {
        name: "Compliance",
        links: [
          { name: "Overview", href: "#" },
          { name: "Approved Products", href: "#" },
          { name: "Partners", href: "#" },
          { name: "Tools", href: "#" },
          { name: "Education", href: "#" },
        ],
      },
      {
        name: "Insurance",
        links: [
          { name: "Overview", href: "#" },
          { name: "Approved Products", href: "#" },
          { name: "Partners", href: "#" },
          { name: "Tools", href: "#" },
          { name: "Education", href: "#" },
        ],
      },
      {
        name: "Annuities",
        links: [
          { name: "Overview", href: "#" },
          { name: "Approved Products", href: "#" },
          { name: "Partners", href: "#" },
          { name: "Tools", href: "#" },
          { name: "Education", href: "#" },
        ],
      },
      {
        name: "Operations",
        links: [
          { name: "Overview", href: "#" },
          { name: "Approved Products", href: "#" },
          { name: "Partners", href: "#" },
          { name: "Tools", href: "#" },
          { name: "Education", href: "#" },
        ],
      },
      {
        name: "Practice Development",
        links: [
          { name: "Overview", href: "#" },
          { name: "Approved Products", href: "#" },
          { name: "Partners", href: "#" },
          { name: "Tools", href: "#" },
          { name: "Education", href: "#" },
        ],
      },
      {
        name: "Retirement Services",
        links: [
          { name: "Overview", href: "#" },
          { name: "Approved Products", href: "#" },
          { name: "Partners", href: "#" },
          { name: "Tools", href: "#" },
          { name: "Education", href: "#" },
        ],
      },
      {
        name: "Supervision",
        links: [
          { name: "Overview", href: "#" },
          { name: "Approved Products", href: "#" },
          { name: "Partners", href: "#" },
          { name: "Tools", href: "#" },
          { name: "Education", href: "#" },
        ],
      },
    ],
  },
  {
    name: "Resources",
    icon: FolderIcon,
    current: false,
    children: [{ name: "Podcast", href: "#" }],
  },
  { name: "Contact", current: false, icon: PhoneIcon, href: "/app/contact" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2">
                    <div className="flex h-16 shrink-0 items-center">
                      <Image
                        className="mx-auto h-8 w-auto"
                        src={logoIcon}
                        alt="ifg logo"
                      />
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul
                            role="list"
                            className="  -mx-2 flex flex-col gap-y-2 space-y-1"
                          >
                            {navigation.map((parentItem) => (
                              <Disclosure key={parentItem.name}>
                                {parentItem.children ? (
                                  <>
                                    <Disclosure.Button className="flex w-full items-center gap-x-3 rounded-lg p-2 font-bold text-neon-orange-600 hover:bg-neon-orange-100 hover:text-neon-orange-500">
                                      <parentItem.icon
                                        className={classNames(
                                          parentItem.current
                                            ? "text-indigo-600"
                                            : "",
                                          "h-6 w-6 shrink-0",
                                        )}
                                        aria-hidden="true"
                                      />
                                      {parentItem.name}
                                    </Disclosure.Button>
                                    <Disclosure.Panel>
                                      {parentItem.children.map((childItem) => {
                                        return (
                                          <Disclosure
                                            as="ul"
                                            className="ml-8 flex flex-col"
                                          >
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg p-2 font-bold text-hazard-blue-700 hover:bg-hazard-blue-100 hover:text-hazard-blue-500">
                                              {childItem.name}
                                            </Disclosure.Button>
                                            <Disclosure.Panel>
                                              {childItem.links ? (
                                                <Disclosure
                                                  as="ul"
                                                  className="flex flex-col items-start"
                                                >
                                                  {childItem.links.map(
                                                    (link) => {
                                                      return (
                                                        <>
                                                          <Link
                                                            href={link.href}
                                                            className={classNames(
                                                              parentItem.current
                                                                ? "bg-gray-50 text-indigo-600"
                                                                : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600",
                                                              "group ml-8 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
                                                            )}
                                                          >
                                                            {link.name}
                                                          </Link>
                                                        </>
                                                      );
                                                    },
                                                  )}
                                                </Disclosure>
                                              ) : null}
                                            </Disclosure.Panel>
                                          </Disclosure>
                                        );
                                      })}
                                    </Disclosure.Panel>
                                  </>
                                ) : (
                                  <Disclosure>
                                    <Disclosure.Button className="flex w-full items-center gap-x-3 rounded-lg p-2 font-bold text-neon-orange-600 hover:bg-neon-orange-100 hover:text-neon-orange-500">
                                      <parentItem.icon
                                        className="h-6 w-6 shrink-0"
                                        aria-hidden="true"
                                      />
                                      <Link href={parentItem.href}>
                                        {parentItem.name}
                                      </Link>
                                    </Disclosure.Button>
                                  </Disclosure>
                                )}
                              </Disclosure>
                            ))}
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* STATIC SIDEBAR FOR DESKTOP */}
        <div className="relative hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white">
            <div className="flex h-16 shrink-0 items-center">
              <Image
                className="mx-auto h-8 w-auto"
                src={logoIcon}
                alt="Your Company"
              />
            </div>
            <nav>
              <ul className="flex flex-col gap-y-5">
                {/* LOOP THROUGH NAVIGATION ARRAY */}
                {navigation.map((parentItem) => {
                  return (
                    <li className="px-4">
                      {/* RENDER A DISCLOSURE FOR THE PARENT ITEM IN THE NAVIGATION ARRAY */}
                      <Disclosure as="div">
                        {({ open }) => (
                          <>
                            {/* DOES THE PARENT ITEM HAVE CHILDREN?*/}
                            {parentItem.children ? (
                              <>
                                <Disclosure.Button className="group flex w-full items-center gap-x-3 rounded-lg px-2 py-2 font-bold text-neon-orange-600 hover:bg-neon-orange-100 hover:text-neon-orange-500">
                                  <parentItem.icon
                                    className="h-6 w-6 shrink-0"
                                    aria-hidden="true"
                                  />
                                  {parentItem.name}
                                  <ChevronRightIcon
                                    className={
                                      open
                                        ? "ml-auto h-5 w-auto rotate-90 transform"
                                        : "ml-auto h-5 w-auto"
                                    }
                                  />
                                </Disclosure.Button>
                                <Disclosure.Panel className="ml-4 mt-2">
                                  <ul className="flex flex-col">
                                    {/* LOOP OVER THE CHILD ITEMS */}
                                    {parentItem.children.map((childItem) => {
                                      return (
                                        <>
                                          {/* DOES THE CHILD ITEM HAVE LINKS? */}
                                          {childItem.links ? (
                                            <Disclosure>
                                              {({ open }) => {
                                                return (
                                                  <>
                                                    <Disclosure.Button className="flex w-full items-center justify-between rounded-lg p-2 font-bold text-hazard-blue-700 hover:bg-hazard-blue-100 hover:text-hazard-blue-500">
                                                      {childItem.name}
                                                      <ChevronRightIcon
                                                        className={
                                                          open
                                                            ? "h-5 w-auto rotate-90 transform"
                                                            : "h-5 w-auto"
                                                        }
                                                      />
                                                    </Disclosure.Button>
                                                    <Disclosure.Panel>
                                                      <ul>
                                                        {/* LOOP OVER THE LINKS */}
                                                        {childItem.links.map(
                                                          (link) => {
                                                            return (
                                                              <Disclosure
                                                                as="ul"
                                                                className="ml-4"
                                                              >
                                                                <Disclosure.Button
                                                                  as="li"
                                                                  className="rounded-lg p-2 hover:bg-gray-100 hover:text-gray-500"
                                                                >
                                                                  <Link
                                                                    href={
                                                                      link.href
                                                                    }
                                                                    className="block w-full"
                                                                  >
                                                                    {link.name}
                                                                  </Link>
                                                                </Disclosure.Button>
                                                              </Disclosure>
                                                            );
                                                          },
                                                        )}
                                                      </ul>
                                                    </Disclosure.Panel>
                                                  </>
                                                );
                                              }}
                                            </Disclosure>
                                          ) : (
                                            <Link
                                              className="flex w-full items-center justify-between rounded-lg p-2 font-bold text-hazard-blue-700 hover:bg-hazard-blue-100 hover:text-hazard-blue-500"
                                              href={childItem.href}
                                            >
                                              {childItem.name}
                                            </Link>
                                          )}
                                        </>
                                      );
                                    })}
                                  </ul>
                                </Disclosure.Panel>
                              </>
                            ) : (
                              <Disclosure>
                                <Disclosure.Button className="flex w-full items-center gap-x-3 rounded-lg p-2 font-bold text-neon-orange-600 hover:bg-neon-orange-100 hover:text-neon-orange-500">
                                  <parentItem.icon
                                    className="h-6 w-6 shrink-0"
                                    aria-hidden="true"
                                  />
                                  <Link href={parentItem.href}>
                                    {parentItem.name}
                                  </Link>
                                </Disclosure.Button>
                              </Disclosure>
                            )}
                          </>
                        )}
                      </Disclosure>
                    </li>
                  );
                })}
                <li className="absolute bottom-0 w-full bg-gray-100 hover:bg-gray-300">
                  <button className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-dunkel-blue-500">
                    <UserButton
                      showName={true}
                      appearance={{
                        elements: {
                          userButtonBox: "flex-row-reverse",
                          userButtonOuterIdentifier:
                            " text-dunkel-blue-500 font-semibold",
                          userButtonTrigger: "!focus:shadow-[#FF5617]",
                        },
                      }}
                    />
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 lg:hidden">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex-1 text-sm font-semibold leading-6 text-gray-900">
            Dashboard
          </div>
          <UserButton />
        </div>

        <main className="lg:pl-72">
          <div>{children}</div>
        </main>
      </div>
    </>
  );
}
