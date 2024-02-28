import React, { useEffect } from "react";
import Link from "next/link";

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
    content_type: "portfolioConstructionModels",
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

  const products = await client.getEntries({
    content_type: "approvedProducts",
    "fields.slug[match]": slug,
  });

  return {
    props: {
      product: products.items[0] || false,
      preview: preview || false,
    },
    revalidate: 10,
  };
};

const ProductPage = ({ product, preview }) => {
  //   console.log(product.fields.supportingDocuments[0].fields.file);
  return (
    <Layout preview={preview}>
      <PageHeader
        pageName={product ? product.fields.offeringName : "NA"}
        breadCrumb="Alternative Investments > Approved Product"
      />
      <ContentContainer>
        {preview && (
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
            <div className="col-span-6">
              <h2 className="text-lg font-bold text-neon-orange-500">
                Details
              </h2>
              <Markdown
                className="text-sm leading-7 [&_a]:font-semibold [&_a]:text-blue-wave-500 [&_p]:mb-2"
                remarkPlugins={[remarkGfm]}
              >
                {product.fields.productWriteUp}
              </Markdown>
            </div>
          </>
        )}
      </ContentContainer>
    </Layout>
  );
};

export default ProductPage;
