import React, { useState } from "react";

// NEXT JS IMPORTS
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// IMPORT COMPONENTS
import PublicLayout from "../../components/PublicLayout/PublicLayout";
import PageHeader from "../../components/PageHeader/PageHeader";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Container from "../../components/Container/Container";
import Button from "../../components/Button/Button";

// IMPORT ASSETS
import highlight from "../../public/_global-graphics/highlight.png";
import highlightBlue from "../../public/_global-graphics/highlight-blue.png";
import existing from "../../public/_business-solutions-models/images/existing-practice.jpg";
import independent from "../../public/_business-solutions-models/images/independent-practice.webp";
import selling from "../../public/_business-solutions-models/images/selling-practice.webp";
import bussinesSolutionsGraphic from "../../public/_business-solutions-models/graphics/Business-Solution-Illustration.png";
import faq from "../../public/_business-solutions-models/images/faq.webp";

// CONTENTFUL IMPORTS
const contenful = require("contentful");
const client = contenful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticProps() {
  const initialData = await client.getEntries({
    content_type: "affiliationModel",
    order: "sys.createdAt",
  });

  const formattedData = initialData.items.map((item) => {
    return {
      ...item.fields,
      id: item.sys.id,
    };
  });

  return { props: { formattedData }, revalidate: 10 };
}

const BusinessSolutionsModels = ({ formattedData }) => {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(null);

  const faqs = [
    {
      question: "Do you support fee-based or commission-based business?",
      answer:
        "IFG offers flexibility for independent financial professionals. Our offerings serve independent financial professionals with fee focused or fee only business models – and supports independent financial professionals in the process of transforming their business from fee focused to fee only.",
    },
    {
      question:
        "Will IFG support me if I have my own RIA? Can I use the IFG RIA?",
      answer: (
        <>
          You may elect to use IFG’s RIA or an independent RIA. Independent
          Financial Group is an independent broker-dealer, member{" "}
          <a
            href="https://finra.org"
            className="inline-block text-neon-orange-500 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            FINRA
          </a>{" "}
          /{" "}
          <a
            className="inline text-neon-orange-500 hover:scale-105"
            href="https://sipc.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            SIPC
          </a>
          , that is among the largest in the country, by reported gross revenue.{" "}
          <a href="/join/business-solutions-models#award-reference-1">
            <sup>1</sup>
          </a>
        </>
      ),
    },
  ];

  const handleClick = (e) => {
    setOpen(true);
    setId(e.target.dataset.id);
  };

  return (
    <>
      <Head>
        <title>Business Solutions Models | Independent Financial Group</title>
      </Head>
      <PublicLayout>
        <PageHeader
          bgPath={'bg-[url("/_business-solutions-models/images/hero.webp")]'}
        >
          <h1 className="flex items-start gap-2 text-3xl font-bold text-seabreeze-500 lg:items-center">
            <Image src={highlight} alt="decorative highlight graphic" />
            Business Solutions Models
          </h1>
        </PageHeader>
        <section className="my-20">
          <Container>
            <Breadcrumb />
            <div className="lg:grid lg:grid-cols-2 lg:gap-5">
              <div className="self-center">
                <h2 className="mb-10 flex items-center gap-2 text-2xl font-bold text-hazard-blue-500 lg:text-3xl">
                  <Image src={highlight} alt="decorative highlight graphic" />
                  Tailored to Your Needs
                </h2>
                <p>
                  We offer a customized suite of affiliation models designed to
                  align seamlessly with your business needs. Our advisors count
                  on us to empower their business growth and improve client
                  relationships so they can focus on what they love.
                </p>
              </div>
              <div className="justify-self-center">
                <Image
                  src={bussinesSolutionsGraphic}
                  alt="business man fitting a puzzle piece"
                />
              </div>
            </div>
          </Container>
        </section>
        <section className="my-20 rounded-[40px] bg-gradient-to-r from-hazard-blue-500 to-blue-wave-300 lg:py-7">
          <Container>
            <div className="my-5 lg:grid lg:grid-cols-2 lg:gap-5">
              <div>
                <h2 className="text-4xl font-bold text-seabreeze-500">
                  Advisor Solutions. Affiliation Flexibility.
                </h2>
                <Image
                  src={independent}
                  alt="ifg team"
                  className="my-5 self-center rounded-lg"
                />
              </div>
              <div>
                <p className="text-3xl font-light text-seabreeze-500">
                  You have the option of selecting from the following models:
                </p>
                <ul className="my-5 grid grid-cols-2 gap-5">
                  {formattedData.map((model) => {
                    return (
                      <li className="last:col-span-2" key={model.id}>
                        <p className="mb-5 text-xl font-light leading-7 text-seabreeze-500">
                          <span className="block text-2xl font-semibold">
                            {model.name}:
                          </span>{" "}
                          {model.shortDescription}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </Container>
        </section>
        <section className="my-20">
          <Container>
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-5">
                <h2 className="mb-10 flex items-center gap-2 text-2xl font-bold text-neon-orange-500 lg:text-3xl">
                  <Image
                    src={highlightBlue}
                    alt="decorative highlight graphic"
                  />
                  Frequent Questions & Answers
                </h2>
                <Image src={faq} alt="faq image" className="rounded-lg" />
                <p className="mt-4 text-base leading-7 text-gray-600">
                  Can’t find the answer you’re looking for? Reach out to our{" "}
                  <Link
                    href="/join/contact"
                    className="font-semibold text-neon-orange-600 hover:text-neon-orange-500"
                  >
                    team to learn more.
                  </Link>
                </p>
              </div>
              <div className="mt-10 lg:col-span-7 lg:mt-0">
                <dl className="space-y-10">
                  {faqs.map((faq) => (
                    <div key={faq.question}>
                      <dt className="text-base font-semibold leading-7 text-gray-900">
                        {faq.question}
                      </dt>
                      <dd className="mt-2 text-base leading-7 text-gray-600">
                        {faq.answer}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </Container>
        </section>
      </PublicLayout>
    </>
  );
};

export default BusinessSolutionsModels;
