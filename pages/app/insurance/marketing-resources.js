import Head from "next/head";
import Link from "next/link";

import Layout from "components/App/Layout/Layout";
import ContentContainer from "components/App/ContentContainer/ContentContainer";
import PageHeader from "components/App/InternalPages/PageHeader/PageHeader";
import GridTile from "components/App/GridTile/GridTile";

export function getStaticProps({ preview }) {
  return {
    props: { preview: preview || false },
  };
}

const Page = ({ preview }) => {
  return (
    <>
      <Head>
        <title>Insurance Marketing Resources | IFG Rep Portal</title>
      </Head>
      <PageHeader pageName="Marketing Resources" breadCrumb="Insurance" />
      <Layout preview={preview}>
        <ContentContainer>
          <section className="col-span-full space-y-6">
            <h2 className="bg-blue-vibrant-500 rounded px-1 py-2 text-2xl font-bold text-seabreeze-100">
              Marketing Resources
            </h2>
            <ol className="py-2 lg:grid lg:grid-cols-2 lg:gap-5 [&>li>*]:h-full [&>li]:block [&>li]:py-2 [&>li_img]:h-[100px] [&>li_img]:object-contain ">
              <li>
                <GridTile tileTitle="Impact Partnership">
                  <div className="space-y-6">
                    <img
                      src="https://images.ctfassets.net/9lvru9ro1ti1/3wCcoWBwL60F8Bqv9eEy3N/0831838caeb71694a7e2af6966454feb/Impact.webp"
                      alt="impact partnership logo"
                    />
                    <div>
                      <p className="text-xs leading-6">
                        Find the best resources for financial radio/television
                        programs, adult education, client appreciation events,
                        branding, and marketing all in one place. The best part
                        - your insurance and annuity production cover the
                        marketing costs as Impact Partnership helps you grow
                        your sales to new heights.
                      </p>
                      <Link
                        className="text-blue-vibrant-500 text-xs font-bold underline"
                        href="https://impactpartner.wistia.com/medias/og78n37xt8"
                        target="_blank"
                      >
                        Watch a video presentation
                      </Link>
                    </div>
                  </div>
                </GridTile>
              </li>
              <li>
                <GridTile tileTitle="Simplicity Financial Distributors">
                  <div className="space-y-6">
                    <img
                      src="https://images.ctfassets.net/9lvru9ro1ti1/3ZKimkTdAdncAUoNp5AuO7/2da3112f3d208fdade6ff6f07c856133/simplicity_financial_distributors_logo.jpg"
                      alt="simplicity logo"
                      className="mix-blend-multiply"
                    />
                    <div>
                      <ul className="ml-4 list-disc text-xs [&>li]:py-1">
                        <li>Adult Financial Education Courses</li>
                        <li>Seminars & Workshops</li>
                        <li>Digital Marketing Review</li>
                        <li>
                          Custom Printing of Workshop Invitations, Brochures,
                          and Folders
                        </li>
                        <li>Telemarketing</li>
                        <li>Event Speakers</li>
                        <li>Direct Mail Lead Generation</li>
                        <li>Software Selling Tools</li>
                        <li>Annuity/Life Insurance</li>
                      </ul>
                      <Link
                        className="text-blue-vibrant-500 text-xs font-bold underline"
                        href="https://assets.ctfassets.net/9lvru9ro1ti1/eyLhmsg9HvojdHNv8IyPk/0237ee516d7ea7b0e6eaded5a3fc3aae/simplicity_financial_distributors_marketing_flyer_and_support_piece.pdf"
                        target="_blank"
                      >
                        Marketing Flyer & Support Piece
                      </Link>
                    </div>
                  </div>
                </GridTile>
              </li>
              <li>
                <GridTile tileTitle="Story Brand">
                  <div className="space-y-6">
                    <img
                      src="https://images.ctfassets.net/9lvru9ro1ti1/6KFvtNF36ihwHNqQF8bUBb/4ad78c498ade3e31340c6f1421bf07d0/story_brand_logo.jpg"
                      alt="story brand logo"
                      className="mix-blend-multiply"
                    />
                    <div>
                      <p className="text-xs leading-6">
                        The StoryBrand Marketing Framework can help you
                        understnad what customers are looking for, so you can
                        tell your story in a way people listen.
                      </p>
                      <div className="space-x-6">
                        <Link
                          className="text-blue-vibrant-500 text-xs font-bold underline"
                          href="https://assets.ctfassets.net/9lvru9ro1ti1/5TPZXf85SN9fDZz2ixPkYi/0c097626f6d02cc1607a6eb35cfbf0e3/StoryBrand_Hosted-by-Ash-Brokerage.pdf"
                          target="_blank"
                        >
                          PDF Overview
                        </Link>
                        <Link
                          className="text-blue-vibrant-500 text-xs font-bold underline"
                          href="https://play.ashbrokerage.com/watch/BT7cus2mCqNYNyWhKsh5PT"
                          target="_blank"
                          rel="noopner noreferrer"
                        >
                          Mike McGlothlin, Certified StoryBrand Guide
                        </Link>
                      </div>
                    </div>
                  </div>
                </GridTile>
              </li>
              <li>
                <GridTile tileTitle="Ash Preferred Bundles">
                  <div className="space-y-6">
                    <img
                      src="https://images.ctfassets.net/9lvru9ro1ti1/3V0dkq1dr2e5xo6rHsEyt3/287328407eadfa112231a4b04684a1c7/Ash_Brokerage.png?h=250"
                      alt="Ash Brokerage logo"
                      className="mix-blend-multiply"
                    />
                    <div>
                      <p className="text-xs leading-6">
                        Get the added life you need. <br /> You want to grow
                        your business and stay relevant through our industry's
                        changing landscape, But staying in front of your ideal
                        prospects and continuing to grow your sales funnel takes
                        time and expertise. We can help leverage our resources
                        to develop and execute your strategy and increase your
                        revenue.
                      </p>
                      <div className="space-x-6">
                        <Link
                          className="text-blue-vibrant-500 text-xs font-bold underline"
                          href="https://assets.ctfassets.net/9lvru9ro1ti1/U4jFuqyWurXpHpgbPjTrq/b659794f8ee00e7577303282c90bd049/Ash_Retirement-Bundles.pdf"
                          target="_blank"
                        >
                          View Ash Preferred Marketing Bundles
                        </Link>
                      </div>
                    </div>
                  </div>
                </GridTile>
              </li>
            </ol>
          </section>
          <section className="col-span-full space-y-6">
            <h2 className="bg-blue-vibrant-500 rounded px-1 py-2 text-2xl font-bold text-seabreeze-100">
              Carrier Marketing Microsites
            </h2>
          </section>
          <GridTile
            tileTitle="Carrier Marketing Microsites"
            colSpan="col-span-4"
            scroll
          ></GridTile>
        </ContentContainer>
      </Layout>
    </>
  );
};

export default Page;
