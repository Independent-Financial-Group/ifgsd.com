import React from 'react'

import Nav from "../../../components/Nav/Nav"
import MobileNav from "../../../components/MobileNav/MobileNav"
import Footer from "../../../components/Footer/Footer"

const contenful = require("contentful");

const client = contenful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
})

import { formatDateAndTime } from '@contentful/f36-datetime';
import Link from 'next/link';

export async function getStaticProps() {
  const pressReleases = await client.getEntries({content_type: 'pressRelease'})

  const formattedPressReleases = pressReleases.items.map((item) => {
    return {
      allData: item,
      date: formatDateAndTime(item.fields.date, 'day'),
      author: item.fields.author.fields,
      title: item.fields.title,
      slug: item.fields.slug,
      description: item.fields.description,
      writtenContent: item.fields.writtenContent
    }
  })

  return {
    props: {formattedPressReleases},
    revalidate: 10
  }
}

const posts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  // More posts...
]

const index = ({formattedPressReleases}) => {
  const posts = formattedPressReleases

  console.log(posts)
  return (
    <>
      <Nav />
      <MobileNav />
      <header>
        <div className="bg-seabreeze-500 pt-24 sm:pt-32 px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-blue-wave-500 sm:text-4xl">Press Releases</h2>
              <p className="mt-2 text-lg leading-8 text-blue-wave-900">
                Stay in the know of all the happenings at the home office.
              </p>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="bg-seabreeze-500 px-8 ">
          <div className="mx-auto max-w-7xl xl:grid xl:grid-cols-12">
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-sunburst-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:col-span-10">
              {posts.map((post) => (
                <article key={post.slug} className="flex max-w-xl flex-col items-start justify-between">
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={post.date} className="text-dunkel-blue-500">
                      {post.date}
                    </time>
                    <a
                      href="#"
                      className="relative z-10 rounded-full px-3 py-1.5 font-medium bg-sunburst-100 text-dunkel-blue-500"
                    >
                      Press Release
                    </a>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-blue-wave-500 group-hover:text-blue-wave-200">
                      <Link href={`/press-media/press-releases/${post.slug}`}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-dunkel-blue-500">{post.description}</p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <img src={`https:${post.author.photo.fields.file.url}`} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-blue-wave-500">
                        <a href="#">
                          <span className="absolute inset-0" />
                          {post.author.fullName}
                        </a>
                      </p>
                      <p className="text-dunkel-blue-600">{post.author.role}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <aside className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-sunburst-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none xl:col-span-2 hidden xl:block">
                Categories
                <ul>
                  <li>press releases</li>
                  <li>blog</li>
                  <li>podcast</li>
                  <li></li>
                </ul>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default index