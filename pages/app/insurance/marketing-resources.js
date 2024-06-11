import Head from "next/head";
import Link from "next/link";

import Layout from "components/App/Layout/Layout";
import ContentContainer from "components/App/ContentContainer/ContentContainer";
import PageHeader from "components/App/InternalPages/PageHeader/PageHeader";
import GridTile from "components/App/GridTile/GridTile";
import Popover from "components/App/Popover/Popover";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import * as contentful from "/utils/contentful";

import {
  DocumentArrowDownIcon,
  VideoCameraIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/solid";

export async function getStaticProps({ preview }) {
  const client = preview ? contentful.previewClient : contentful.client;

  const data = await client.getEntries({
    content_type: "contentLibrary",
    "fields.subcategory": "Microsite",
    "fields.department": "Insurance",
    order: "fields.title",
  });

  const seminarData = await client.getEntries({
    content_type: "contentLibrary",
    "fields.subcategory": "Seminars",
    "fields.department": "Insurance",
    order: "fields.title",
  });

  return {
    props: {
      preview: preview || false,
      data: [...data.items],
      seminarData: [...seminarData.items],
    },
  };
}

const Page = ({ preview, data, seminarData }) => {
  return (
    <>
      <Head>
        <title>Insurance Marketing Resources | IFG Rep Portal</title>
      </Head>
      <PageHeader pageName="Marketing Resources" breadCrumb="Insurance" />
      <Layout preview={preview}>
        <ContentContainer>
          <section className="col-span-full space-y-6">
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
                        className="block w-fit text-xs font-bold text-blue-vibrant-500 underline"
                        href="https://vimeo.com/887302288/349482b7c2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Video: We&apos;ve Moved!
                      </Link>
                      <Link
                        className="mt-3 block w-fit text-xs font-bold text-blue-vibrant-500 underline"
                        href="https://vimeo.com/887302288/349482b7c2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Video: Change Your Life with Impact | Financial Advisor
                        Testimonial
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
                        className="text-xs font-bold text-blue-vibrant-500 underline"
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
                          className="text-xs font-bold text-blue-vibrant-500 underline"
                          href="https://assets.ctfassets.net/9lvru9ro1ti1/5TPZXf85SN9fDZz2ixPkYi/0c097626f6d02cc1607a6eb35cfbf0e3/StoryBrand_Hosted-by-Ash-Brokerage.pdf"
                          target="_blank"
                        >
                          PDF Overview
                        </Link>
                        <Link
                          className="text-xs font-bold text-blue-vibrant-500 underline"
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
                          className="text-xs font-bold text-blue-vibrant-500 underline"
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
          <GridTile
            tileTitle="Adult Education/Seminars"
            colSpan="col-span-full"
          >
            <ol className="grid grid-cols-3 gap-5">
              {seminarData.map((item) => (
                <li key={item.sys.id}>
                  <div className="space-y-6">
                    <img
                      src={`https:${item.fields.thumbnail.fields.file.url}`}
                      className="h-[80px] w-fit object-contain"
                      alt={item.fields.thumbnail.fields.fileName}
                    />
                    <Markdown
                      className="text-xs leading-7 [&>ul>li>ul]:ml-4 [&>ul>li>ul]:list-disc [&>ul]:list-disc [&_a]:font-semibold [&_a]:text-blue-wave-500 [&_blockquote]:ml-4 [&_h3]:font-semibold [&_h3]:text-neon-orange-500 [&_p]:mb-2 [&_td]:last:pl-3 [&_ul]:list-inside [&_ul_li_p]:inline-block"
                      remarkPlugins={[remarkGfm]}
                    >
                      {item.fields.text}
                    </Markdown>
                    {item.fields.file && (
                      <Link
                        className="text-xs font-bold text-blue-wave-500"
                        href={`https:${item.fields.file.fields.file.url}`}
                      >
                        {item.fields.file.fields.title} &rarr;
                      </Link>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </GridTile>
          <GridTile
            tileTitle="Carrier Marketing Microsites"
            colSpan="col-span-6"
            scroll
          >
            <ol className="divide-y">
              {data.map((item) => (
                <li key={item.sys.id} className="flex flex-nowrap gap-5 py-2">
                  {item.fields.thumbnail && (
                    <img
                      src={`https:${item.fields.thumbnail.fields.file.url}`}
                      className="aspect-square w-28 object-contain"
                    />
                  )}
                  <div>
                    <p className="text-xs font-bold">{item.fields.title}</p>
                    <Link
                      href={item.fields.slug}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-neon-orange-500"
                    >
                      Launch
                    </Link>
                  </div>
                </li>
              ))}
            </ol>
          </GridTile>
          <GridTile tileTitle="Life Marketing" colSpan="col-span-6">
            <p className="mb-1 text-lg font-semibold text-neon-orange-500">
              Tax Diversification & Retirement
            </p>
            <div className="flex items-center gap-5">
              <img
                src="https://images.ctfassets.net/9lvru9ro1ti1/5Jk2szl3EawoaTQaG5j1M/d211b5433bc325def79d91e93edd4590/tax-diversifcation-and-retirement.png"
                className="aspect-square h-40 w-fit object-contain"
              />
              <ol className="space-y-2">
                <li>
                  <div className="flex items-center gap-1 font-bold text-blue-wave-500">
                    <DocumentArrowDownIcon className="h-5 w-5" />
                    <Link href={"#"} target="_blank">
                      TDR Marketing Flyer
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-1 font-bold text-blue-wave-500">
                    <DocumentArrowDownIcon className="h-5 w-5" />
                    <Link href={"#"} target="_blank">
                      TDR Webinar Flyer
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-1 font-bold text-blue-wave-500">
                    <VideoCameraIcon className="h-5 w-5" />
                    <Link href={"#"} target="_blank">
                      TDR Social Media Post - 1
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-1 font-bold text-blue-wave-500">
                    <VideoCameraIcon className="h-5 w-5" />
                    <Link href={"#"} target="_blank">
                      TDR Social Media Post - 3
                    </Link>
                  </div>
                </li>
              </ol>
            </div>
            <Link
              href="https://go.simplicitygroup.com/l/887923/2024-02-01/2wt2dv?utm_source=tfrsimplicity"
              className="block rounded bg-blue-wave-500 px-1 py-2 text-center font-bold text-blue-wave-0 hover:bg-blue-wave-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              Opt In
            </Link>
          </GridTile>
          <GridTile tileTitle="LTCI Marketing" colSpan="col-span-full">
            <div className="grid grid-cols-2 gap-5">
              <div className="space-y-5">
                <h4 className="text-pretty text-lg font-semibold text-neon-orange-500">
                  State-Mandated Long-Term Care: What You Need to Know
                </h4>
                <div className="[&_img]:rounded">
                  <Splide
                    aria-label="My Favorite Images"
                    options={{
                      type: "loop",
                      autoplay: true,
                      arrows: false,
                      pagination: false,
                      interval: 4000,
                    }}
                  >
                    <SplideSlide>
                      <img
                        src="https://new.ifgsd.com/wp-content/uploads/2023/06/State-Mandated-LTC-01-2023-768x402.jpg"
                        alt="Image 1"
                      />
                    </SplideSlide>
                    <SplideSlide>
                      <img
                        src="https://new.ifgsd.com/wp-content/uploads/2023/06/State-Mandated-LTC-02-2023-768x402.jpg"
                        alt="Image 2"
                      />
                    </SplideSlide>
                    <SplideSlide>
                      <img
                        src="https://new.ifgsd.com/wp-content/uploads/2023/06/State-Mandated-LTC-03-2023-768x402.jpg"
                        alt="Image 2"
                      />
                    </SplideSlide>
                  </Splide>
                  <p className="mb-2 mt-5 font-semibold">Useful Resources</p>
                  <ol className="space-y-2 text-sm">
                    <li className="flex items-center gap-2 text-blue-wave-500">
                      <DocumentArrowDownIcon className="h-5 w-5" />
                      <Link
                        href="https://assets.ctfassets.net/9lvru9ro1ti1/5JTk3ACGhQQTVPyELNPOOu/715d2aa7bebcd4e44b12efc4271dd9c5/20045-State-Mandated-LTC-What-You-Need-to-Know-2023.pdf"
                        target="_blank"
                      >
                        What You Need to Know
                      </Link>
                    </li>
                    <li className="flex items-center gap-2 text-blue-wave-500">
                      <DocumentArrowDownIcon className="h-5 w-5" />
                      <Link
                        href="https://assets.ctfassets.net/9lvru9ro1ti1/6yCmHxUB5H7ivpCjW6Rbqz/1bc050db69e9c3debe1f92b0a85dd454/CA-Long-Term-Care.pdf"
                        target="_blank"
                      >
                        CA Long Term Care
                      </Link>
                    </li>
                    <li className="flex items-center gap-2 text-blue-wave-500">
                      <DocumentArrowDownIcon className="h-5 w-5" />
                      <Link
                        href="https://assets.ctfassets.net/9lvru9ro1ti1/3JfqnZVqvXQbmBzuvA4TaV/17e5add5955d8d8036e490f63dfb23b7/AB-567-program-design-straw-man-v3.pdf"
                        target="_blank"
                      >
                        AB 567 Program Design Straw Man
                      </Link>
                    </li>
                    <li className="flex items-center gap-2 text-blue-wave-500">
                      <DocumentArrowDownIcon className="h-5 w-5" />
                      <Link
                        href="https://assets.ctfassets.net/9lvru9ro1ti1/2hq2wotuK2lw89pHuaGjQL/f964c0d970d47a19958ecb2ceb12a092/Finseca-LTC-legislative-map.pdf"
                        target="_blank"
                      >
                        Finseca LTC Legislative Map
                      </Link>
                    </li>
                    <li className="flex items-center gap-2 text-blue-wave-500">
                      <DocumentArrowDownIcon className="h-5 w-5" />
                      <Link
                        href="https://assets.ctfassets.net/9lvru9ro1ti1/5dnflkyk0zuhwblsN48Z5e/95ca73e51ef774357dd5d5867636db27/Legislation-Addressing-Long-Term-Care.pdf"
                        target="_blank"
                      >
                        Legislation: Addressing Long-Term Care
                      </Link>
                    </li>
                  </ol>
                </div>
              </div>
              <div>
                <p className="text-sm leading-6">
                  Help your clients get ahead of state mandated LTC. Talk to
                  them about the benefits of a private plan today. You may have
                  heard that some states, starting with Washington, have begun
                  to look at state-mandated long-term care programs. These
                  programs are designed to provide long-term care benefits to
                  residents who meet certain eligibility criteria. While the
                  details of these programs vary from state to state, they
                  generally offer a range of benefits and a deadline for
                  compliance. For many clients, state mandated LTC isn’t the
                  answer. Help your clients maintain choice and control. Private
                  LTC solutions can provide more benefits and allow clients to
                  determine where and how they receive care. Putting a private
                  plan in place today can also help beat the rush that happens
                  close to a state deadline. In Washington, many clients tried
                  to get private policies before the state deadline, but
                  carriers were too backed up to fulfill all requests. As an
                  advisor, you play a critical role in helping your clients
                  navigate the complex landscape of long-term care insurance.
                  With the emergence of state-mandated long-term care programs,
                  it is more important than ever to stay informed about the
                  changing regulatory landscape and the options available to
                  your clients. Your Ash team can answer your questions, help
                  you start the conversation, and keep you up to date on state
                  changes
                </p>
              </div>
            </div>
            <div className="my-6 grid grid-cols-2 gap-5">
              <div className="space-y-2 border-2 p-2">
                <h4 className="text-lg font-bold text-neon-orange-500">
                  Summary: The Conversation
                </h4>
                <p className="rounded bg-gray-100 p-4 font-semibold italic text-gray-500">
                  "I want to talk to you about long-term care"
                </p>
                <p className="text-sm">
                  What often happens when you start a conversation with this
                  phrase? For many clients, it evokes an image of nursing homes,
                  old people or product. Consider instead the term extended care
                  or care over an extended period of years. Doing so likely will
                  have the client asking, “What do you mean?” which allows you
                  to educate him or her about a subject that has an impact on
                  those they love, rather than having to defend yourself.
                </p>
                <Link
                  href="https://assets.ctfassets.net/9lvru9ro1ti1/6rQFnkMHtyiOpnDiSIAY7b/7bd1b8193f7b76a57f3bc5760b1b1a7e/Harley-Gordon-The-Conversation-CSU-2023.pdf"
                  target="_blank"
                  className="block text-right text-sm font-bold uppercase text-blue-wave-500"
                >
                  Read More &rarr;
                </Link>
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-bold text-neon-orange-500">
                  Carrier Resources
                </h4>
                <ul className="grid grid-cols-2 gap-5 [&>li>img]:mx-auto [&>li>img]:aspect-square [&>li>img]:w-28 [&>li>img]:object-contain [&>li]:space-y-2">
                  <li>
                    <img src="https://images.ctfassets.net/9lvru9ro1ti1/6XMOoXCDd2C8HOKKZqIz7D/2caa86c89b1a1e6f5b5b107ea4813577/securian-logo.png" />
                    <h5 className="font-semibold">
                      SecureCare III Marketing Tools
                    </h5>
                    <Link
                      target="_blank"
                      href="https://www.securian.com/financial-professionals/ideas-tools/LTC-chronic-illness/secure-careIII.html"
                      className="mx-auto flex w-fit items-center gap-1 rounded bg-hazard-blue-500 px-1 py-2 font-semibold text-white transition-all hover:-translate-y-1 hover:shadow-md"
                    >
                      Launch
                      <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                    </Link>
                  </li>
                  <li>
                    <img src="https://images.ctfassets.net/9lvru9ro1ti1/6mNzZ2uS4Ujrz0quEToYSQ/d300a9d364173725998c6205521117ac/nationwide-logo-350-200.png?h=250" />
                    <h5 className="font-semibold">Carematters</h5>
                    <Link
                      target="_blank"
                      href="https://nationwidefinancial.com/products/life/long-term-care"
                      className="mx-auto flex w-fit items-center gap-1 rounded bg-hazard-blue-500 px-1 py-2 font-semibold text-white transition-all hover:-translate-y-1 hover:shadow-md"
                    >
                      Launch
                      <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                    </Link>
                  </li>
                  <li>
                    <img src="https://images.ctfassets.net/9lvru9ro1ti1/7pxuqQmsFDRpuaZTwCxR82/60351c36dd2fdf476d0200d65076f847/Logo-Lincoln-Financial.png?h=250" />
                    <h5 className="font-semibold">
                      Lincoln MoneyGuard
                      <span className="align-super text-sm">®</span>
                    </h5>
                    <Link
                      target="_blank"
                      href="http://files.constantcontact.com/e1b2cf13001/6369eb07-89be-4733-b4fd-f1a761995503.pdf"
                      className="mx-auto flex w-fit items-center gap-1 rounded bg-hazard-blue-500 px-1 py-2 font-semibold text-white transition-all hover:-translate-y-1 hover:shadow-md"
                    >
                      Launch
                      <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                    </Link>
                  </li>
                  <li>
                    <img src="https://images.ctfassets.net/9lvru9ro1ti1/3DgQDawRQr7MY8tNCio4FL/fbe31f68d56d000c56d473ee130149b9/oneamerica-logo.png?h=250" />
                    <h5 className="font-semibold">LTC Marketing Toolbox</h5>
                    <Link
                      target="_blank"
                      href="https://www.oneamerica.com/campaigns/ilfs/ilfs?toutURI=%2Fcampaigns%2Fcare-solutions-materials%2Fcs-materials%23Tout-ILFS-campaigns&toutTitle=Get%20the%20latest%20info"
                      className="mx-auto mt-auto flex w-fit items-center gap-1 rounded bg-hazard-blue-500 px-1 py-2 font-semibold text-white transition-all hover:-translate-y-1 hover:shadow-md"
                    >
                      Launch
                      <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                    </Link>
                  </li>
                  <li className="col-start-1 col-end-3 ">
                    <img src="https://images.ctfassets.net/9lvru9ro1ti1/4EaU3CQZJOoO2mU4AF87ZZ/ede7095110b0e6ed4f984aca031d0055/transamerica.png?h=250" />
                    <h5 className="text-center font-semibold">
                      Long Term Care Rider
                    </h5>
                    <Link
                      target="_blank"
                      href="https://www.transamerica.com/long-term-care-rider?utm_source=exact-target&utm_medium=email&utm_campaign=20231109_longtermcare_3137220_bkg_c1e1_product&utm_content=3137220_getthetools&SubscriberID=35413324&MID=523010189&SubscriberKey=0038X00003oQOfRQAW&BatchID=13004&DataSource=BKG_IUL_Agents#long-term-confidence-strategy"
                      className="mx-auto mt-auto flex w-fit items-center gap-1 rounded bg-hazard-blue-500 px-1 py-2 font-semibold text-white transition-all hover:-translate-y-1 hover:shadow-md"
                    >
                      Launch
                      <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="space-y-6 rounded bg-blue-wave-500 p-2 text-white">
                <h4 className="text-lg font-bold">
                  CA State LTC Task Force Update
                </h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      className="flex w-fit items-center gap-2"
                      href="https://www.insurance.ca.gov/0500-about-us/03-appointments/ltcitf.cfm"
                      target="_blank"
                    >
                      <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                      <p>Long Term Care Insurance Task Force</p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex w-fit items-center gap-2"
                      href="https://assets.ctfassets.net/9lvru9ro1ti1/OdSQLv7N3N6tpCE5mZLem/a1527c9855ba5bff60d2ae1376b9cdbf/CostCo-Letter-Re-CA-State-LTC-Tax-Mandate-2023.pdf"
                      target="_blank"
                    >
                      <DocumentArrowDownIcon className="h-5 w-5" />
                      <p>CostCo Letter to CA Employees</p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex w-fit items-center gap-2"
                      href="https://assets.ctfassets.net/9lvru9ro1ti1/w7B5uXlYvDdMsZh38F1cm/3dc80726c3601bcd833c2fdbfda30f5d/CA-AB-567-Analysis-Oliver-Wyman-update-11292023.pptx"
                      target="_blank"
                    >
                      <DocumentArrowDownIcon className="h-5 w-5" />
                      <p>CA AB 567 Analysis</p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex w-fit items-center gap-2"
                      href="https://capitasfinancial.zoom.us/rec/component-page?action=viewdetailpage&sharelevel=meeting&useWhichPasswd=meeting&clusterId=aw1&componentName=need-password&meetingId=MQGCqmdEa22IMbEM-aTMSdz3qigNPZMN6XAe5M7lc7xUwCZBdgDmwfqFcsjgmAOQ.E_XyJDPv_lRD3xA2&originRequestUrl=https%3A%2F%2Fcapitasfinancial.zoom.us%2Frec%2Fshare%2FMXZCLIy5CpVX6ncCuOr7dBGX3gdE6uEASHiwv-P6gHtXN3_q4Qj-j3I7tfBlm_bN.BebNnQWbQO4z01N9"
                      target="_blank"
                    >
                      <VideoCameraIcon className="h-5 w-5" />
                      <p>
                        California&apos;s AB 567 Actuarial Analysis Webinar
                        Replay
                      </p>
                    </Link>
                    <p className="text-sm italic">Viewing Passcode: TG=T$1Ar</p>
                  </li>
                </ul>
              </div>
              <div className="space-y-6">
                <h4 className="text-lg font-bold text-neon-orange-500">
                  FMO Partner Resources
                </h4>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <h5 className="font-semibold">Simplicity Life</h5>
                    <ul className="space-y-2">
                      <li>
                        <Link
                          href="https://www.dropbox.com/s/87jzrb2w0ap66vm/SimplicityABLTC-EmailSurvey.mp4?dl=0"
                          className="flex items-center gap-2"
                          target="_blank"
                        >
                          <VideoCameraIcon className="h-5 w-5" />
                          <p>Demo</p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://assets.ctfassets.net/9lvru9ro1ti1/2KlAkaRIaDJh5TwkCDGsdI/2fe0f7bcf5879b89acce20914a07dd99/survey-mailer-new-BD.docx"
                          className="flex items-center gap-2"
                          target="_blank"
                        >
                          <DocumentArrowDownIcon className="h-5 w-5" />
                          <p>Survey Mailer</p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://assets.ctfassets.net/9lvru9ro1ti1/5iByh3vp58c7KCcpDwGPoK/9d0ef793cbcb1aabe7f2ca48f5f4671d/survey-for-back-of-workshopf-orm-new-BD.docx"
                          className="flex items-center gap-2"
                          target="_blank"
                        >
                          <DocumentArrowDownIcon className="h-5 w-5" />
                          <p>Long Term Care Survey</p>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold">DBS</h5>
                    <ul className="space-y-2">
                      <li className="group relative">
                        <Popover
                          top="-top-20"
                          left="left-1/2 -translate-x-1/2"
                          text="Women & LTC: Finding Long-Term Care Solutsion for This Important Market"
                          width="w-[20ch]"
                        />
                        <Link
                          href="https://www.dropbox.com/s/87jzrb2w0ap66vm/SimplicityABLTC-EmailSurvey.mp4?dl=0"
                          className="flex items-center gap-2"
                          target="_blank"
                        >
                          <VideoCameraIcon className="h-5 w-5" />
                          <p className="line-clamp-1 w-3/4">
                            Women & LTC: Finding Long-Term Care Solutions for
                            This Important Market
                          </p>
                        </Link>
                      </li>
                      <li className="group relative">
                        <Popover
                          top="-top-20"
                          left="left-1/2 -translate-x-1/2"
                          text="DBS and Lincoln MoneyGuard Present: Reimbursement or Indmenity"
                          width="w-[20ch]"
                        />
                        <Link
                          href="https://www.youtube.com/watch?v=mOM3Q1cjjwQ"
                          className="flex items-center gap-2"
                          target="_blank"
                        >
                          <VideoCameraIcon className="h-5 w-5" />
                          <p className="line-clamp-1 w-3/4">
                            DBS and Lincoln MoneyGuard Present: Reimbursement or
                            Indmenity
                          </p>
                        </Link>
                      </li>
                      <li className="group relative">
                        <Popover
                          top="-top-20"
                          left="left-1/2 -translate-x-1/2"
                          text="                            DBS and Lincoln MoneyGuard Present: The Impact of
                          LTC"
                          width="w-[20ch]"
                        />
                        <Link
                          href="https://www.youtube.com/watch?v=ON8v1E2iSDQ"
                          className="flex items-center gap-2"
                          target="_blank"
                        >
                          <VideoCameraIcon className="h-5 w-5" />
                          <p className="line-clamp-1 w-3/4">
                            DBS and Lincoln MoneyGuard Present: The Impact of
                            LTC
                          </p>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-start-1 col-end-3">
                    <h5 className="font-semibold">Additional Resources</h5>
                    <ul>
                      <li>
                        <Link
                          href="https://lifehappenspro.org/long-term-care-insurance-awareness-month"
                          className="flex gap-2"
                          target="_blank"
                        >
                          <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                          <p>Life Happens Pro</p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://assets.ctfassets.net/9lvru9ro1ti1/6ExKXv1OAePoGxhSVdvyxX/3ad931ea3825c542115343e1e08e882e/Start-the-Conversation-LTCI-2023-.pdf"
                          className="flex gap-2"
                          target="_blank"
                        >
                          <DocumentArrowDownIcon className="h-5 w-5" />
                          <p>Start conversations that matter</p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://assets.ctfassets.net/9lvru9ro1ti1/3yd9xFO6r4YsNMg99hG6Zb/654faac2f4b57b6dc9dae07e7efbbce8/Women-and-LTC-LTCI-2023.pdf"
                          className="flex gap-2"
                          target="_blank"
                        >
                          <DocumentArrowDownIcon className="h-5 w-5" />
                          <p>Women & LTC</p>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </GridTile>
          <GridTile tileTitle="Media Content" colSpan="col-span-6" scroll>
            <p className="text-xs font-semibold italic leading-5 text-gray-500">
              All content to be used for client and prospect marketing purposes
              must be submitted and approved by IFG Advertising and Compliance.
            </p>
            <ul className="divide-y-2 [&_li]:py-6">
              <li className="space-y-2">
                <img
                  src="https://images.ctfassets.net/9lvru9ro1ti1/2M4DbaBlaYdCUfFPQELiTr/d8180013ae8bc7730524de90f69f3db4/Athene.png"
                  alt="athene logo"
                />
                <div>
                  <h4 className="text-lg font-bold text-neon-orange-500">
                    Social Savvy Toolkit
                  </h4>
                  <p className="text-sm font-semibold italic text-gray-500">
                    Resources to connect you with clients and prospects in a
                    digital world
                  </p>
                </div>
                <p className="text-xs leading-5">
                  Building your digital presence using social media or your
                  website is essential for business today. But living in a fast,
                  digital world can make it hard to keep up with the best ways
                  to promote it online.
                </p>
                <p className="text-xs leading-5">
                  Use these tools to help develop your social brand, boost your
                  digital presence IQ and connect authentically with clients and
                  prospects — all highly effective ways to build the
                  relationships that can build your business.
                </p>
                <div>
                  <Link
                    href="https://www.athene.com/producer/tools/sales-toolkits/social-savvy-toolkit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="my-2 flex w-fit items-center gap-2 rounded bg-neon-orange-500 p-2 text-sm font-bold text-white"
                  >
                    <p>Launch Athene Social Savvy Toolkit</p>
                    <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                  </Link>
                </div>
              </li>
              <li className="space-y-2">
                <img
                  src="https://images.ctfassets.net/9lvru9ro1ti1/1LkAaY13YSFcPOPMJGOefp/3bdeebd8fb6dba6413cb6d8faf7fc14b/Half-birthday.png?h=250"
                  alt="athene logo"
                />
                <div>
                  <h4 className="text-lg font-bold text-neon-orange-500">
                    Half-Birthdays Matter
                  </h4>
                </div>
                <p className="text-xs leading-5">
                  When it comes to remembering your clients’ birthdays,
                  half-birthdays are just as important! Although often
                  forgotten, half-birthdays present a great opportunity to
                  discuss some very important moments in your clients’ financial
                  lives. Let Sammons Retirement Solutions® get your
                  half-birthday marketing plan started with a year’s supply of
                  half-birthday cards for some of the most important milestones.
                </p>
                <p className="text-xs leading-5">
                  Want more information about how to implement a simple and
                  effective half-birthday marketing plan in your office?
                </p>
                <div>
                  <Link
                    href="https://ifgsd.us11.list-manage.com/track/click?u=ed907ad6fd8ba2b323ddb8edb&id=40f2638b1d&e=59be0367d8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="my-2 flex w-fit items-center gap-2 rounded bg-neon-orange-500 p-2 text-sm font-bold text-white"
                  >
                    <p>Learn More about the Half-Birthday Opportunity</p>
                    <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                  </Link>
                  <Link
                    href="https://ifgsd.us11.list-manage.com/track/click?u=ed907ad6fd8ba2b323ddb8edb&id=2e4988be35&e=59be0367d8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="my-2 flex w-fit items-center gap-2 rounded bg-neon-orange-500 p-2 text-sm font-bold text-white"
                  >
                    <p>View Campaign Offer Deals</p>
                    <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                  </Link>
                  <Link
                    href="https://ifgsd.us11.list-manage.com/track/click?u=ed907ad6fd8ba2b323ddb8edb&id=2e4988be35&e=59be0367d8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="my-2 flex w-fit items-center gap-2 rounded bg-neon-orange-500 p-2 text-sm font-bold text-white"
                  >
                    <p>
                      Request Complimentary half birthday cards for your clients
                    </p>
                    <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                  </Link>
                </div>
                <p className="text-xs font-semibold leading-5 text-gray-500">
                  For more information, call the Sammons Retirement Solutions
                  Sales Desk at 855-624-0201, or visit{" "}
                  <Link
                    className="text-blue-wave-500 underline"
                    href="https://ifgsd.us11.list-manage.com/track/click?u=ed907ad6fd8ba2b323ddb8edb&id=89ecfc5f8c&e=59be0367d8"
                  >
                    www.srslivewell.com
                  </Link>{" "}
                  and use the access code: livewell.{" "}
                </p>
              </li>
              <li className="space-y-2">
                <img
                  src="https://images.ctfassets.net/9lvru9ro1ti1/6d4rbmfNYLMu3Wmqsu6SOs/b015f4fee8b6598fc0262ac236e99838/connect_more_banner.png"
                  alt="Connect More Banner"
                />
                <div>
                  <h4 className="text-lg font-bold text-neon-orange-500">
                    Connect More
                  </h4>
                  <p className="text-sm font-semibold italic text-gray-500">
                    Do you feel you are spending too much time searching for
                    content for your newsletters, social media and website?
                  </p>
                </div>
                <p className="text-xs leading-5">
                  IFG wants to help. Our Partners provide resources to help you
                  with consumer-focused materials for business and relationship
                  building. Sammons Financial Group has created a Center for
                  Financial Excellence providing free content designed to
                  educate and open planning conversations.
                </p>
                <div>
                  <Link
                    href="https://my.srslivewell.com/ConnectLearn?elqTrackId=ad775b500b2a46e08eb050c9a6e2757e&elq=7d230d068aa84ab1a056f5a008433ffa&elqaid=26800&elqat=1&elqCampaignId=7764"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="my-2 flex w-fit items-center gap-2 rounded bg-neon-orange-500 p-2 text-sm font-bold text-white"
                  >
                    <p>Check out Free Content</p>
                    <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                  </Link>
                </div>
                <p className="text-xs leading-5">
                  Additional resources can be found by clicking the “Marketing
                  Resources” button above. Communicate to Paul Larrabee the type
                  of marketing content you are looking for and we will pair you
                  with the best resource to provide the content you need.
                </p>
              </li>
            </ul>
          </GridTile>
          <GridTile tileTitle="Additional Resources" colSpan="col-span-6">
            <ul>
              <li className="space-y-6">
                <img
                  src="https://images.ctfassets.net/9lvru9ro1ti1/2fuzoeZ873zsgqwVGKzBpe/b330bb7a0b2553db693b390c9c115d22/National_Life_Group_Logo.png?h=250"
                  alt="national life group logo"
                  className="w-full"
                />
                <div>
                  <h4 className="text-lg font-bold text-neon-orange-500">
                    ABC&apos;s of Financial Fitness
                  </h4>
                  <p className="font-bold text-gray-500">
                    Ready, Set, <span className="italic">ENGAGE!</span>
                  </p>
                </div>
                <p className="text-xs leading-5">
                  By taking the time to engage and educate this audience with
                  our turn-key financial fitness program, you’re helping
                  prospects learn the value of financial preparedness,
                  appreciate the services you provide and become more proactive
                  in saving for retirement. And by offering your existing
                  clients this program, you are increasing their satisfaction
                  and confidence with their current planning.
                </p>
                <Link
                  href="https://www.nationallife.com/docs/digital/105301/ABCs_financial_fitness.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="my-2 flex w-fit items-center gap-2 rounded bg-neon-orange-500 p-2 text-sm font-bold text-white"
                >
                  <p>Get Started</p>
                  <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                </Link>
                <p className="text-xs leading-5">
                  ABCs of Financial Fitness for Educators is a flexible series
                  that you can easily tailor to meet your needs and approach.
                  Use all five presentations by accessing our complete 5-part
                  series or choose the specific presentations you want to offer
                  in a la carte style.
                </p>
              </li>
            </ul>
          </GridTile>
        </ContentContainer>
      </Layout>
    </>
  );
};

export default Page;
