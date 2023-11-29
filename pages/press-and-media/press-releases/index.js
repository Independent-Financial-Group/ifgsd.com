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
import Pagination from "../../../components/Pagination/Pagination";
const contenful = require("contentful");
const client = contenful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticProps() {
  const pressReleases = await client.getEntries({
    content_type: "pressRelease",
    limit: 6,
    order: "-fields.date",
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
    props: { formattedPressReleases, pressReleases },
    revalidate: 10,
  };
}

const index = ({ formattedPressReleases, pressReleases }) => {
  const posts = formattedPressReleases;
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
            <Pagination
              totalPages={Math.ceil(pressReleases.total / 6)}
              currentPage={"1"}
              prevDisabled
              path={"press-releases"}
            />
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
                      className="h-[350px] object-fill"
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
            <Pagination
              totalPages={Math.ceil(pressReleases.total / 6)}
              currentPage={"1"}
              prevDisabled
              path={"press-releases"}
            />
          </Container>
        </section>
      </PublicLayout>
    </>
  );
};

export default index;
