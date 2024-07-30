import React, { useEffect, useState } from "react";

import Head from "next/head";
import Link from "next/link";

import Layout from "components/App/Layout/Layout";
import PageHeader from "components/App/InternalPages/PageHeader/PageHeader";
import ContentContainer from "components/App/ContentContainer/ContentContainer";
import Modal from "components/App/Modal/Modal";

import * as contentful from "utils/contentful";

import { ShoppingBagIcon, CheckCircleIcon } from "@heroicons/react/24/solid";

const ProductCard = ({ addToCart, product, cart }) => {
  const [itemAdded, setItemAdded] = useState(false);

  useEffect(() => {
    if (cart.findIndex((item) => item.sys.id == product.sys.id) == -1) {
      setItemAdded(false);
    }
  }, [cart]);

  return (
    <div
      key={product.sys.id}
      className="group relative flex flex-col rounded-md bg-white p-4 shadow"
    >
      <div className="aspect-h-1 aspect-w-1 lg:aspect-none w-full overflow-hidden rounded-md  lg:h-80">
        <img
          src={`https:${product.fields.mainProductImage.fields.file.url}`}
          className="aspect-square h-full w-full object-contain object-center mix-blend-multiply lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h4 className="text-sm text-gray-700">
            <a href={product.href}>{product.fields.productName}</a>
          </h4>
          <p className="mt-1 text-sm text-gray-500">{product.color}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">
          ${product.fields.price}
        </p>
      </div>
      <div className="mt-auto">
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
        <div className="mt-4 flex">
          <button
            data-productid={product.sys.id}
            className="w-full rounded bg-ifg-turqoise-500 px-2 py-3 text-sm font-semibold uppercase text-white shadow hover:cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-300"
            onClick={(e) => {
              addToCart(e);
              setItemAdded(true);
            }}
            disabled={itemAdded}
          >
            {itemAdded && "In Cart"}
            {!itemAdded && "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

const Cart = ({ cart, removeFromCart, updateCartQuantity }) => {
  const [emailIsSending, setEmailIsSending] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");

  const placeOrder = async (e) => {
    e.preventDefault();
    setEmailIsSending(true);

    const res = await fetch("/api/public/placeorder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName: fullName,
        email: email,
        shippingAddress: shippingAddress,
        subtotal: cart.reduce((a, b) => {
          return a + b.fields.price * b.quantity;
        }, 0),
        items: cart,
      }),
    });

    if (res.status == 200) {
      setOrderPlaced(true);
      setEmailIsSending(false);
    }
  };

  return (
    <div>
      <h4 className="mb-4 font-semibold">Cart</h4>
      {orderPlaced ? (
        <>
          <CheckCircleIcon className="mx-auto h-14 w-14 text-green-500" />
          <p className="text-center font-semibold text-gray-500">
            Your order has been placed!
          </p>
        </>
      ) : (
        <>
          {!cart.length && (
            <p className="text-center text-sm uppercase text-gray-500">
              No Items in Cart
            </p>
          )}
          {cart.length > 0 && (
            <>
              <ul className="space-y-2 divide-y">
                {cart.map((item) => (
                  <li
                    key={item.sys.id}
                    className="flex items-center justify-between gap-5 pt-4 first:pt-0"
                  >
                    <div className="flex-grow space-y-2">
                      <img
                        src={`https:${item.fields.mainProductImage.fields.file.url}`}
                        className="h-14 w-14 object-contain"
                      />
                      <p className="text-sm font-semibold">
                        {item.fields.productName}
                      </p>
                      <div className="flex gap-5">
                        <p className="self-end font-semibold text-ifg-turqoise-500">
                          ${item.fields.price}
                        </p>
                        <button
                          className="text-xs text-red-500"
                          data-productid={item.sys.id}
                          onClick={removeFromCart}
                        >
                          remove
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <label className="text-xs font-bold uppercase">
                        Quantity
                      </label>
                      <input
                        type="number"
                        defaultValue="1"
                        min={1}
                        className="w-1/2 rounded border-gray-300 pr-0"
                        name={item.sys.id}
                        onChange={(e) => updateCartQuantity(e)}
                      />
                    </div>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-right">
                <strong className="text-neon-orange-500">Subtotal</strong>:
                {" $"}
                {cart.reduce((a, b) => {
                  // console.log(`b value ${JSON.stringify(b)}`);

                  return a + b.fields.price * b.quantity;
                }, 0)}
              </p>
              <p className="my-2 text-xs italic text-red-500">
                Shipping & Handling Will be Applied After and you will receive
                an email with the tracking number and total price
              </p>
              <form className="space-y-4" onSubmit={placeOrder}>
                <div>
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    name="fullName"
                    className="w-full rounded border-gray-300"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    name="email"
                    className="w-full rounded border-gray-300"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="shippingAddress">Full Shipping Address</label>
                  <input
                    name="shipppingAddress"
                    className="w-full rounded border-gray-300"
                    type="text"
                    value={shippingAddress}
                    onChange={(e) => setShippingAddress(e.target.value)}
                    required
                  />
                </div>
                {emailIsSending ? (
                  <input
                    type="submit"
                    className="mt-6 w-full rounded bg-gray-500 px-2 py-3 font-bold text-gray-300 shadow"
                    disabled
                    value="Placing Order..."
                  />
                ) : (
                  <input
                    type="submit"
                    className="mt-6 w-full rounded bg-green-500 px-2 py-3 font-bold text-green-100 shadow hover:cursor-pointer"
                    value={"Place Order"}
                  />
                )}
              </form>
            </>
          )}
        </>
      )}
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
  const [cart, setCart] = useState([]);

  const addToCart = (e) => {
    const productId = e.target.dataset.productid;

    const item = products.find((product) => product.sys.id == productId);

    item.quantity = 1;

    setCart((prevState) => [...prevState, item]);
  };

  const removeFromCart = (e) => {
    const productId = e.target.dataset.productid;

    setCart((prevState) => [
      ...prevState.filter((item) => item.sys.id !== productId),
    ]);
  };

  const updateCartQuantity = (e) => {
    console.log(e.target.name);
    let productId = e.target.name;

    setCart((prevState) => {
      prevState.forEach((item) => {
        if (item.sys.id == productId) {
          item.quantity = e.target.value;
        }
      });

      return [...prevState];
    });
  };

  return (
    <>
      <Head>
        <title>Retail Shop | IFG Rep Portal</title>
      </Head>
      <PageHeader pageName="Retail Shop" breadCrumb="Resources" />
      <Layout preview={preview}>
        <ContentContainer>
          <section className="col-span-9">
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
            </div>
            <div className="mt-6 grid grid-cols-1 items-stretch gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
              {products.map((product) => {
                return (
                  <ProductCard
                    key={product.sys.id}
                    product={product}
                    addToCart={addToCart}
                    cart={cart}
                  />
                );
              })}
            </div>
          </section>
          <section className="sticky top-10 col-span-3 max-h-[500px] self-start overflow-y-auto rounded bg-white px-2 py-4 shadow">
            <Cart
              cart={cart}
              removeFromCart={removeFromCart}
              updateCartQuantity={updateCartQuantity}
            />
          </section>
        </ContentContainer>
      </Layout>
    </>
  );
};

export default Page;
