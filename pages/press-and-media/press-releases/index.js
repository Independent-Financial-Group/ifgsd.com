import React from "react";

// IMPORT COMPONENTS

import PublicLayout from "../../../components/PublicLayout/PublicLayout";
import PageHeader from "../../../components/PageHeader/PageHeader";
import Container from "../../../components/Container/Container";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";

// IMPORT NEXTJS
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

// IMPORT ASSETS
import highlightOrange from "../../../public/_global-graphics/highlight.png";

// CONTENTFUL
import { formatDateAndTime } from "@contentful/f36-datetime";
const contenful = require("contentful");
const client = contenful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticProps() {
  const pressReleases = await client.getEntries({
    content_type: "pressRelease",
  });

  const formattedPressReleases = pressReleases.items.map((item) => {
    return {
      image: item.fields.image,
      date: formatDateAndTime(item.fields.date, "day"),
      author: item.fields.author.fields,
      title: item.fields.title,
      slug: item.fields.slug,
      description: item.fields.description,
      writtenContent: item.fields.writtenContent,
      sys: item.sys,
    };
  });

  return {
    props: { formattedPressReleases },
    revalidate: 10,
  };
}

const index = ({ formattedPressReleases }) => {
  const posts = formattedPressReleases;
  console.log(posts);

  return (
    <>
      <Head>
        <title>Press Releases | Independent Financial Group</title>
      </Head>
      <PublicLayout>
        <PageHeader bgPath={"bg-[url('/_press-releases/images/hero.webp')]"}>
          <h1 className="flex items-center gap-2 text-5xl font-bold text-seabreeze-500">
            <Image src={highlightOrange} alt="decorative heading highlight" />
            Press Releases
          </h1>
        </PageHeader>
        <section className="my-10 lg:my-32">
          <Container>
            <Breadcrumb />
          </Container>
        </section>
        <section className="my-10 lg:my-32">
          <Container>
            <div className="md:grid md:grid-cols-2 md:gap-5 lg:grid-cols-3">
              {posts.map((post) => {
                return (
                  <article
                    className="mb-10 flex flex-col bg-white md:mb-0"
                    key={post.sys.id}
                  >
                    <Image
                      src={`https:${post.image.fields.file.url}`}
                      alt={post.image.fields.title}
                      width={post.image.fields.file.details.image.width}
                      height={post.image.fields.file.details.image.height}
                    />
                    <div className="flex grow flex-col px-5 py-10">
                      <p className="text-xs font-bold text-hazard-blue-500">
                        {formatDateAndTime(post.date, "day")}
                      </p>
                      <h2 className="mb-5 text-xl font-bold">{post.title}</h2>
                      <p className="text-base">{post.description}</p>
                      <br />
                      <div className="mt-auto self-end">
                        <Link
                          href={`./press-releases/${post.slug}`}
                          className=" text-neon-orange-500"
                        >
                          Read More &rarr;
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </Container>
        </section>
      </PublicLayout>
      {/* <Nav />
      <MobileNav />
      <header
        style={{
          backgroundImage: "url('/press-release-hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className=" px-8 py-32 sm:py-32">
          <div className="mx-auto max-w-7xl">
            <div>
              <h2 className="text-center text-3xl font-bold tracking-tight text-seabreeze-500 sm:text-4xl">
                Press Releases
              </h2>
              <p className="mt-2 text-center text-lg leading-8 text-seabreeze-500">
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
                <article
                  key={post.slug}
                  className="flex max-w-xl flex-col items-start justify-between"
                >
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={post.date} className="text-dunkel-blue-500">
                      {post.date}
                    </time>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-blue-wave-500 group-hover:text-blue-wave-200">
                      <Link href={`/press-media/press-releases/${post.slug}`}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-dunkel-blue-500">
                      {post.description}
                    </p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <img
                      src={`https:${post.author.photo.fields.file.url}`}
                      alt=""
                      className="h-10 w-10 rounded-full bg-gray-50"
                    />
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-blue-wave-500">
                        <Link href="#">
                          <span className="absolute inset-0" />
                          {post.author.fullName}
                        </Link>
                      </p>
                      <p className="text-dunkel-blue-600">{post.author.role}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer /> */}
    </>
  );
};

export default index;
