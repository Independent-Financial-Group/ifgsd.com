import React from "react";
import Head from "next/head";

import PublicLayout from "../../components/PublicLayout/PublicLayout";
import Container from "../../components/Container/Container";
import Button from "../../components/Button/Button";

const contact = () => {
  return (
    <>
      <Head>
        <title>Contact | Independent Financial Group San Diego</title>
      </Head>
      <PublicLayout>
        <section className="relative mb-32 h-[50vh] bg-hazard-blue-500">
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
        </section>
        <section>
          <Container>
            <div className="lg:grid lg:grid-cols-2 lg:gap-5">
              <div>
                <h2 className="font-bold text-3xl">What's Next?</h2>
                <p className="my-8">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut mollitia est ipsa consequuntur autem iste veritatis laudantium molestias, inventore temporibus quam cum nam reprehenderit!
                </p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.1066452946834!2d-117.24179522286175!3d32.948193675216075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc089ef7b05133%3A0xe7eb08641dc760a!2sIndependent%20Financial%20Group!5e0!3m2!1sen!2sus!4v1695077972196!5m2!1sen!2sus" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <div>
                <div className="rounded-lg bg-white p-8">
                  <form className="space-y-4">
                    <div>
                      <label className="sr-only" htmlFor="name">
                        Name
                      </label>
                      <input
                        className="w-full rounded-lg border border-gray-200 focus:outline-none focus:border-neon-orange-500 focus:ring-1 focus:ring-neon-orange-500 p-3 text-sm"
                        placeholder="Name"
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
                          className="w-full rounded-lg border-gray-200 p-3 text-sm focus:outline-none focus:border-neon-orange-500 focus:ring-1 focus:ring-neon-orange-500"
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
                          className="w-full rounded-lg border-gray-200 p-3 text-sm focus:outline-none focus:border-neon-orange-500 focus:ring-1 focus:ring-neon-orange-500"
                          placeholder="Phone Number"
                          type="tel"
                          id="phone"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="sr-only" htmlFor="message">
                        Message
                      </label>

                      <textarea
                        className="w-full rounded-lg border-gray-200 p-3 text-sm focus:outline-none focus:border-neon-orange-500 focus:ring-1 focus:ring-neon-orange-500"
                        placeholder="Message"
                        rows="8"
                        id="message"
                      ></textarea>
                    </div>

                    <div className="mt-4">
                      <Button type="primary" href="">
                        Send
                      </Button>
                    </div>
                  </form>
                </div>
                <div>Independent Financial Group</div>
              </div>
            </div>
          </Container>
        </section>
      </PublicLayout>
    </>
  );
};

export default contact;
