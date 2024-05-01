import React, { useEffect } from "react";

import Head from "next/head";
import Link from "next/link";

import Layout from "components/App/Layout/Layout";
import PageHeader from "components/App/InternalPages/PageHeader/PageHeader";
import ContentContainer from "components/App/ContentContainer/ContentContainer";
import Popover from "components/App/Popover/Popover";

import * as contentful from "utils/contentful";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { useDataSorter } from "utils/useDataSorter";

import { DocumentIcon } from "@heroicons/react/24/outline";

export async function getStaticProps({ preview }) {
  const client = preview ? contentful.previewClient : contentful.client;

  const data = await client.getEntries({
    content_type: "tools",
    "fields.department": "Insurance",
    order: "sys.createdAt",
  });

  return {
    props: {
      data: [...data.items],
      preview: preview || false,
    },
    revalidate: 10,
  };
}

const index = ({ data, preview }) => {
  const sortedData = useDataSorter(data, "category");

  useEffect(() => {
    console.log(sortedData);
  }, []);

  return (
    <>
      <Head>
        <title>Insurance Tools</title>
      </Head>
      <PageHeader pageName="Tools" breadCrumb="Insurance" />
      <Layout preview={preview}>
        <ContentContainer>
          {Object.keys(sortedData).map((key) => (
            <div key={key} className={`col-span-full rounded bg-white p-8`}>
              <h2 className="mb-5 text-2xl font-bold text-neon-orange-500">
                {key}
              </h2>
              <div className=" grid grid-cols-6 gap-5">
                {sortedData[key].map((item) => (
                  <div key={item.sys.id} className="col-span-2">
                    <img
                      src={`https:${item.fields.thumbnail.fields.file.url}`}
                      className="aspect-square h-36 object-contain"
                    />
                    <h3 className="mb-5 text-xl font-semibold text-hazard-blue-500">
                      {item.fields.title}
                    </h3>
                    <Markdown
                      className="my-5 text-xs leading-5 [&_a]:my-2 [&_a]:flex [&_a]:w-fit [&_a]:items-center [&_a]:gap-2 [&_a]:font-semibold [&_a]:text-blue-wave-500 [&_a_img]:h-4 [&_a_img]:w-4 [&_h3]:text-base [&_h3]:font-semibold [&_p]:mb-2 [&_ul]:list-inside [&_ul]:list-disc"
                      remarkPlugins={[remarkGfm]}
                    >
                      {item.fields.writtenContent}
                    </Markdown>
                    {item.fields.files && (
                      <>
                        <h3 className="mb-5 font-semibold">Files</h3>
                        <ol className="grid grid-cols-2 gap-5">
                          {item.fields.files.map((file) => (
                            <li
                              key={file.sys.id}
                              className="group relative w-fit"
                            >
                              <Popover text={file.fields.title} top="-top-10" />
                              <Link
                                href={`https:${file.fields.file.url}`}
                                target="_blank"
                                className="flex items-center gap-2 text-xs group-hover:cursor-pointer"
                              >
                                <DocumentIcon className="h-3 w-3 text-neon-orange-500" />
                                <p className="line-clamp-1">
                                  {file.fields.title}
                                </p>
                              </Link>
                            </li>
                          ))}
                        </ol>
                      </>
                    )}
                    {item.fields.link && (
                      <Link
                        className="rounded bg-neon-orange-500 p-2 font-bold text-seabreeze-500"
                        href={item.fields.link}
                      >
                        Launch
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </ContentContainer>
      </Layout>
    </>
  );
};

export default index;
