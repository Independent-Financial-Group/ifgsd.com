import React from "react";
import Head from "next/head";

import Layout from "../../../components/App/Layout/Layout";
import PageHeader from "../../../components/App/InternalPages/PageHeader/PageHeader";
import ContentContainer from "../../../components/App/ContentContainer/ContentContainer";
import ReferralProgramForm from "../../../components/App/ReferralProgramForm/ReferralProgramForm";

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
        <ContentContainer>
          <div className="leading-7 xl:col-span-6">
            <h2 className="text-2xl font-semibold text-hazard-blue-500">
              How it works.
            </h2>
            <p className="my-5">
              Complete the following form to submit your referral candidate. The
              IFG Recruiting team will be in touch to follow up and help move
              your candidate through the process of joining their new firm.
            </p>
            <p className="text-sm italic text-neon-orange-900">
              Note: If you're referring a producing group, please list all
              members of the group within the Notes section. You will only
              receive the bonus for the advisors listed on your referral form.
            </p>
          </div>
          <div className="col-span-6">
            <ReferralProgramForm />
          </div>
        </ContentContainer>
      </Layout>
    </>
  );
};

export default referralProgram;
