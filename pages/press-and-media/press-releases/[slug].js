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

const contentful = require("contentful");

const client = contentful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export const getStaticPaths = async () => {
  const pressReleases = await client.getEntries({
    content_type: "pressRelease",
    order: "-fields.date",
  });

  const formattedPressReleases = pressReleases.items.map((item) => {
    return {
      date: formatDateAndTime(item.fields.date, "day"),
      editor: item.fields.author.fields,
      title: item.fields.title,
      slug: item.fields.slug,
      description: item.fields.description,
      writtenContent: item.fields.writtenContent,
    };
  });

  const paths = await formattedPressReleases.map((release) => {
    return {
      params: {
        slug: release.slug,
      },
    };
  });

  if (!formattedPressReleases.length) {
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

export const getStaticProps = async ({ params }) => {
  const slug = params.slug;

  const pressReleases = await client.getEntries({
    content_type: "pressRelease",
    order: "-sys.createdAt",
    "fields.slug[match]": slug,
  });

  const formattedPressReleases = pressReleases.items.map((item) => {
    return {
      image: item.fields.image,
      date: formatDateAndTime(item.fields.date, "day"),
      editor: item.fields.author.fields,
      title: item.fields.title,
      slug: item.fields.slug,
      description: item.fields.description,
      writtenContent: item.fields.writtenContent,
    };
  });

  return {
    props: {
      release: formattedPressReleases[0],
    },
    revalidate: 5,
  };
};

const pressRelease = ({ release }) => {
  if (!release) return <div>Loading...</div>;

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
        <title>{`${release.title} | IFG Press Release`}</title>
        <meta
          name="description"
          content={
            release.writtenContent.content[0].content[0].value.slice(0, 116) +
            "..."
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
                {release.title}
              </h1>
              <p className="text-center text-base text-seabreeze-500">
                {release.date}
              </p>
            </div>
          </Container>
        </header>
        <section>
          <Container>
            <Image
              src={`https:${release.image.fields.file.url}`}
              alt={release.image.fields.title}
              width={release.image.fields.file.details.image.width}
              height={release.image.fields.file.details.image.height}
              className="mx-auto  my-5 h-[250px] w-[90%] rounded-[20px] object-contain md:h-[450px] lg:w-[688px]"
            />
            <div>
              <div className="flex flex-col items-center">
                <Image
                  src={`https:${release.editor.photo.fields.file.url}`}
                  height={release.editor.photo.fields.file.details.image.height}
                  width={release.editor.photo.fields.file.details.image.width}
                  alt={`Image of the editor of this article, ${release.editor.fullName}`}
                  className="h-[100px] w-[100px] rounded-full"
                />
                <h2 className=" text-base font-bold text-neon-orange-500">
                  {release.editor.fullName}
                </h2>
                <p className="text-center text-sm">{release.editor.role}</p>
                <a
                  href="mailto:psaunders@ifgsd.com"
                  className="text-xs font-bold underline"
                >
                  Press Contact
                </a>
              </div>
              <article className="mx-auto my-10 max-w-prose rounded-lg bg-white px-8 py-10 shadow-md">
                {documentToReactComponents(release.writtenContent, options)}
              </article>
            </div>
          </Container>
        </section>
      </PublicLayout>
    </>
  );
};

export default pressRelease;
