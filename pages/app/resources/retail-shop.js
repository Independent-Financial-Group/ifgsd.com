import React, { useState } from "react";

import Head from "next/head";
import Link from "next/link";

import Layout from "components/App/Layout/Layout";
import PageHeader from "components/App/InternalPages/PageHeader/PageHeader";
import ContentContainer from "components/App/ContentContainer/ContentContainer";
import Modal from "components/App/Modal/Modal";

import * as contentful from "utils/contentful";

import { ShoppingBagIcon } from "@heroicons/react/24/solid";

const ProductCard = ({ product }) => {
  return (
    <div key={product.sys.id} className="group relative">
      <div className="aspect-h-1 aspect-w-1 lg:aspect-none w-full overflow-hidden rounded-md bg-gray-200  lg:h-80">
        <img
          src={`https:${product.fields.mainProductImage.fields.file.url}`}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h4 className="text-sm text-gray-700">
            <a href={product.href}>
              <span aria-hidden="true" className="absolute inset-0" />
              {product.fields.productName}
            </a>
          </h4>
          <p className="mt-1 text-sm text-gray-500">{product.color}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">
          ${product.fields.price}
        </p>
      </div>
      <div>
        {product.fields.hasLimitedAvailability && (
          <em className="text-xs italic text-red-500">
            This item is in limited availability. We may not have this item in
            stock at your time of order.
          </em>
        )}
        {product.fields.productHasVariations && (
          <div className="mt-4 flex items-center justify-end gap-2">
            <p className="text-xs font-semibold">Available in:</p>
            {product.fields.productVariationImages.map((variation) => (
              <img src={`https:${variation.fields.file.url}`} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export async function getStaticProps({ preview }) {
  const client = preview ? contentful.previewClient : contentful.client;

  const data = await client.getEntries({
    content_type: "retailShop",
    order: "fields.productName",
  });

  return {
    props: {
      products: [...data.items],
      preview: preview || false,
    },
    revalidate: 10,
  };
}

const Page = ({ products, preview }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Retail Shop | IFG Rep Portal</title>
      </Head>
      <PageHeader pageName="Retail Shop" breadCrumb="Resources" />
      <Layout preview={preview}>
        <ContentContainer>
          <section className="col-span-full">
            <div className="lg:grid lg:grid-cols-2 lg:gap-5">
              <div>
                <h2 className="text-2xl font-bold text-ifg-turqoise-500">
                  IFG Merchandise
                </h2>
                <p>
                  Rep IFG with official branded merchandise, grab your gear for
                  success today.
                </p>
                <em className="text-sm text-red-500">
                  Prices do not include shipping and handling. Payments can be
                  made via check or commissions deduction.
                </em>
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="rounded bg-neon-orange-500 px-2 py-4 font-bold text-white shadow transition-all hover:-translate-y-1"
                  onClick={() => setOpen((prevState) => !prevState)}
                >
                  Place an order
                </button>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {products.map((product) => {
                return <ProductCard product={product} />;
              })}
            </div>
          </section>
        </ContentContainer>
        <Modal
          open={open}
          setOpen={setOpen}
          icon={<ShoppingBagIcon className="h-8 w-8 text-ifg-turqoise-500" />}
        >
          <p className="text-center font-bold uppercase text-hazard-blue-500">
            Place an order with IFG
          </p>
          <em className="text-sm text-gray-500">
            Limit 5 of each item per order
          </em>
          <form>
            <div className="flex flex-col gap-2">
              {products.map((product) => (
                <>
                  <div className="flex items-center justify-start gap-1">
                    <input
                      key={product.sys.id}
                      type="checkbox"
                      id={product.sys.id}
                      className="rounded border-gray-300 text-neon-orange-500 focus:ring-neon-orange-500"
                    />
                    <label>{product.fields.productName}</label>
                  </div>
                  <div className="ml-8">
                    <label className="text-xs font-bold">Quantity</label>
                    <input
                      type="number"
                      max="5"
                      min="1"
                      defaultValue="1"
                      className="ml-2 w-fit rounded border-gray-300 p-0 pl-2 text-center text-xs ring-2 focus:ring-neon-orange-500"
                    />
                  </div>
                </>
              ))}
            </div>
          </form>
        </Modal>
      </Layout>
    </>
  );
};

export default Page;
