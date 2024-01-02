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
  const newsArticles = await client.getEntries({
    content_type: "newsArticle",
    limit: 12,
    order: "-fields.publishDate",
  });

  return {
    props: { newsArticles },
    revalidate: 10,
  };
}

const index = ({ newsArticles }) => {
  return (
    <>
      <Head>
        <title>In the News | Independent Financial Group</title>
      </Head>
      <PublicLayout>
        <PageHeader bgPath={"bg-[url('/_ifg-in-the-news/images/hero.webp')]"}>
          <h1 className="flex items-center gap-2 text-5xl font-bold text-seabreeze-500">
            <Image src={highlightOrange} alt="decorative heading highlight" />
            IFG in the News
          </h1>
        </PageHeader>
        <section className="my-10 lg:my-32">
          <Container>
            <Breadcrumb />
          </Container>
        </section>
        <section>
          <Container>
            <Pagination
              currentPage={"1"}
              totalPages={Math.ceil(newsArticles.total / 12)}
              prevDisabled
              path={"ifg-in-the-news"}
            />
            <div className="md:grid md:grid-cols-2 md:gap-5 lg:grid-cols-3">
              {newsArticles.items.map((article) => {
                return (
                  <article
                    className="mb-10 flex flex-col bg-white md:mb-0"
                    key={article.sys.id}
                  >
                    {/* <Image
                      src={`https:${article.fields.featureImage.fields.file.url}`}
                      alt={article.fields.featureImage.fields.title}
                      width={
                        article.fields.featureImage.fields.file.details.image
                          .width
                      }
                      height={
                        article.fields.featureImage.fields.file.details.image
                          .height
                      }
                      className="h-[200px] object-cover"
                    /> */}
                    <div className="flex grow flex-col px-5 py-10">
                      <p className="text-xs font-bold text-hazard-blue-500">
                        {formatDateAndTime(article.fields.publishDate, "day")}
                      </p>
                      <h2 className="mb-5 text-xl font-bold">
                        {article.fields.title}
                      </h2>
                      <br />
                      <div className="mt-auto self-end">
                        <Link
                          href={article.fields.linkToArticle}
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
              currentPage={"1"}
              totalPages={Math.ceil(newsArticles.total / 12)}
              prevDisabled
              path={"ifg-in-the-news"}
            />
          </Container>
        </section>
      </PublicLayout>
    </>
  );
};

export default index;
