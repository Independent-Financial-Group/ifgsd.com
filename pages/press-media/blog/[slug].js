import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import Nav from "../../../components/Nav/Nav";
import MobileNav from "../../../components/MobileNav/MobileNav";
import Footer from "../../../components/Footer/Footer";
import { formatDateAndTime } from "@contentful/f36-datetime";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from '@contentful/rich-text-types';


const contentful = require("contentful");

const client = contentful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export const getStaticPaths = async () => {
  const blogPosts = await client.getEntries({
    content_type: "blogPost",
    order: "-sys.createdAt",
  });

  const formattedBlogPosts = blogPosts.items.map((item) => {
    return {
      date: formatDateAndTime(item.fields.date, "day"),
      author: item.fields.author.fields,
      title: item.fields.title,
      slug: item.fields.slug,
      description: item.fields.description,
      writtenContent: item.fields.writtenContent,
    };
  });

  const paths = await formattedBlogPosts.map((post) => {
    return {
      params: {
        slug: post.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const slug = params.slug;

  const blogPosts = await client.getEntries({
    content_type: "blogPost",
    order: "-sys.createdAt",
    "fields.slug[match]": slug,
  });

  const formattedBlogPosts = blogPosts.items.map((item) => {
    return {
      date: formatDateAndTime(item.fields.date, "day"),
      author: item.fields.author.fields,
      title: item.fields.title,
      slug: item.fields.slug,
      description: item.fields.description,
      writtenContent: item.fields.writtenContent,
    };
  });

  return {
    props: {
        post: formattedBlogPosts[0],
        revalidate: 5
    }
  }
};

const blogPost = ({ post }) => {

  const dtrOptions = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => (
        <Image src={`https://${node.data.target.fields.file.url}`} width={node.data.target.fields.file.details.image.width} height={node.data.target.fields.file.details.image.height} alt={node.data.target.fields.title} />
      )
    }
  }

  console.log(post.writtenContent);

  return (
    <>
      <Nav />
      <MobileNav />
      <main>
        <section className="dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-[900px] sm:py-16 lg:px-6">
            <header className="mb-4 lg:mb-6 not-format">
              <address className="flex items-center mb-6 not-italic">
                <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                  <Image
                    className="mr-4 w-16 h-16 rounded-full"
                    width={600}
                    height={600}
                    src={`https:${post.author.photo.fields.file.url}`}
                    alt="Jese Leos"
                  />
                  <div>
                    <Link
                      href="#"
                      rel="author"
                      className="text-xl font-bold text-gray-900 dark:text-white"
                    >
                      {post.author.fullName}
                    </Link>
                    <p className="text-base font-light text-gray-500 dark:text-gray-400">
                      {post.author.role}
                    </p>
                    <p className="text-base font-light text-gray-500 dark:text-gray-400">
                      <time
                        pubdate
                        datetime="2022-02-08"
                        title="February 8th, 2022"
                      >
                        {post.date}
                      </time>
                    </p>
                  </div>
                </div>
              </address>
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                {post.title}
              </h1>
            </header>
            <article>
                {documentToReactComponents(post.writtenContent, dtrOptions)}
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default blogPost;
