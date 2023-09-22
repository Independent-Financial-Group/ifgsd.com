import React, { useState } from "react";
import Head from "next/head";

import PublicLayout from "../../components/PublicLayout/PublicLayout";
import Container from "../../components/Container/Container";
import Button from "../../components/Button/Button";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

const contact = () => {
  const [states, setStates] = useState([
    "AL",
    "AK",
    "AS",
    "AZ",
    "AR",
    "CA",
    "CO",
    "CT",
    "DE",
    "DC",
    "FM",
    "FL",
    "GA",
    "GU",
    "HI",
    "ID",
    "IL",
    "IN",
    "IA",
    "KS",
    "KY",
    "LA",
    "ME",
    "MH",
    "MD",
    "MA",
    "MI",
    "MN",
    "MS",
    "MO",
    "MT",
    "NE",
    "NV",
    "NH",
    "NJ",
    "NM",
    "NY",
    "NC",
    "ND",
    "MP",
    "OH",
    "OK",
    "OR",
    "PW",
    "PA",
    "PR",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VT",
    "VI",
    "VA",
    "WA",
    "WV",
    "WI",
    "WY",
  ]);

  return (
    <>
      <Head>
        <title>Contact Us | Independent Financial Group San Diego</title>
      </Head>
      <PublicLayout>
        <section className="relative mb-32 h-[50vh] bg-[url('/homeofficebuilding-compressed.webp')] bg-cover bg-center">
          <div className="h-full w-full bg-gradient-to-r from-hazard-blue-500 to-black/0">
            <Container>
              <div className="absolute top-1/2 max-w-prose -translate-y-1/2">
                <h1 className="text-2xl font-bold text-seabreeze-500">
                  <img
                    className="inline"
                    src="/graphicAssets/triangle-highlight.png"
                    alt="ornament highlight"
                  />{" "}
                  Contact Us
                </h1>
                <h2 className="max-w-prose font-bold text-seabreeze-500 lg:text-6xl">
                  Looking for a truly independent firm? That's who we are.
                </h2>
              </div>
            </Container>
          </div>
        </section>
        <section>
          <Container>
            <Breadcrumb />
            <div className="lg:grid lg:grid-cols-2 lg:gap-5">
              <div>
                <h2 className="text-3xl font-bold">
                  <img
                    className="inline"
                    src="/graphicAssets/triangle-highlight.png"
                    alt="ornament highlight"
                  />{" "}
                  What's Next?
                </h2>
                <p className="my-8">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
                  mollitia est ipsa consequuntur autem iste veritatis laudantium
                  molestias, inventore temporibus quam cum nam reprehenderit!
                </p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.1066452946834!2d-117.24179522286175!3d32.948193675216075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc089ef7b05133%3A0xe7eb08641dc760a!2sIndependent%20Financial%20Group!5e0!3m2!1sen!2sus!4v1695077972196!5m2!1sen!2sus"
                  width="600"
                  height="450"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div>
                <div className="rounded-lg bg-white p-8">
                  <h2 className="my-5 text-3xl font-bold text-hazard-blue-500">
                    Send us a message and we'll reach out!
                  </h2>
                  <form className="space-y-4">
                    <div>
                      <label className="sr-only" htmlFor="name">
                        Name
                      </label>
                      <input
                        className="w-full rounded-lg border border-gray-200 p-3 text-sm focus:border-neon-orange-500 focus:outline-none focus:ring-1 focus:ring-neon-orange-500"
                        placeholder="Name"
                        type="text"
                        id="name"
                      />
                    </div>
                    <div>
                      <label className="sr-only" htmlFor="name">
                        Company/Organization
                      </label>
                      <input
                        className="w-full rounded-lg border border-gray-200 p-3 text-sm focus:border-neon-orange-500 focus:outline-none focus:ring-1 focus:ring-neon-orange-500"
                        placeholder="Company/Organization"
                        type="text"
                        id="name"
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className="sr-only" htmlFor="email">
                          Email
                        </label>
                        <input
                          className="w-full rounded-lg border-gray-200 p-3 text-sm focus:border-neon-orange-500 focus:outline-none focus:ring-1 focus:ring-neon-orange-500"
                          placeholder="Email address"
                          type="email"
                          id="email"
                        />
                      </div>

                      <div>
                        <label className="sr-only" htmlFor="phone">
                          Phone
                        </label>
                        <input
                          className="w-full rounded-lg border-gray-200 p-3 text-sm focus:border-neon-orange-500 focus:outline-none focus:ring-1 focus:ring-neon-orange-500"
                          placeholder="Phone Number"
                          type="tel"
                          id="phone"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className="sr-only" htmlFor="email">
                          City
                        </label>
                        <input
                          className="w-full rounded-lg border-gray-200 p-3 text-sm focus:border-neon-orange-500 focus:outline-none focus:ring-1 focus:ring-neon-orange-500"
                          placeholder="City"
                          type="text"
                          id="city"
                        />
                      </div>

                      <div>
                        <label className="sr-only" htmlFor="state">
                          Phone
                        </label>
                        <select id="state" className="w-full rounded-lg border-gray-200 p-3 text-sm focus:border-neon-orange-500 focus:outline-none focus:ring-1 focus:ring-neon-orange-500">
                          {states.map((state) => {
                            return (
                              <option value={state}>{state}</option>
                            )
                          })}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="sr-only" htmlFor="message">
                        Message
                      </label>

                      <textarea
                        className="w-full rounded-lg border-gray-200 p-3 text-sm focus:border-neon-orange-500 focus:outline-none focus:ring-1 focus:ring-neon-orange-500"
                        placeholder="Message"
                        rows="8"
                        id="message"
                      ></textarea>
                    </div>

                    <div className="mt-4 w-full">
                      <button className="w-full rounded-lg bg-neon-orange-500 px-4 py-3 font-bold text-seabreeze-500 hover:bg-neon-orange-600">
                        Send
                      </button>
                    </div>
                  </form>
                </div>
                <div className="mt-5 rounded-lg bg-white px-3 py-4">
                  <h3 className="text-2xl font-bold">
                    <img src="/logo.ico" className="mb-2 mr-2 inline" />
                    Independent Financial Group, LLC
                  </h3>
                  <address className="flex flex-col gap-2 text-lg">
                    <a href="mailto:info@ifgsd.com">
                      <strong>Email</strong>: info@ifgsd.com
                    </a>
                    <a href="tel:+18002691903">
                      <strong>Tel</strong>: (800) 269-1903
                    </a>
                    <a
                      href="https://maps.app.goo.gl/ej1SFah3YuxZfmGfA"
                      target="_blank"
                    >
                      <strong>Address</strong>: 12671 Highbluff Drive, Suite
                      200, San Diego, CA 92130
                    </a>
                  </address>
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
