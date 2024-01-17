import React, { useState } from "react";

// NEXTJS IMPORTS
import Head from "next/head";
import Image from "next/image";

// IMPORT COMPONENTS
import PublicLayout from "../../components/PublicLayout/PublicLayout";
import Container from "../../components/Container/Container";
import Button from "../../components/Button/Button";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Map from "../../components/Map/Map";
import PageHeader from "../../components/PageHeader/PageHeader";
import ContactForm from "../../components/ContactForm/ContactForm";

// IMPORT ASSETS
import highlight from "../../public/_global-graphics/highlight.png";
import arrow from "../../public/_contact/graphics/cta-arrow.png";
import ornament from "../../public/_global-graphics/CTA-ornament.png";

const contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us | Independent Financial Group San Diego</title>
        <meta
          name="description"
          content="Contact us or your financial advisor for questions."
        />
        <meta name="robots" content="follow, index" />
      </Head>
      <PublicLayout>
        <PageHeader bgPath={'bg-[url("/_contact/images/hero.webp")]'}>
          <h1 className="flex items-center gap-2 text-5xl font-bold text-seabreeze-500">
            <Image src={highlight} alt="decorative highlight graphic" />
            Contact Us
          </h1>
        </PageHeader>
        <section>
          <Container>
            <Breadcrumb />
            <div className="lg:grid lg:grid-cols-2 lg:gap-5">
              <div className="mb-20 lg:mb-0">
                <h2 className="flex items-start gap-2 text-3xl font-bold text-hazard-blue-500">
                  <Image src={highlight} alt="decorative heading highlight" />
                  What's Next?
                </h2>
                <p className="my-8 text-xl">
                  Unlock your potential with us! Send us a message and start the
                  journey towards a rewarding career opportunity tailored just
                  for you.
                </p>
                <div className="h-[500px]">
                  <Map />
                </div>
                <div className="mt-10">
                  <h3 className="text-base font-bold text-neon-orange-500 lg:text-xl">
                    Independent Financial Group, LLC
                  </h3>
                  <ul>
                    <li className="flex gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-6 w-6 text-neon-orange-500"
                      >
                        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                      </svg>
                      <a href="mailto:info@ifgsd.com">info@ifgsd.com</a>
                    </li>
                    <li className="my-5 flex gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-6 w-6 text-neon-orange-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <a href="tel:8002691903">(800) 269 - 1903</a>
                    </li>
                    <li className="flex gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-6 w-6 text-neon-orange-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <a href="https://maps.app.goo.gl/ej1SFah3YuxZfmGfA">
                        12671 High Bluff Dr, Suite 200, San Diego, CA 92130
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative mb-20 lg:mb-0">
                <Image
                  src={ornament}
                  alt="decorative ornament graphic"
                  className="absolute -top-44 left-1/2 -z-10 -translate-x-1/2"
                />
                <ContactForm />
                <div className="relative my-8">
                  <Image
                    src={arrow}
                    alt="Decorative Arrow"
                    className="absolute left-1/2 top-0 -translate-x-1/2"
                  />
                  <p className=" pt-32  text-[70px] font-bold text-neon-orange-500 xl:text-[160px]">
                    Join Us
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </PublicLayout>
    </>
  );
};

export default contact;
