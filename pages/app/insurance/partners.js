import Head from "next/head";
import Link from "next/link";

import Layout from "components/App/Layout/Layout";
import ContentContainer from "components/App/ContentContainer/ContentContainer";
import PageHeader from "components/App/InternalPages/PageHeader/PageHeader";
import GridTile from "components/App/GridTile/GridTile";

export function getStaticProps({ preview }) {
  return {
    props: { preview: preview || false },
  };
}

const Page = ({ preview }) => {
  return (
    <>
      <Head>
        <title>Insurance Partners | IFG Rep Portal</title>
      </Head>
      <PageHeader pageName="Insurance Partners" breadCrumb="Insurance" />
      <Layout preview={preview}>
        <ContentContainer></ContentContainer>
      </Layout>
    </>
  );
};

export default Page;
