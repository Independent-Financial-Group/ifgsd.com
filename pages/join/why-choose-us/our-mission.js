import React from "react";
import PublicLayout from "../../../components/PublicLayout/PublicLayout";
import Container from "../../../components/Container/Container";
import Link from "next/link";

const ourMission = () => {
  return (
    <PublicLayout>
      <section className="relative mb-32 h-[20vh] bg-hazard-blue-500">
        <Container>
          <div className="absolute top-1/2 -translate-y-1/2">
            <h1 className="text-2xl font-bold text-white">
             <img className="inline" src="/graphicAssets/triangle-highlight.png" alt="ornament highlight" /> Our Mission
            </h1>
            <h2 className="font-bold text-white lg:text-6xl">Commited to Excellence</h2>
          </div>
        </Container>
      </section>
      <section className="my-32">
        <Container>
          <div className="lg:flex lg:gap-5">
            <div>
              <h2 className="text-3xl font-bold">
                <img
                  src="/graphicAssets/triangle-highlight.png"
                  alt="ornament"
                  className="mr-4 inline"
                />
                Personalized Services
              </h2>
              <p className="my-6 text-lg">
                Independent Financial Group is a comprehensive Independent
                Financial Services company committed to the support, success and
                independence of our financial advisors and their clients. We
                provide personalized service, common sense compliance and access
                to high quality products, technology and practice management
                solutions. We actively encourage an environment that balances
                business and family; where employees are valued, provided
                quality benefits and a supportive work environment that
                encourages personal and professional growth.
              </p>
            </div>
            <div className="relative">
              <img
                className="absolute -right-9 top-1/2 -translate-y-1/2"
                src="/graphicAssets/CTA-ornament.png"
              />
              <img
                className="rounded-lg"
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=5040&q=80"
              />
            </div>
          </div>
        </Container>
      </section>
      <section className="my-32 py-10 text-white">
        <Container classes={"bg-neon-orange-500 rounded-[40px] py-8"}>
          <h2 className="text-center text-3xl font-bold">Our Core Values</h2>
          <div className="gap-5 p-4 lg:grid lg:grid-cols-3">
            <div className="border-r-2">
              <img
                src="/graphicAssets/handshake.png"
                alt="handshake of integrity"
              />
              <h3 className="my-4 text-xl font-bold">Integrity</h3>
              <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptas alias, debitis saepe nesciunt natus esse at aut neque
                officia suscipit.
              </p>
            </div>
            <div className="border-r-2">
              <img src="/graphicAssets/balance.png" alt="balanced scale" />
              <h3 className="my-4 text-xl font-bold">Balance</h3>
              <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptas alias, debitis saepe nesciunt natus esse at aut neque
                officia suscipit.
              </p>
            </div>
            <div>
              <img src="/graphicAssets/person.png" alt="Independent Person" />
              <h3 className="my-4 text-xl font-bold">Independence</h3>
              <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptas alias, debitis saepe nesciunt natus esse at aut neque
                officia suscipit.
              </p>
            </div>
          </div>
        </Container>
      </section>
      <section className="my-32">
        <Container>
          <div className="lg:grid lg:grid-cols-2 lg:gap-5">
            <div className="self-center">
              <h2 className="text-3xl font-bold">
                <img
                  src="/graphicAssets/triangle-highlight.png"
                  alt="ornament"
                  className="mr-4 inline"
                />
                Experience Independence.
              </h2>
              <p className="my-6 text-lg">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Inventore alias nemo nulla nam. Vel recusandae saepe a veritatis
                quo. Laudantium aspernatur recusandae, facilis blanditiis
                accusantium impedit reiciendis eos cum hic corporis voluptatem
                dolore est, vitae repellendus ipsa nostrum itaque perferendis
                dignissimos. A ab iure vel odit, voluptatum eaque repellendus
                perspiciatis.
              </p>
              <Link
                href="/join/contact"
                className="rounded border-2 border-hazard-blue-500 px-4 py-2 font-bold text-hazard-blue-500"
              >
                Talk to an IFG Rep
              </Link>
            </div>
            <div className="place-self-end">
              <div className="relative">
                <img
                  src="/graphicAssets/CTA-ornament.png"
                  alt="ornament"
                  className="absolute -bottom-10 left-1/2 -translate-x-1/2"
                />
                <img
                  className=" max-auto h-[500px] w-[450px] rounded-lg object-cover object-top"
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3149&q=80"
                  alt="Financial Professional"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </PublicLayout>
  );
};

export default ourMission;
