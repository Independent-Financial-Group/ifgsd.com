import React from "react";
// IMPORT NEXTJS
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

// IMPORT COMPONENTS
import PublicLayout from "../../components/PublicLayout/PublicLayout";
import PageHeader from "../../components/PageHeader/PageHeader";
import Container from "../../components/Container/Container";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Button from "../../components/Button/Button";

// IMPORT ASSETS
import highlight from "../../public/_global-graphics/highlight.png";
import highlightBlue from "../../public/_global-graphics/highlight-blue.png";
import stickyNotes from "../../public/_product-support/images/sticky-notes.webp";
import ornament from "../../public/_global-graphics/CTA-ornament.png";
import wealthDataPlatform from "../../public/_product-support/images/wealth-data-platform.png";

// CONTENTFUL IMPORTS
const contenful = require("contentful");

const client = contenful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticProps() {
  const initialData = await client.getEntries({
    content_type: "partners",
    "metadata.tags.sys.id[in]": "elite",
    order: "fields.partnerName",
  });

  const formattedData = initialData.items.map((item) => {
    return {
      ...item.fields,
      id: item.sys.id,
    };
  });

  return { props: { formattedData }, revalidate: 10 };
}

const productSupport = ({ formattedData }) => {
  console.log(formattedData);

  return (
    <>
      <Head>
        <title>
          Product & Platform Support | Offerings | Independent Financial Group
        </title>
      </Head>
      <PublicLayout>
        <PageHeader bgPath={"bg-[url(/_product-support/images/hero.webp)]"}>
          <h1 className="flex items-center text-5xl font-bold text-seabreeze-500  ">
            <Image src={highlight} alt="" />
            Product & Platform Support
          </h1>
        </PageHeader>
        <section className="my-10 lg:my-32">
          <Container>
            <Breadcrumb />
            <div className="lg:grid lg:grid-cols-2 lg:gap-5">
              <div className="relative">
                <h2 className="flex items-center gap-2 text-3xl font-bold text-hazard-blue-500">
                  <Image src={highlight} alt="decorative heading highlight" />
                  Vast Product Selection
                </h2>
                <p className="my-5 text-xl">
                  We have selling agreements with many well-known investment
                  solutions providers that cover all areas of financial planning
                  needs:
                </p>
                <Image
                  src={stickyNotes}
                  alt="writing on sticky notes"
                  className="rounded-xl"
                />
                <Image
                  src={ornament}
                  alt="decorative ornament"
                  className="absolute bottom-1/4 left-1/2 hidden -translate-x-1/2 lg:block"
                />
              </div>
              <div className="mt-5 lg:mt-0">
                <ul className="flex flex-col gap-5 lg:grid lg:grid-cols-2 lg:grid-rows-6">
                  <li className=" flex items-center justify-center rounded-lg bg-gradient-to-r from-neon-orange-500 to-neon-orange-600 text-center text-2xl font-bold text-seabreeze-500 lg:h-[150px] lg:w-[305px]">
                    Mutual Funds
                  </li>
                  <li className=" flex items-center justify-center rounded-lg bg-gradient-to-r from-neon-orange-500 to-neon-orange-600 text-center text-2xl font-bold text-seabreeze-500 lg:h-[150px] lg:w-[305px]">
                    Seperately Managed Accounts
                  </li>
                  <li className=" flex items-center justify-center rounded-lg bg-gradient-to-r from-neon-orange-500 to-neon-orange-600 text-center text-2xl font-bold text-seabreeze-500 lg:h-[150px] lg:w-[305px]">
                    Structured Products
                  </li>
                  <li className=" flex items-center justify-center rounded-lg bg-gradient-to-r from-neon-orange-500 to-neon-orange-600 text-center text-2xl font-bold text-seabreeze-500 lg:h-[150px] lg:w-[305px]">
                    Alternative Investments
                  </li>
                  <li className=" flex items-center justify-center rounded-lg bg-gradient-to-r from-neon-orange-500 to-neon-orange-600 text-center text-2xl font-bold text-seabreeze-500 lg:h-[150px] lg:w-[305px]">
                    Unit Investment Trusts
                  </li>
                  <li className=" flex items-center justify-center rounded-lg bg-gradient-to-r from-neon-orange-500 to-neon-orange-600 text-center text-2xl font-bold text-seabreeze-500 lg:h-[150px] lg:w-[305px]">
                    Third-Party Asset Managers
                  </li>
                  <li className=" flex items-center justify-center rounded-lg bg-gradient-to-r from-neon-orange-500 to-neon-orange-600 text-center text-2xl font-bold text-seabreeze-500 lg:h-[150px] lg:w-[305px]">
                    Equities
                  </li>
                  <li className=" flex items-center justify-center rounded-lg bg-gradient-to-r from-neon-orange-500 to-neon-orange-600 text-center text-2xl font-bold text-seabreeze-500 lg:h-[150px] lg:w-[305px]">
                    Fixed Income
                  </li>
                  <li className=" flex items-center justify-center rounded-lg bg-gradient-to-r from-neon-orange-500 to-neon-orange-600 text-center text-2xl font-bold text-seabreeze-500 lg:h-[150px] lg:w-[305px]">
                    Annuities
                  </li>
                  <li className=" flex items-center justify-center rounded-lg bg-gradient-to-r from-neon-orange-500 to-neon-orange-600 text-center text-2xl font-bold text-seabreeze-500 lg:h-[150px] lg:w-[305px]">
                    Insurance
                  </li>
                  <li className="col-span-2 flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-neon-orange-500 to-neon-orange-600 text-center text-2xl font-bold text-seabreeze-500">
                    and more...
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </section>
        <section className=" my-10 lg:my-32">
          <Container>
            <h2 className="bg-gradient-to-r from-blue-wave-400 via-blue-wave-500 to-blue-wave-400 bg-clip-text text-center text-[72px] font-bold text-transparent lg:text-[100px]">
              Invest with our Elite Partners
            </h2>
            <ul className="mt-5 flex flex-col gap-5 lg:grid lg:grid-cols-3">
              {formattedData.map((partner) => {
                return (
                  <li
                    key={partner.id}
                    className=" flex items-center justify-center rounded-lg bg-white py-5 text-center text-2xl font-bold text-seabreeze-500"
                  >
                    <Image
                      src={`https:${partner.logo.fields.file.url}`}
                      alt={partner.logo.fields.title}
                      width={partner.logo.fields.file.details.image.width}
                      height={partner.logo.fields.file.details.image.height}
                      className="aspect-[3/2] w-3/4 object-contain"
                    />
                  </li>
                );
              })}
              <li className="flex items-center justify-center rounded-lg bg-gradient-to-r from-hazard-blue-500 to-blue-wave-500 py-5 text-center text-2xl font-bold text-seabreeze-500">
                and more...
              </li>
            </ul>
          </Container>
        </section>
        {/* <section className="my-10 lg:my-32">
          <Container>
            <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-5">
              <div>
                <Image
                  src={wealthDataPlatform}
                  alt="IFG's proprietary wealth data platform"
                />
              </div>
              <div>
                <h2 className="flex gap-5 text-3xl font-bold text-neon-orange-500">
                  <Image src={highlightBlue} />
                  Robust Wealth Data Visualization
                </h2>
                <p className="mt-5 text-xl">
                  IFG&apos;s Wealth Data Platform allows you to visualize all of
                  your clients financial data to offer comprehensive guidance,
                  wherever they are on their wealth journey.
                </p>
              </div>
            </div>
          </Container>
        </section> */}
        <section className="rounded-[20px] bg-gradient-to-r from-hazard-blue-500 to-blue-wave-400 py-32 lg:rounded-[40px]">
          <Container
            classes={
              "text-seabreeze-500 flex flex-col items-start items-center"
            }
          >
            <h2 className="text-center text-3xl font-bold lg:w-1/2">
              Interested in Learning More about our Products & Platforms?
            </h2>
            <p className="my-5 text-center text-xl">
              Schedule a conversation with our team members!
            </p>
            <Button href={"/join/contact"} type={"primary"}>
              Schedule a Call
            </Button>
          </Container>
        </section>
      </PublicLayout>
    </>
  );
};

export default productSupport;
