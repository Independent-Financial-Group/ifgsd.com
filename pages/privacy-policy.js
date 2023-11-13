import React from "react";

// IMPORT NEXTJS
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

// IMPORT COMPONENTS
import PublicLayout from "../components/PublicLayout/PublicLayout";
import PageHeader from "../components/PageHeader/PageHeader";
import Container from "../components/Container/Container";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";

const privacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | Independent Financial Group</title>
      </Head>
      <PublicLayout>
        <header className="relative h-[calc(35vh-60px)] rounded-b-[20px] bg-neon-orange-500">
          <Container>
            <div className="absolute top-1/2 -translate-y-1/2 ">
              <h1 className="text-5xl font-bold text-seabreeze-500">
                Privacy Policy
              </h1>
            </div>
          </Container>
        </header>
        <section className="my-10 lg:my-32">
          <Container>
            <h2 className="mb-5 text-3xl font-bold text-hazard-blue-500">
              Commitment to the Client
            </h2>
            <p className="text-xl">
              Keeping your information secure and private is a priority for us.
              We are committed to safeguarding customer personal and financial
              information.
            </p>
          </Container>
        </section>
        <section className="my-10 lg:my-32">
          <Container>
            <h2 className="text-3xl font-bold text-hazard-blue-500">
              Non-Public Personal Information
            </h2>
            <p className="my-5 text-xl">
              In the course of providing service to you, we collect non-public
              personal information about you from the following sources:
            </p>
            <ul className="flex list-disc flex-col gap-5 text-xl">
              <li>
                Information from you on account applications and other standard
                forms (for example, name, address, date of birth, social
                security number, income, net worth and amounts of investment
                transactions);
              </li>
              <li>
                Information about your transactions from third parties that work
                closely with us to provide you with diverse financial products
                and services (for example, your account balance, payment
                history, parties to transactions, types and amounts of
                investment transactions, and Pershing account credit card and
                check writing usage;
              </li>
              <li>
                Information obtained when verifying the information, you provide
                on applications or other forms (this may be obtained from
                outside sources and/or other institutions where you conduct
                financial transactions).
              </li>
            </ul>
          </Container>
        </section>
        <section className="my-10 lg:my-32">
          <Container>
            <h2 className="text-3xl font-bold text-hazard-blue-500">
              Protecting Customer Information
            </h2>
            <p className="my-5 text-xl">
              Keeping your information secure is one of our most important
              responsibilities. We restrict access to non-public personal
              information to those employees and agents who need to know that
              information in order to provide products or services to you. We
              maintain physical, electronic, and procedural safeguards that
              comply with federal standards to guard your non-public personal
              information. We regularly review, update and modify our policies
              and procedures to respond to new threats and adapt to changes in
              technology. Here are just a few measures we take:
            </p>
            <ul className="flex list-disc flex-col gap-5 text-xl">
              <li>Implement Strong Authentication and Password Protocols;</li>
              <li>Enforce inactivity timeouts on our computers;</li>
              <li>Maintain and regularly test our firewalls;</li>
              <li>
                Continously update our anti-virus and anti-malware protection;
              </li>
              <li>Mandatory Training for RRs and employees.</li>
            </ul>
          </Container>
        </section>
        <section className="my-10 lg:my-32">
          <Container>
            <h2 className="text-3xl font-bold text-hazard-blue-500">
              Disclosures to Third Parties
            </h2>
            <p className="my-5 text-xl">
              We do not sell, share or disclose your personal information to
              third party marketing companies. We may disclose all of the
              information we collect, as described above, to companies that
              perform services on our behalf, or to other product and service
              providers with whom we have joint marketing agreements. All of
              these companies are contractually obligated to keep the
              information that we provide to them confidential and use the
              information only for the services required and as allowed by
              applicable law or regulation, and are not permitted to share or
              use the information for any other purpose.
            </p>
            <p className="my-5 text-xl">
              We may also disclose non-public personal information about you
              under circumstances as permitted by law. These disclosures
              typically include information to process transactions on your
              behalf, to conduct our operations, to follow your instructions as
              you authorize, or to protect the security of our financial
              records.
            </p>
          </Container>
        </section>
        <section className="my-10 lg:my-32">
          <Container>
            <h2 className="text-3xl font-bold text-hazard-blue-500">
              Disclosures to Affiliated Companies
            </h2>
            <p className="my-5 text-xl">
              In the course of providing services to you, we are permitted by
              law to share within our family of affiliated companies,
              information about your transactions or experiences with you.
            </p>
          </Container>
        </section>
        <section className="my-10 lg:my-32">
          <Container>
            <h2 className="text-3xl font-bold text-hazard-blue-500">
              Former Customers
            </h2>
            <p className="my-5 text-xl">
              If you decide to close your account(s) or your account becomes
              inactive, we will adhere to the privacy policies and practices as
              described in this notice. IFG reserves the right to change this
              policy at any time and will notify its clients in writing if any
              material changes occur. This privacy policy applies to consumers
              who are customers or former customers of IFG. Questions regarding
              this policy should be submitted in writing to the address below.
            </p>
            <div>
              <p className="font-bold text-neon-orange-500">
                ATTN: Legal Counsel
              </p>
              <p>Independent Financial Group, LLC</p>
              <p>12671 High Bluff Dr, Suite 200</p>
              <p>San Diego, CA 92130</p>
            </div>
          </Container>
        </section>
      </PublicLayout>
    </>
  );
};

export default privacyPolicy;
