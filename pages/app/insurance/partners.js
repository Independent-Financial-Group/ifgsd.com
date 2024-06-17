import Head from "next/head";
import Link from "next/link";

import Layout from "components/App/Layout/Layout";
import ContentContainer from "components/App/ContentContainer/ContentContainer";
import PageHeader from "components/App/InternalPages/PageHeader/PageHeader";
import GridTile from "components/App/GridTile/GridTile";

// ICONS
import {
  DocumentArrowDownIcon,
  VideoCameraIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/solid";

export function getStaticProps({ preview }) {
  return {
    props: { preview: preview || false },
  };
}

const Page = ({ preview }) => {
  const strategicBrokeragePartners = [
    {
      thumbnail:
        "https://images.ctfassets.net/9lvru9ro1ti1/5JBcYMZfucE6Afirt16Ssw/ee54eef791b0811cbbd0fa269db171c3/IFG_x_FMO_partners_logo.png",
      title: "Direct/FMO Channel Guide",
      description: (
        <p>
          Many Insurance Companies enlist{" "}
          <strong>Field Marketing Organizations (FMO)</strong> to distribute
          their multiple product lines. These third-party firms handle
          contracting, pre-sale support, underwriting and new business with some
          offering dynamic marketing and advanced market planning support. IFGs
          approved third-party FMO Insurance Brokerage outlets include{" "}
          <strong>
            Ash Brokerage, Diversified Brokerage Services (DBS), Simplicity Life
            and Impact Partnership.
          </strong>
        </p>
      ),
      link: { linkTitle: "Insurance and Annuity Contract", href: "" },
    },
    {
      thumbnail:
        "https://images.ctfassets.net/9lvru9ro1ti1/3V0dkq1dr2e5xo6rHsEyt3/287328407eadfa112231a4b04684a1c7/Ash_Brokerage.png",
      title: "Ash Brokerage",
      description: (
        <p>
          <strong>Whatever the question, whatever the need.</strong>
          <br /> Life comes with questions. We bring answers for life insurance,
          retirement income, longevity planning and disability insurance
          planning. We provide the tools and more importantlt the people that
          financial professionals need to get the job done right. We show up
          with solutions, turning obstacles into opportunities. We help you
          anticipate challeneges, discover new opportunities, innovate and grow.
          We do it because we care - deeply - about your business, your clients,
          and your future.
          <br /> Whatever the Questions and whatever the need, Ash Brokerage
          answers.
        </p>
      ),
      link: {
        linkTitle: "Ash Brokerage Website",
        href: "https://ashbrokerage.com",
      },
      files: [
        {
          icon: <VideoCameraIcon className="h-4 w-4" />,
          title: "Ash Intro Video",
          href: "https://www.youtube.com/watch?v=Jhk9SXv2Bgg",
        },
        {
          icon: <DocumentArrowDownIcon className="h-4 w-4" />,
          title: "Advanced Markets Contacts",
          href: "https://assets.ctfassets.net/9lvru9ro1ti1/5tFnCmPPNCzYn3DXMXJG6Y/a6572a6aac38c2acd786e220413d20d5/Ash-Brokerage-Advanced-Markets-Team-Contact-Sheet-04152024.pdf",
        },
        {
          icon: <DocumentArrowDownIcon className="h-4 w-4" />,
          title: "Self Service Contacts",
          href: "https://assets.ctfassets.net/9lvru9ro1ti1/P9Vb0wFgoJ7cSRNhmxifR/b36670615a2105daec5e3fe30fe1f2a1/Ash-Brokerage-Retirement-Map-04152024.pdf",
        },
        {
          icon: <DocumentArrowDownIcon className="h-4 w-4" />,
          title: "Working with Ash",
          href: "https://assets.ctfassets.net/9lvru9ro1ti1/1MOtHzuN7ctMEPwvLhgQdQ/e0eb6afc50a1592db4031e20107f4f2d/10018-Working-with-Ash-Brokerage-Update-5.21.2019.pdf",
        },
        {
          icon: <DocumentArrowDownIcon className="h-4 w-4" />,
          title: "Value-Add Services",
          href: "https://assets.ctfassets.net/9lvru9ro1ti1/73Z5r6VgxNpyZjBBEWSACW/3c8e17de56140e7df1f3b71e597ce9af/30035-Retirement-Value-Add-Services.pdf",
        },
        {
          icon: <DocumentArrowDownIcon className="h-4 w-4" />,
          title: "Protection Map",
          href: "https://assets.ctfassets.net/9lvru9ro1ti1/39O62TZehuSrMJL4KLb7hT/35acdb01e6ace2e9a2bbc825d28664c2/ash-brokerage-protection-map-05212024.pdf",
        },
        {
          icon: <DocumentArrowDownIcon className="h-4 w-4" />,
          title: "Retirement Map",
          href: "https://assets.ctfassets.net/9lvru9ro1ti1/6BrLUJPNa2xcgVddBFWZaF/e2f60c32cb52ce5829de53727d824e7b/Ash-Brokerage-Retirement-Map-04152024.pdf",
        },
        {
          icon: <ArrowTopRightOnSquareIcon className="h-4 w-4" />,
          title: "Upcoming Webinars",
          href: "http://go.ashbrokerage.com/webinars.html",
        },
      ],
    },
    {
      thumbnail:
        "https://images.ctfassets.net/9lvru9ro1ti1/9Q43Nggw3msuBoCLgecNn/0d9469874a2b1c2632b5961898d21b92/DBS-logo.png",
      title: "Diversified Broker Services, Inc.",
      description: (
        <p>
          Altough we’re one of the largest distributors of life insurance in the
          nation, DBS maintains a small agency feel and is committed to
          providing a superior customer service experience. Our unique,
          consultative approach offers hands-on expertise through our network of
          local Field Relationship Managers. With an in-house advanced marketing
          attorney and underwriting team, we have the knowledge and capability
          to take charge of any complex situation to advocate on behalf of your
          client. We are also a leader in using technology to simplify the
          application process to streamline the entire underwriting process.
          Simpler for you, easier for your client!
        </p>
      ),
      link: {
        linkTitle: "Login to DBS",
        href: "https://dbs-lifemark.com/wp-content/plugins/wp2wpSSO_V2/loginForeignUser.php?r=SVRoUUJlZkF4U3YxVWIvVForelZ2eC9kRS9rSUF5cDdUOEZuNkw1VXhVM2svdHNJMzJtNVBiWXQwcGdxaHRucEpsTDQySmdpbTNWY0k0UExrU2FnUjN5ak9pZ09FR2R0ZDcxbk1oNDRRbTQ9",
      },
      files: [
        {
          icon: <VideoCameraIcon className="h-4 w-4" />,
          title: "DBS Intro Video",
          href: "https://www.youtube.com/watch?v=dyr5bVIarT0&feature=youtu.be",
        },
        {
          icon: <DocumentArrowDownIcon className="h-4 w-4" />,
          title: "Working with DBS",
          href: "https://assets.ctfassets.net/9lvru9ro1ti1/7ahlztXkgVPlbarZYDSMBU/6d442b1771f158a3227231bfb28087ad/working_with_DBS.pdf",
        },
        {
          icon: <DocumentArrowDownIcon className="h-4 w-4" />,
          title: "Enterprise Regional Directory",
          href: "https://assets.ctfassets.net/9lvru9ro1ti1/7GW41HK9ZB8Nn05kadoq9O/cbcf43e6a28b42d08faa2770e8a6254e/DBS-Enterprise-Regional-Directory-05212024.pdf",
        },
        {
          icon: <DocumentArrowDownIcon className="h-4 w-4" />,
          title: "Field Relationship Management Directory",
          href: "https://assets.ctfassets.net/9lvru9ro1ti1/7ybMEyM7mWnqRMs68vaEGH/cae7c6a283ede14e82ea56696bc775c5/DBS-092023-FRM-Map-Directory.pdf",
        },
        {
          icon: <DocumentArrowDownIcon className="h-4 w-4" />,
          title: "DBS Mobile App Brochure",
          href: "https://assets.ctfassets.net/9lvru9ro1ti1/51kjX64j8EDRciHtPH454H/b1046b6cd363e6656b32ccf197c459e3/DBS-Mobile-App.pdf",
        },
        {
          icon: <VideoCameraIcon className="h-4 w-4" />,
          title: "DBS Mobile App Video",
          href: "https://www.youtube.com/watch?v=T3QLRhfiOho",
        },
      ],
    },
    {
      thumbnail:
        "https://images.ctfassets.net/9lvru9ro1ti1/3ZKimkTdAdncAUoNp5AuO7/2da3112f3d208fdade6ff6f07c856133/simplicity_financial_distributors_logo.jpg?h=250",
      title: "Simplicity Financial Distributors",
      description: (
        <>
          <p>
            Independent Financial Group has partnered with Simplicity Financial
            Distributors to provide best-in-class fixed insurance products and
            business development solutions to our affiliated Registered
            Representatives. The organization has vast knowledge of the distinct
            needs, opportunities, and challenges presented to Registered
            Representatives, and is committed to providing intelligent business
            solutions that are simple to execute and will work to increase
            overall business revenue. Simplicity works with the nation’s
            foremost carriers and has access to nearly every insurance product
            available in the marketplace. As your partner, Simplicity will
            support you by filtering through the vast amounts of fixed insurance
            products, identify those that best your clients’ needs, and
            professionally execute those solutions in a timely manner.
            Simplicity’s breadth allows it to provide personalized and scalable
            service as your fixed product business expands. Simplicity’s works
            to provide best-in-class wholesaling support including:
          </p>
          <ul className="ml-3 mt-2 list-disc text-xs">
            <li>Comprehensive practice management support</li>
            <li>Unrivaled customer service</li>
            <li>Forward-thinking training</li>
            <li>Education</li>
          </ul>
        </>
      ),
      files: [
        {
          icon: <DocumentArrowDownIcon className="h-4 w-4" />,
          title: "Regional Sales Map",
          href: "https://assets.ctfassets.net/9lvru9ro1ti1/5to5tK2nzLIDZ3jxCPsK58/65bad54f02413f63c171f2e925269309/Simplificity-Regional-Sales-Map-072023.pdf",
        },
        {
          icon: <DocumentArrowDownIcon className="h-4 w-4" />,
          title: "Supporting your life insurance business",
          href: "https://assets.ctfassets.net/9lvru9ro1ti1/5BJuCGBdx2NFR3U623YphV/3b868608f720aa99e019e25d5b0948e6/simplicity-life-resources-2023.pdf",
        },
        {
          icon: <DocumentArrowDownIcon className="h-4 w-4" />,
          title: "Ensight Presentation Illustrations",
          href: "https://assets.ctfassets.net/9lvru9ro1ti1/1TglogncJK4uHdgwsnEGyn/6fd01f47bd69622c598ec0952ce0e12b/ensight-presentation-illustrations-2023.pdf",
        },
        {
          icon: <DocumentArrowDownIcon className="h-4 w-4" />,
          title: "Marketing Flyer & Support Piece",
          href: "https://assets.ctfassets.net/9lvru9ro1ti1/u7fFjXwpRCyEYnwnr1Rt9/0d17b797b081dfa835b1fe441cf01419/Event-Marketing-Flyer-and-Support-Piece-2023.pdf",
        },
      ],
    },
    {
      thumbnail:
        "https://images.ctfassets.net/9lvru9ro1ti1/3wCcoWBwL60F8Bqv9eEy3N/0831838caeb71694a7e2af6966454feb/Impact.webp",
      title: "Impact Partnership",
      description: (
        <>
          <p>
            As an elite marketing agency for financial advisors, Impact
            Partnership offers services to build your brand, generate leads, and
            manage your practice. It's time to transform your business approach
            from a salesperson to a CEO through coaching, strategic marketing
            and media, and a true partnership. We're with you every step of the
            way.
          </p>
          <div className="mt-3 space-y-3">
            <em className="font-bold italic text-blue-wave-500">
              Not registered with Impact?
            </em>
            <p>
              Call Clay Eschrich, Sr. VP of Distribution Partners at{" "}
              <strong>(678) 784-2008</strong> for more info.
            </p>
            <p>
              For support call: <strong>1 (800) 380 - 5040</strong>
            </p>
          </div>
        </>
      ),
      link: { linkTitle: "View Website", href: "https://impactpartner.com" },
      files: [
        {
          icon: <VideoCameraIcon className="h-4 w-4" />,
          title: "Meet Impact Partnership!",
          href: "https://vimeo.com/851663056/2bcf3bae7a?share=copy",
        },
        {
          icon: <ArrowTopRightOnSquareIcon className="h-4 w-4" />,
          title: "Marketing with a plan",
          href: "https://go.impactpartner.com/ifg-intro/?utm_medium=portal&utm_source=intro&utm_campaign=23augifgportal",
        },
        {
          icon: <ArrowTopRightOnSquareIcon className="h-4 w-4" />,
          title: "Impact Radio & TV",
          href: "https://go.impactpartner.com/ifg-media/?utm_medium=portal&utm_source=media&utm_campaign=23augifgportal",
        },
        {
          icon: <DocumentArrowDownIcon className="h-4 w-4" />,
          title: "Conversion Coach: Seminar Led Guide & Sales Training Video",
          href: "https://go.impactpartner.com/l/493461/2023-08-10/4tq7db/493461/169169448903M1V8w5/ConversionCoach_PreQualifyingSeminarLeads_IFG.pdf",
        },
        {
          icon: <ArrowTopRightOnSquareIcon className="h-4 w-4" />,
          title: "Visit Impact Partnership",
          href: "https://go.impactpartner.com/ifg-exp/?utm_medium=portal&utm_source=exp&utm_campaign=23augifgportal",
        },
        {
          icon: <ArrowTopRightOnSquareIcon className="h-4 w-4" />,
          title: "ChatGPT Guide with Prompts",
          href: "https://go.impactpartner.com/l/493461/2023-08-09/4tpgdc",
        },
      ],
    },
  ];

  const directLifeInsurancePartners = [
    {
      thumbnail:
        "https://images.ctfassets.net/9lvru9ro1ti1/2NMjNHg7M1eyo5J3YRTxDW/05dab41dab7a6e6f34c8b0be80580472/pacific_life.png",
      title: "Pacific Life",
      description: (
        <p>
          We will never stop working for you and your clients. With over 150
          years of service, we're honored to be your life insurance carrier of
          choice. When your clients need death benefit protection, discover the
          integrity at the heart of the Pacific Life difference and put our
          commitment to excellence to work for you.
        </p>
      ),
      link: {
        linkTitle: "Pacific Life Website",
        href: "https://pacificlife.com",
      },
      files: {
        lifeProductGuides: {
          category: "Life Product Guides",
          subCategories: [
            {
              label: "Discovery Xelerator IUL 2 (CA Only)",
              files: [
                {
                  icon: <DocumentArrowDownIcon className="h-4 w-4" />,
                  title: "Client Guide",
                  href: "https://assets.ctfassets.net/9lvru9ro1ti1/6R28ahS0fUYGqdzrGu4zkZ/80da32d9295dbcfb684d13dce7b40dff/Pacific_Discovery_Xelerator_IUL_2_Client_Guide-CA.pdf",
                },
                {
                  icon: <DocumentArrowDownIcon className="h-4 w-4" />,
                  title: "Overview",
                  href: "https://assets.ctfassets.net/9lvru9ro1ti1/1xDPNxVFXm12VCCs8aOmTq/665a3f6676a09b802f6530c65667ea55/Pacific_Discovery_Xelerator_IUL_2_Description_Page-CA.pdf",
                },
              ],
            },
            {
              label: "Horizon IUL (AZ Only)",
              files: [
                {
                  icon: <DocumentArrowDownIcon className="h-4 w-4" />,
                  title: "Client Guide",
                  href: "https://assets.ctfassets.net/9lvru9ro1ti1/6J6eIgRVz8pyXxOcs8r4oW/eb6a2c66b092224faf32d88f24e502be/Pacific_Horizon_IUL_Client_Guide-AZ.pdf",
                },
                {
                  icon: <DocumentArrowDownIcon className="h-4 w-4" />,
                  title: "Overview",
                  href: "https://assets.ctfassets.net/9lvru9ro1ti1/13P1MwwBzaJbcitGg8y2n1/85aff9450457301d269cd4aec71a7c89/Pacific_Horizon_IUL_Description_Page-AZ.pdf",
                },
              ],
            },
            {
              label: "Select VUL 2 (CA Only)",
              files: [
                {
                  icon: <DocumentArrowDownIcon className="h-4 w-4" />,
                  title: "Client Guide",
                  href: "https://assets.ctfassets.net/9lvru9ro1ti1/4PETAhMlHIQduQBIofqdsn/a682519e8259d66e8fbfc063f7af18d9/Pacific_Select_VUL_2_Client_Guide-CA.pdf",
                },
                {
                  icon: <DocumentArrowDownIcon className="h-4 w-4" />,
                  title: "Overview",
                  href: "https://assets.ctfassets.net/9lvru9ro1ti1/ExEy9ZV1MeOPPXS39UdG4/900bc7ec2a67ec027ccac6981dcd8fb5/Pacific_Select_VUL_2_Description_Page-CA.pdf",
                },
              ],
            },
            {
              label: "Admiral VUL (CA Only)",
              files: [
                {
                  icon: <DocumentArrowDownIcon className="h-4 w-4" />,
                  title: "Client Guide",
                  href: "https://assets.ctfassets.net/9lvru9ro1ti1/3W6ffjVJL2UuxC8juHmtLk/1e1952404c939e76acceeef502d1ad85/Pacific_Admiral_VUL_Client_Guide-CA.pdf",
                },
                {
                  icon: <DocumentArrowDownIcon className="h-4 w-4" />,
                  title: "Overview",
                  href: "https://assets.ctfassets.net/9lvru9ro1ti1/5PBYbHM4VJiIMxT3rl2pZO/2cb16d9807e4974b3e2906136bf06bd4/Pacific_Admiral_VUL_Overview.pdf",
                },
              ],
            },
          ],
        },
        longTermCareProductGuides: {
          category: "Long-Term Care Product Guides",
          subCategories: [
            {
              label: "PremierCare® (CA Only)",
              files: [
                {
                  icon: <DocumentArrowDownIcon className="h-4 w-4" />,
                  title: "PremierCare Choice 100 - Client Guide",
                  href: "https://assets.ctfassets.net/9lvru9ro1ti1/dn6ql7LKucWt1Vt86LOSY/01bafddc36cfc259c3d221504f5d437a/Pacific_PremierCare_Choice_100_Client_Guide.pdf",
                },
                {
                  icon: <DocumentArrowDownIcon className="h-4 w-4" />,
                  title: "PremierCare Advantage - Client Guide",
                  href: "https://assets.ctfassets.net/9lvru9ro1ti1/4Lw0Rs7e03wjZAnbMA1nfj/974850232c8dace8ac99046f897d6b30/Pacific_PremierCare_Advantage_Client_Guide_CA-CA.pdf",
                },
              ],
            },
            {
              label: "PremierCare® (AZ Only)",
              files: [
                {
                  icon: <DocumentArrowDownIcon className="h-4 w-4" />,
                  title: "Choice Life-Pay - Client Guide",
                  href: "https://assets.ctfassets.net/9lvru9ro1ti1/4m7cuiwCADuSsEUEvy6p5q/eda4b132a3fcb39e9d8e50bb04121b60/Pacific_PremierCare_Choice_Life-Pay-AZ.pdf",
                },
                {
                  icon: <DocumentArrowDownIcon className="h-4 w-4" />,
                  title: "PremierCare® Product Suite",
                  href: "https://assets.ctfassets.net/9lvru9ro1ti1/364Vyk73JU4XbNnt9Tgdwk/83faf472e972db61e6413f467bbf7a13/Pacific_PremierCare_Choice_Suite_of_Products-AZ.pdf",
                },
              ],
            },
          ],
        },
        contactMaps: {
          category: "Additional Resources",
          subCategories: [
            {
              label: "Contact Maps",
              files: [
                {
                  icon: <DocumentArrowDownIcon className="h-4 w-4" />,
                  title: "Regional Life Office Map",
                  href: "https://assets.ctfassets.net/9lvru9ro1ti1/6h129W8e0XWjlRs5iwefRH/57bde8783397989aa3c7dc07c4fc000d/IFP-Map-Jan.pdf",
                },
                {
                  icon: <DocumentArrowDownIcon className="h-4 w-4" />,
                  title: "Long-Term Care Territory Map",
                  href: "https://assets.ctfassets.net/9lvru9ro1ti1/1fsFjZdmuEg2ecPDDpvslj/190715176910b4b4f94cea7219ba46e5/Pacific_LTC-Map-Oct-2021.pdf",
                },
              ],
            },
            {
              label: "Tools & Other Documents",
              files: [
                {
                  icon: <ArrowTopRightOnSquareIcon className="h-4 w-4" />,
                  title: "Life Insurance Tools",
                  href: "https://lifeinsurance.pacificlife.com/",
                },
                {
                  icon: <DocumentArrowDownIcon className="h-4 w-4" />,
                  title: "Tax Effecient Retirement Planning",
                  href: "https://assets.ctfassets.net/9lvru9ro1ti1/5NlyQj3PCE2hqLxJfe7m08/3d27c8b38bfddb8db99a214716191069/Tax-Efficient-Retirement-Planning-for-High-Earning-Clients.pdf",
                },
              ],
            },
          ],
        },
      },
    },
    {
      thumbnail:
        "https://images.ctfassets.net/9lvru9ro1ti1/37xccIDMF9AeAyfnWmLsIJ/a6d245f16c40974e74850027ba3dc3ed/midland_national_logo_variation.png?h=250",
      title: "Midland National",
      description: (
        <p>
          We are excited to announce our upgraded preferred partnership with
          Midland National Life Insurance Company. With this enhanced
          relationship, you will gain access to industry-leading products (term,
          universal life, and indexedd universal life), marketing tools, and the
          local support you need to help grow your personal business.
        </p>
      ),
      files: {
        digitalResources: {
          category: "Digital Resources",
          subCategories: [
            {
              label: "Presentation Tools",
              files: [
                {
                  icon: <ArrowTopRightOnSquareIcon className="h-4 w-4" />,
                  title: "Midland & Stonewood",
                  href: "https://pages.stonewoodfinancial.com/midland",
                },
                {
                  icon: <ArrowTopRightOnSquareIcon className="h-4 w-4" />,
                  title: "Registration Link",
                  href: "https://pages.stonewoodfinancial.com/midland-signup",
                },
                {
                  icon: <DocumentArrowDownIcon className="h-4 w-4" />,
                  title: "Sample Presentation 1",
                  href: "https://assets.ctfassets.net/9lvru9ro1ti1/1MWgSDJnXb5KMoWoawNtbY/10f34cf9147b140fe1733d19fcfe8c6b/Stonewood_Strategy_Analysis_Form.pdf",
                },
                {
                  icon: <DocumentArrowDownIcon className="h-4 w-4" />,
                  title: "Sample Presentation 2",
                  href: "https://www.mediafire.com/folder/xjuw9o7xi5b7t/Non_Qualified_Javier",
                },
              ],
            },
            {
              label: "Policy Review Tools",
              files: [
                {
                  icon: <ArrowTopRightOnSquareIcon className="h-4 w-4" />,
                  title: "Term Quoter",
                  href: "https://www.midlandnational.com/free-term-quote",
                },
                {
                  icon: <VideoCameraIcon className="h-4 w-4" />,
                  title: "Policy Review Tool",
                  href: "https://engage.midlandnational.com/bd/policy-review/resources",
                },
                {
                  icon: <VideoCameraIcon className="h-4 w-4" />,
                  title: "Tips for Reviewing Your Life Insurance Policy",
                  href: "https://sfgmembers.wistia.com/medias/ha28gcxgu5",
                },
              ],
            },
            {
              label: "Video Content",
              files: [
                {
                  icon: <VideoCameraIcon className="h-4 w-4" />,
                  title: "The Smart Money Strategy",
                  href: "https://sfgmembers.wistia.com/medias/j8sgp2ll7j",
                },
                {
                  icon: <VideoCameraIcon className="h-4 w-4" />,
                  title: "Midland National Life Youtube Channel",
                  href: "https://www.youtube.com/midlandnationallife",
                },
              ],
            },
            {
              label: "Living Benefits",
              files: [
                {
                  icon: <VideoCameraIcon className="h-4 w-4" />,
                  title: "The power of Living Benefits",
                  href: "https://sfgmembers.wistia.com/medias/mtc2kzi0o2",
                },
                {
                  icon: <VideoCameraIcon className="h-4 w-4" />,
                  title: "Living Benefits Testimonial",
                  href: "https://sfgmembers.wistia.com/medias/lzlpeayq10",
                },
              ],
            },
          ],
        },
        additionalResources: {
          category: "Additional Resources",
          subCategories: [
            {
              label: "Contact Map",
              files: [
                {
                  icon: <DocumentArrowDownIcon className="h-4 w-4" />,
                  title: "Regional Distributor Partner Map",
                  href: "https://assets.ctfassets.net/9lvru9ro1ti1/4mUyjmGpEj0egMEQwU3qAT/bfe4a198179f8d7ade36b52c87c259de/midland_natioanl_contact-Map-12-20-FINAL.pdf",
                },
              ],
            },
            {
              label: "Other",
              files: [
                {
                  icon: <ArrowTopRightOnSquareIcon className="h-4 w-4" />,
                  title: "Digital Products at a Glance",
                  href: "https://engage.midlandnational.com/ProductsATAGlance?utm_source=bd_site&utm_medium=site&utm_campaign=ifg_sitelink&utm_content=textlink",
                },
                {
                  icon: <ArrowTopRightOnSquareIcon className="h-4 w-4" />,
                  title: "MN Agent Resource Portal",
                  href: "https://engage.midlandnational.com/mnportal?utm_source=bd_site&utm_medium=site&utm_campaign=ifg_sitelink&utm_content=textlink",
                },
              ],
            },
          ],
        },
      },
    },
  ];

  return (
    <>
      <Head>
        <title>Insurance Partners | IFG Rep Portal</title>
      </Head>
      <PageHeader pageName="Insurance Partners" breadCrumb="Insurance" />
      <Layout preview={preview}>
        <ContentContainer>
          <GridTile
            tileTitle="Strategic Brokerage Partners"
            colSpan="col-span-full"
          >
            <ul className="grid grid-cols-3 gap-x-5 gap-y-8">
              {strategicBrokeragePartners.map((item) => (
                <li key={item.title} className="space-y-4">
                  <img
                    src={item.thumbnail}
                    className="aspect-3/2 mx-auto h-32 object-contain"
                  />
                  <h3 className="font-bold text-neon-orange-500">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-5">{item.description}</p>
                  {item.link && (
                    <Link
                      className="block w-fit text-sm font-bold text-blue-wave-500"
                      target="_blank"
                      href={item.link.href}
                    >
                      {item.link.linkTitle} &rarr;
                    </Link>
                  )}
                  {item.files && (
                    <>
                      <hr />
                      <h4 className="text-xs font-bold uppercase text-ifg-turqoise-500">
                        Resources
                      </h4>
                      <ul className="flex flex-wrap gap-x-2 gap-y-3 text-xs">
                        {item.files.map((file) => (
                          <Link
                            target="_blank"
                            href={file.href}
                            className="flex w-fit items-center gap-1"
                          >
                            {file.icon}
                            <p>{file.title}</p>
                          </Link>
                        ))}
                      </ul>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </GridTile>
          <GridTile
            tileTitle="Direct Life Insurance Partners"
            colSpan="col-span-full"
          >
            <ul className="grid grid-cols-2 gap-x-5 gap-y-8">
              {directLifeInsurancePartners.map((item) => (
                <li key={item.title} className="space-y-4">
                  <img
                    src={item.thumbnail}
                    className="aspect-3/2 mx-auto h-32 object-contain"
                  />
                  <h3 className="font-bold text-neon-orange-500">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-5">{item.description}</p>
                  {item.link && (
                    <Link
                      className="block w-fit text-sm font-bold text-blue-wave-500"
                      target="_blank"
                      href={item.link.href}
                    >
                      {item.link.linkTitle} &rarr;
                    </Link>
                  )}
                  {item.files && (
                    <>
                      <hr />
                      <h4 className="text-xs font-bold uppercase text-ifg-turqoise-500">
                        Resources
                      </h4>
                      <ul className="flex flex-wrap gap-x-2 gap-y-3 text-xs">
                        {Object.keys(item.files).map((cat) => (
                          <li
                            key={item.files[cat].category}
                            className="w-full space-y-2"
                          >
                            <h4 className="font-bold">
                              {item.files[cat].category}
                            </h4>
                            <ul className="grid grid-cols-2 gap-5">
                              {item.files[cat].subCategories.map(
                                (subcategory) => (
                                  <li
                                    key={subcategory.label}
                                    className="space-y-2 rounded bg-gray-100 p-4"
                                  >
                                    <p className="font-semibold italic">
                                      {subcategory.label}
                                    </p>
                                    <ul className="space-y-2">
                                      {subcategory.files.map((file) => (
                                        <li key={file.title}>
                                          <Link
                                            href={file.href}
                                            className="flex w-fit items-center gap-2"
                                            target="_blank"
                                          >
                                            {file.icon}
                                            <p>{file.title}</p>
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </li>
                                ),
                              )}
                            </ul>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </GridTile>
        </ContentContainer>
      </Layout>
    </>
  );
};

export default Page;
