import React from "react";

// NEXT
import Head from "next/head";
// COMPONENTS
import Layout from "components/App/Layout/Layout";
import ContentContainer from "components/App/ContentContainer/ContentContainer";
import GridTile from "components/App/GridTile/GridTile";
import PageHeader from "components/App/InternalPages/PageHeader/PageHeader";
import BlogCardBgImage from "components/App/BlogCardBgImage/BlogCardBgImage";

// CONTENTFUL
import * as contentful from "utils/contentful";

// ICONS
import { ChartBarIcon } from "@heroicons/react/24/outline";

export async function getStaticProps({ preview }) {
  const client = preview ? contentful.previewClient : contentful.client;

  return {
    props: {
      preview: preview || false,
    },
    revalidate: 10,
  };
}

const index = ({ preview }) => {
  const practicePhases = [
    {
      groupName: "High Growth Practice",
      practiceTypes: [
        {
          name: "Solo Practitioner",
          link: "/app/practice-development/education/high-growth/solo-practitioner",
          bgLink:
            "https://media.istockphoto.com/id/1540766989/photo/young-adult-male-entrepreneur-poses-for-photo.jpg?s=612x612&w=0&k=20&c=W4EkFAVsKSXe4RJMd6FTAEzWTA2pbIlP4Y-LDG-0gMs=",
          positionTop: true,
        },
        {
          name: "Ensemble/Partnership",
          link: "/app/practice-development/education/high-growth/ensemble-partnership",
          bgLink:
            "https://images.pexels.com/photos/6457562/pexels-photo-6457562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          positionTop: false,
        },
        {
          name: "Branch Office",
          link: "/app/practice-development/education/high-growth/ensemble-partnership",
          bgLink:
            "https://your.yale.edu/sites/default/files/financial-training-landing.jpg",
          positionTop: false,
        },
      ],
    },
    {
      groupName: "Mature Practice",
      practiceTypes: [
        {
          name: "Solo Practitioner",
          link: "/app/practice-development/education/mature/solo-practitioner",
          bgLink:
            "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          positionTop: true,
        },
        {
          name: "Ensemble/Partnership",
          link: "/app/practice-development/education/mature/ensemble-partnership",
          bgLink:
            "https://www.valentgroup.com/wp-content/uploads/2019/02/April-17-1072x675.png",
          positionTop: false,
        },
        {
          name: "Branch Office",
          link: "/app/practice-development/education/mature/ensemble-partnership",
          bgLink:
            "https://media.istockphoto.com/id/1266461202/photo/multi-ethnic-executive-team-applauding-female-ceo-in-meeting.jpg?s=612x612&w=0&k=20&c=Urh1bbJeB5dSrqeyY7gjljTu4tEJYl2-41a9Q2tH8tQ=",
          positionTop: false,
        },
      ],
    },
    {
      groupName: "Transforming Practice",
      practiceTypes: [
        {
          name: "Solo Practitioner",
          link: "/app/practice-development/education/transforming/solo-practitioner",
          bgLink:
            "https://www.shutterstock.com/image-photo/shot-senior-financial-manager-writing-260nw-512558092.jpg",
          positionTop: true,
        },
        {
          name: "Ensemble/Partnership",
          link: "/app/practice-development/education/transforming/ensemble-partnership",
          bgLink:
            "https://media.gettyimages.com/id/1414002291/photo/older-couple-listening-to-financial-advisor-about-retirement-in-a-living-room-finance-manager.jpg?s=612x612&w=gi&k=20&c=J5u7_qlJgyBpZsa0mnBh45wB633oQPl7l4WY5pCKXT8=",
          positionTop: false,
        },
        {
          name: "Branch Office",
          link: "/app/practice-development/education/transforming/ensemble-partnership",
          bgLink:
            "https://images.pexels.com/photos/7433822/pexels-photo-7433822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          positionTop: false,
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Practice Development | Education</title>
      </Head>
      <Layout preview={preview}>
        <PageHeader
          breadCrumb="Departments > Practice Development > Education"
          pageName="Educational Resources"
          headerText="Resources for every phase of your practice."
        />
        <ContentContainer>
          {practicePhases.map((practiceGroup) => {
            return (
              <div className="col-span-full">
                <h2 className="mb-5 w-fit rounded bg-neon-orange-500 p-2 text-3xl font-bold text-seabreeze-500">
                  {practiceGroup.groupName}
                </h2>
                <div className="xl:grid xl:grid-cols-3 xl:gap-5">
                  {practiceGroup.practiceTypes.map((type) => (
                    <BlogCardBgImage
                      colSpan="1"
                      link={type.link}
                      imageUrl={type.bgLink}
                      positionTop={type.positionTop}
                      title={type.name}
                      excerpt={
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, error."
                      }
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </ContentContainer>
      </Layout>
    </>
  );
};

export default index;
