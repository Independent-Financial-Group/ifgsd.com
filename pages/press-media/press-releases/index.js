import React from 'react'

import Nav from "../../../components/Nav/Nav"
import MobileNav from "../../../components/MobileNav/MobileNav"
import Footer from "../../../components/Footer/Footer"

import banner from "../../../public/press-release-hero.png"

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


const index = ({formattedPressReleases}) => {
  const posts = formattedPressReleases

  return (
    <>
      <Nav />
      <MobileNav />
      <header
        style={{
          backgroundImage: "url('/press-release-hero.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className=" py-32 sm:py-32 px-8">
          <div className="mx-auto max-w-7xl">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-seabreeze-500 sm:text-4xl text-center">Press Releases</h2>
              <p className="mt-2 text-lg leading-8 text-seabreeze-500 text-center">
                Stay in the know of all the happenings at the home office
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
            <aside className="mx-auto mt-10 xl:grid max-w-2xl xl:grid-cols-1 gap-x-8 gap-y-16 border-t border-sunburst-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none xl:col-span-2 hidden">
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