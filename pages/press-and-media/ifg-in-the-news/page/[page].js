import React from "react";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import PublicLayout from "../../../../components/PublicLayout/PublicLayout";
import PageHeader from "../../../../components/PageHeader/PageHeader";
import Container from "../../../../components/Container/Container";
import Pagination from "../../../../components/Pagination/Pagination";

// IMPORT ASSETS
import highlightOrange from "../../../../public/_global-graphics/highlight.png";

// IMPORT CONTENTFUL
import { formatDateAndTime } from "@contentful/f36-datetime";
const contentful = require("contentful");
const client = contentful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

const postsPerPage = 12;

export async function getStaticPaths() {
  const res = await client.getEntries({
    content_type: "newsArticle",
    // include: 0,
    order: "-fields.publishDate",
    skip: postsPerPage,
    limit: postsPerPage,
  });

  const paths = [];

  const totalPages = Math.ceil(res.total / postsPerPage);

  /**
   * Start from page 2, so we don't replicate /blog
   * which is page 1
   */
  for (let page = 2; page <= totalPages; page++) {
    paths.push({ params: { page: page.toString() } });
  }

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await client.getEntries({
    content_type: "newsArticle",
    order: "-fields.publishDate",
    skip: postsPerPage * (params.page - 1),
    limit: postsPerPage,
  });

  const totalPages = Math.ceil(res.total / postsPerPage);

  return {
    props: {
      posts: res.items,
      totalPages,
      currentPage: params.page,
    },
  };
}

const page = ({ posts, currentPage, totalPages }) => {
  return (
    <>
      <Head>
        <title>In the News | Independent Financial Group</title>
      </Head>
      <PublicLayout>
        <PageHeader bgPath={"bg-[url('/_press-releases/images/hero.webp')]"}>
          <h1 className="flex items-center gap-2 text-5xl font-bold text-seabreeze-500">
            <Image src={highlightOrange} alt="decorative heading highlight" />
            IFG in the News
          </h1>
        </PageHeader>
        <section className="my-10 lg:my-32">
          <Container>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              nextDisabled={currentPage == totalPages}
              path={"ifg-in-the-news"}
            />
            <div className="md:grid md:grid-cols-2 md:gap-5 lg:grid-cols-3">
              {posts.map((post) => {
                return (
                  <article
                    className="mb-10 flex flex-col bg-white md:mb-0"
                    key={post.sys.id}
                  >
                    <Image
                      src={`https:${post.fields.featureImage.fields.file.url}`}
                      alt={post.fields.featureImage.fields.title}
                      width={
                        post.fields.featureImage.fields.file.details.image.width
                      }
                      height={
                        post.fields.featureImage.fields.file.details.image
                          .height
                      }
                    />
                    <div className="flex grow flex-col px-5 py-10">
                      <p className="text-xs font-bold text-hazard-blue-500">
                        {formatDateAndTime(post.fields.publishDate, "day")}
                      </p>
                      <h2 className="mb-5 text-xl font-bold">
                        {post.fields.title}
                      </h2>
                      <br />
                      <div className="mt-auto self-end">
                        <Link
                          href={post.fields.linkToArticle}
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
              currentPage={currentPage}
              totalPages={totalPages}
              nextDisabled={currentPage == totalPages}
              path={"ifg-in-the-news"}
            />
          </Container>
        </section>
      </PublicLayout>
    </>
  );
};

export default page;
