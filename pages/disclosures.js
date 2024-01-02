// IMPORT NEXTJS
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

// IMPORT COMPONENTS
import PublicLayout from "../components/PublicLayout/PublicLayout";
import Container from "../components/Container/Container";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";

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
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, text) => <p className="my-5">{text}</p>,
    },
  };

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
            <Breadcrumb />
            {documentToReactComponents(disclosures[0].fields.text, options)}
          </Container>
        </section>
      </PublicLayout>
    </>
  );
};

export default disclosures;
