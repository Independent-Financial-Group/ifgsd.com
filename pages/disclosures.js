// IMPORT NEXTJS
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

// IMPORT COMPONENTS
import PublicLayout from "../components/PublicLayout/PublicLayout";
import PageHeader from "../components/PageHeader/PageHeader";
import Container from "../components/Container/Container";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

// IMPORT ASSETS
import highlight from "../public/_global-graphics/highlight.png";

// CONTENTFUL
const contenful = require("contentful");

const client = contenful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticProps() {
  const disclosures = await client.getEntries({
    content_type: "faqs",
    "metadata.tags.sys.id[in]": "disclosuresPage",
  });

  return {
    props: {
      disclosures: [...disclosures.items],
    },
    revalidate: 10,
  };
}

const disclosures = ({ disclosures }) => {
  return (
    <>
      <Head>
        <title>Disclosures | Independent Financial Group</title>
      </Head>
      <PublicLayout>
        <header className="relative h-[calc(35vh-60px)] rounded-b-[20px] bg-neon-orange-500">
          <Container>
            <div className="absolute top-1/2 -translate-y-1/2 ">
              <h1 className="text-5xl font-bold text-seabreeze-500">
                Disclosures
              </h1>
            </div>
          </Container>
        </header>
        <section className="my-10 lg:my-32">
          <Container>
            {documentToReactComponents(disclosures[0].fields.text)}
          </Container>
        </section>
      </PublicLayout>
    </>
  );
};

export default disclosures;
