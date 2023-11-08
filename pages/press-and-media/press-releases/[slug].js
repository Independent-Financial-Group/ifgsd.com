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

  return (
    <>
      <Head>
        <title>{`${release.title} | IFG Press Release`}</title>
      </Head>
      <PublicLayout>
        <header className="relative h-[calc(75vh-60px)] bg-neon-orange-500 bg-cover bg-center bg-no-repeat md:h-[calc(70vh-60px)] lg:h-[calc(50vh-60px)] xl:h-[calc(50vh-60px)]">
          <Container>
            <h1 className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/3 text-center text-4xl text-seabreeze-500">
              {release.title}
            </h1>
            <Image
              src={`https:${release.image.fields.file.url}`}
              alt={release.image.fields.title}
              width={release.image.fields.file.details.image.width}
              height={release.image.fields.file.details.image.height}
              className="absolute -bottom-1/3 left-1/2 -translate-x-1/2 rounded-[20px] object-cover lg:-bottom-3/4 lg:h-[650px] lg:w-[1280px]"
            />
          </Container>
        </header>
        <section className="relative mt-[300px] lg:mt-[500px]">
          <Container>
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
            <article className="mx-auto my-10 max-w-prose rounded-lg bg-white px-8 py-10">
              {documentToReactComponents(release.writtenContent)}
            </article>
          </Container>
        </section>
      </PublicLayout>
    </>
  );
};

export default pressRelease;
