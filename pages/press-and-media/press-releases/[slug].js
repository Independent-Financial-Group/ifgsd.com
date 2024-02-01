import React from "react";
import { useRouter } from "next/router";
// IMPORT NEXT
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

// IMPORT COMPONENTS
import PublicLayout from "../../../components/PublicLayout/PublicLayout";
import Container from "../../../components/Container/Container";
import { formatDateAndTime } from "@contentful/f36-datetime";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";

import * as contentful from "../../../utils/contentful";
import { useContentfulLiveUpdates } from "@contentful/live-preview/react";

export const getStaticPaths = async () => {
  const pressReleases = await contentful.client.getEntries({
    content_type: "pressRelease",
    order: "-fields.date",
  });

  const paths = await pressReleases.items.map((release) => {
    return {
      params: {
        slug: release.fields.slug,
      },
    };
  });

  if (!pressReleases.items.length) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params, preview, draftMode }) => {
  const slug = params.slug;

  const client =
    preview || draftMode ? contentful.previewClient : contentful.client;

  const pressReleases = await client.getEntries({
    content_type: "pressRelease",
    order: "-sys.createdAt",
    "fields.slug[match]": slug,
  });

  return {
    props: {
      release: pressReleases.items[0],
    },
    revalidate: 5,
  };
};

const pressRelease = ({ release }) => {
  if (!release) return <div>Loading...</div>;

  const updatedRelease = useContentfulLiveUpdates(release);

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, text) => <p className="my-5">{text}</p>,
      [INLINES.HYPERLINK]: (node, text) => (
        <a className="text-blue-wave-500 underline" href={node.data.uri}>
          {text}
        </a>
      ),
    },
  };

  return (
    <>
      <Head>
        <title>{`${updatedRelease.fields.title} | IFG Press Release`}</title>
        <meta
          name="description"
          content={
            updatedRelease.fields.writtenContent.content[0].content[0].value.slice(
              0,
              116,
            ) + "..."
          }
        />
        <meta name="robots" content="follow, index" />
      </Head>
      <PublicLayout>
        <header className="bg-neon-orange-500 bg-cover bg-center bg-no-repeat px-10 py-24">
          <Container>
            <div className="">
              <p className="text-center text-base text-seabreeze-500">
                - Press Release -
              </p>
              <h1 className="my-5 text-center font-semibold text-seabreeze-500 md:text-3xl">
                {updatedRelease.fields.title}
              </h1>
              <p className="text-center text-base text-seabreeze-500">
                {updatedRelease.fields.date}
              </p>
            </div>
          </Container>
        </header>
        <section>
          <Container>
            <Image
              src={`https:${updatedRelease.fields.image.fields.file.url}`}
              alt={updatedRelease.fields.image.fields.title}
              width={
                updatedRelease.fields.image.fields.file.details.image.width
              }
              height={
                updatedRelease.fields.image.fields.file.details.image.height
              }
              className="mx-auto  my-5 h-[250px] w-[90%] rounded-[20px] object-contain md:h-[450px] lg:w-[688px]"
            />
            <div>
              <div className="flex flex-col items-center">
                <Image
                  src={`https:${updatedRelease.fields.author.fields.photo.fields.file.url}`}
                  height={
                    updatedRelease.fields.author.fields.photo.fields.file
                      .details.image.height
                  }
                  width={
                    updatedRelease.fields.author.fields.photo.fields.file
                      .details.image.width
                  }
                  alt={`Image of the editor of this article, ${updatedRelease.fields.author.fields.fullName}`}
                  className="h-[100px] w-[100px] rounded-full"
                />
                <h2 className=" text-base font-bold text-neon-orange-500">
                  {updatedRelease.fields.author.fields.fullName}
                </h2>
                <p className="text-center text-sm">
                  {updatedRelease.fields.author.fields.role}
                </p>
                <a
                  href="mailto:psaunders@ifgsd.com"
                  className="text-xs font-bold underline"
                >
                  Press Contact
                </a>
              </div>
              <article className="mx-auto my-10 max-w-prose rounded-lg bg-white px-8 py-10 shadow-md">
                {documentToReactComponents(
                  updatedRelease.fields.writtenContent,
                  options,
                )}
              </article>
            </div>
          </Container>
        </section>
      </PublicLayout>
    </>
  );
};

export default pressRelease;
