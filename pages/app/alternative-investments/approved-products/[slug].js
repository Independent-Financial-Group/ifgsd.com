import React, { useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Layout from "components/App/Layout/Layout";
import PageHeader from "components/App/InternalPages/PageHeader/PageHeader";
import GridTile from "components/App/GridTile/GridTile";
import ContentContainer from "components/App/ContentContainer/ContentContainer";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

// HERO ICONS
import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  D,
} from "@heroicons/react/24/outline";

import { DocumentArrowDownIcon } from "@heroicons/react/20/solid";

// CONTENTFUL IMPORTS
import * as contentful from "utils/contentful";

export async function getStaticPaths() {
  const response = await contentful.client.getEntries({
    content_type: "approvedProducts",
  });

  const paths = response.items.map((item) => {
    return {
      params: {
        slug: item.fields.slug,
      },
    };
  });

  if (!response.items.length) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async ({ params, preview }) => {
  const slug = params.slug;

  const client = preview ? contentful.previewClient : contentful.client;

  const product = await client.getEntries({
    content_type: "approvedProducts",
    "fields.slug[match]": slug,
  });

  const otherProducts = await client.getEntries({
    content_type: "approvedProducts",
    "fields.productType[match]": product.items[0].fields.productType,
    order: "fields.offeringName",
  });

  return {
    props: {
      product: product.items[0],
      preview: preview || false,
      otherProducts: [...otherProducts.items],
    },
    revalidate: 10,
  };
};

const ProductPage = ({ product, preview, otherProducts }) => {
  return (
    <>
      <Head>
        <title>{product.fields.offeringName} | Offering Details</title>
      </Head>
      <PageHeader
        pageName={product.fields.offeringName}
        breadCrumb="Alternative Investments > Approved Product"
      />
      <Layout preview={preview}>
        <ContentContainer>
          {product && (
            <>
              <GridTile tileTitle="Product Overview" colSpan="col-span-6">
                {product.fields.productType !== "1031s" && (
                  <ol className="grid grid-cols-2 gap-5 pb-5 text-sm [&_h3]:font-semibold [&_li]:gap-2">
                    <li>
                      <h3>Sponsor</h3>
                      <p>{product.fields.sponsorName}</p>
                    </li>
                    <li>
                      <h3>Offering</h3>
                      <p>{product.fields.offeringName}</p>
                    </li>
                    <li>
                      <h3>Type</h3>
                      <p>{product.fields.productTypeCategory}</p>
                    </li>
                    <li>
                      <h3>Objective</h3>
                      <p>{product.fields.objective}</p>
                    </li>
                    <li>
                      <h3>Suitability</h3>
                      <p>{product.fields.suitability}</p>
                    </li>
                    <li>
                      <h3>Minimum</h3>
                      <p>{product.fields.minimum}</p>
                    </li>
                    <li>
                      <h3>Status</h3>
                      <p>{product.fields.status}</p>
                    </li>
                    <li>
                      <h3>Approval Date</h3>
                      <p>{product.fields.approvalDate}</p>
                    </li>
                    <li>
                      <h3>Contact</h3>
                      <p>{product.fields.contact}</p>
                      <p>{product.fields.phone}</p>
                    </li>
                  </ol>
                )}
              </GridTile>
              <GridTile
                scroll
                tileTitle="Supporting Documents"
                colSpan={"col-span-6"}
              >
                <ul className="flex flex-col gap-3">
                  {!product.fields.supportingDocuments && (
                    <div className="flex items-center">
                      <p className="w-full text-center font-bold uppercase text-gray-500">
                        No Documents
                      </p>
                    </div>
                  )}
                  {product.fields.supportingDocuments &&
                    product.fields.supportingDocuments.map((document) => (
                      <li
                        key={document.sys.id}
                        className="rounded bg-neon-orange-100 p-2"
                      >
                        <Link
                          href={`https:${document.fields.file.url}`}
                          className="flex items-center gap-2"
                          download
                          target="_blank"
                        >
                          <div className="w-fit">
                            <DocumentArrowDownIcon className="block h-10 w-10 text-neon-orange-500" />
                          </div>
                          <p className="line-clamp-1 text-sm font-bold text-neon-orange-500">
                            {document.fields.title}
                          </p>
                        </Link>
                      </li>
                    ))}
                </ul>
              </GridTile>
              <GridTile tileTitle="Details" colSpan="col-span-7">
                <Markdown
                  className="text-sm leading-7 [&>ul>li>ul]:ml-4 [&>ul>li>ul]:list-disc [&>ul]:list-disc [&_a]:font-semibold [&_a]:text-blue-wave-500 [&_blockquote]:ml-4 [&_h3]:font-semibold [&_h3]:text-neon-orange-500 [&_p]:mb-2 [&_td]:last:pl-3 [&_ul]:list-inside [&_ul_li_p]:inline-block"
                  remarkPlugins={[remarkGfm]}
                >
                  {product.fields.productWriteUp}
                </Markdown>
              </GridTile>
              <GridTile
                tileTitle={`Other ${product.fields.productType} Products`}
                colSpan="col-span-5"
                scroll
              >
                <ol className="flex flex-col divide-y">
                  {otherProducts.map((product) => (
                    <Link
                      key={product.sys.id}
                      href={product.fields.slug}
                      className="pt-1"
                    >
                      <h3 className="font-semibold">
                        {product.fields.offeringName}
                      </h3>
                      <p className="mb-2 text-sm">
                        <strong>Type: </strong>
                        {product.fields.productTypeCategory}
                      </p>
                    </Link>
                  ))}
                </ol>
              </GridTile>
            </>
          )}
        </ContentContainer>
      </Layout>
    </>
  );
};

export default ProductPage;
