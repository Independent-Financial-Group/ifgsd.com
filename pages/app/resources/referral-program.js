import React from "react";
import Head from "next/head";

import Layout from "../../../components/App/Layout/Layout";
import PageHeader from "../../../components/App/InternalPages/PageHeader/PageHeader";
import ContentContainer from "../../../components/App/ContentContainer/ContentContainer";
import ReferralProgramForm from "../../../components/App/ReferralProgramForm/ReferralProgramForm";

import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

export async function getStaticProps({ preview }) {
  return {
    props: {
      preview: preview || false,
    },
  };
}

const referralProgram = ({ preview }) => {
  return (
    <>
      <Head>
        <title>Referral Program | Resources</title>
      </Head>
      <PageHeader
        pageName="Advisor Referral Program"
        headerText="Get rewarded when advisors you know join our family."
        breadCrumb="Resources"
      />
      <Layout preview={preview}>
        <img
          src="https://images.ctfassets.net/9lvru9ro1ti1/0qYmRakTmoBJAMBwJZegu/4b1a9287c627a1936da26257e99425e4/advisor-referral-program-image.jpg"
          alt="advisor referral program"
          className="h-[300px] w-full rounded-b-lg object-cover"
        />
        <ContentContainer>
          <div className="col-span-full rounded bg-white px-4 py-2 shadow lg:grid lg:grid-cols-2 lg:gap-5">
            <div>
              <h2 className="text-2xl font-semibold text-ifg-turqoise-500">
                How it works.
              </h2>
              <p className="my-5">
                Complete the following form to submit your referral candidate.
                The IFG Recruiting team will be in touch to follow up and help
                move your candidate through the process of joining their new
                firm.
              </p>
              <p className="text-sm italic">
                Note: If you're referring a producing group, please list all
                members of the group within the Notes section. You will only
                receive the bonus for the advisors listed on your referral form.
              </p>
              <div>
                <h2 className="mt-5 font-bold">
                  Have Questions? Get in Contact.
                </h2>
                <div className="flex gap-2">
                  <img
                    src="https://images.ctfassets.net/9lvru9ro1ti1/3MNPczUQB9MHBafHlCIIBi/511519cae41a67ee0e5ab04e4186c356/IMG_2712-compressed.jpg"
                    className="w-24 rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-neon-orange-500">
                      Julia Kohan
                    </p>
                    <p className="text-sm italic">Sr. Recruiter </p>
                    <div className="space-y-2">
                      <p className="flex items-center gap-2 text-sm">
                        <PhoneIcon className="h-6 w-6 text-neon-orange-500" />
                        <span>(800) 269-1903 x212</span>
                      </p>
                      <p className="flex items-center gap-2 text-sm">
                        <EnvelopeIcon className="h-6 w-6 text-neon-orange-500" />
                        <span>jkohan@ifgsd.com</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <ReferralProgramForm />
            </div>
          </div>
        </ContentContainer>
      </Layout>
    </>
  );
};

export default referralProgram;
