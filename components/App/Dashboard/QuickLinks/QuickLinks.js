import React from "react";
import {
  LinkIcon,
  CheckCircleIcon,
  MicrophoneIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const QuickLinks = () => {
  const quickLinks = [
    {
      name: (
        <span>
          Gateway<span className="align-super">+</span>
        </span>
      ),
      imageUrl:
        "https://images.ctfassets.net/9lvru9ro1ti1/5SNN2i1X9MJyXkmG4aHYvP/9cba126c2f450399dd5e0624fdf64a6b/Artboard_1.png",
      link: "https://ifg-gateway.com",
      openInNewTab: true,
    },
    {
      name: "Form CRS",
      imageUrl:
        "https://images.ctfassets.net/9lvru9ro1ti1/6V3OIT5gfdwceAGKHbiqmn/9944b0701bef1c9e8e3206981f9ae8ed/form_crs.png",
      link: "#",
      openInNewTab: false,
    },
    {
      name: "Podcast",
      imageUrl:
        "https://images.ctfassets.net/9lvru9ro1ti1/KU0brQS1whQaQJ4SQCV5u/947ccb7ac2f3ae87ae710adbb6cd67da/podcast.png",
      link: "/app/resources/podcast",
      openInNewTab: false,
    },
    {
      name: "Alt. Investments",
      imageUrl:
        "https://images.ctfassets.net/9lvru9ro1ti1/6sUniE65bd3WKHNbYL35uy/8046724be127e701f5ad7644cdc6c3d4/alternative_investments_icon.png",
      link: "/app/alternative-investments/overview",
      openInNewTab: false,
    },
    {
      name: "Advisory",
      imageUrl:
        "https://images.ctfassets.net/9lvru9ro1ti1/2gMcbSBP3T6teZqVRGairH/903db44f5516d33b3aa1bbc7331d4121/advisory_icon_80x80.png",
      link: "/app/advisory/overview",
      openInNewTab: false,
    },
    {
      name: "Annuities",
      imageUrl:
        "https://images.ctfassets.net/9lvru9ro1ti1/3LTHARshi6c2LZpz0sWI9j/6b70caada289168f4378c2cc5c2311f2/annuities_icon_80x80.png",
      link: "/app/annuities/overview",
      openInNewTab: false,
    },
    {
      name: "Structured Products",
      imageUrl:
        "https://images.ctfassets.net/9lvru9ro1ti1/3Kji3KhvfeY3uj942pamf0/59ae8c2d57f54a0c000796c34e0d9968/structured_products_icon_80x80.png?h=250",
      link: "/app/structured-products/overview",
      openInNewTab: false,
    },
    {
      name: "Commissions & Fees",
      imageUrl:
        "https://images.ctfassets.net/9lvru9ro1ti1/t6lqhiKBJMAHoYGDkoM9R/b9c929afe8f5a2a4cd646ebef367be3b/commissions_and_fees_icon_80x80.png?h=250",
      link: "/app/commissions/overview",
      openInNewTab: false,
    },
    {
      name: "Information Technology",
      imageUrl:
        "https://images.ctfassets.net/9lvru9ro1ti1/4XeegKT0v32JLPQFng5miA/ee7e25d9a5d3a4d77ce3d117475fc4e3/information_technology_icon_80x80.png?h=250",
      link: "/app/information-technology/overview",
      openInNewTab: false,
    },
    {
      name: "Retirement Services",
      imageUrl:
        "https://images.ctfassets.net/9lvru9ro1ti1/7i0px5j6StYcwGab1W9nS4/6fd0cf237cdf0a72bd2d126b420c74d0/retirement_services_icon_80x80.png?h=250",
      link: "/app/retirement-services/overview",
      openInNewTab: false,
    },
    {
      name: "Mutual Funds",
      imageUrl:
        "https://images.ctfassets.net/9lvru9ro1ti1/7yvPVpndmwHGvaBAIfZx1t/df3dce14f5bf380b459c3e189e9a3bca/mutual_funds_icon_80x80.png?h=250",
      link: "/app/mutual-funds/overview",
      openInNewTab: false,
    },
    {
      name: "Insurance",
      imageUrl:
        "https://images.ctfassets.net/9lvru9ro1ti1/6KIDjP3LW9ne9jObvtV8Kz/e8eb299b2d39bc7cf103b8a5fbab8355/insurance_icon_80x80.png?h=250",
      link: "/app/insurance/overview",
      openInNewTab: false,
    },
  ];

  return (
    <div className="-rounded-lg col-span-6 h-[616px] bg-white shadow">
      <div className="mb-5 rounded-t-lg bg-neon-orange-500 py-2">
        <h2 className="ml-4 flex gap-2 font-bold text-seabreeze-500">
          <LinkIcon className="h-5 w-5" />
          Quick Links
        </h2>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-3 items-center gap-5">
          {quickLinks.map((link) => {
            return (
              <Link
                href={link.link}
                target={link.openInNewTab ? "_blank" : null}
                className="group flex flex-col items-center justify-center rounded-lg p-2 text-sm"
                key={link.name}
              >
                <div>
                  {link.imageUrl ? (
                    <div className="bg-ifg-turqoise-500 flex aspect-square h-[60px] items-center rounded-full transition-all group-hover:-translate-y-2 group-hover:scale-110 group-hover:shadow-md">
                      <img
                        src={link.imageUrl}
                        alt={link.name}
                        className="mx-auto aspect-square h-[40px] object-contain"
                      />
                    </div>
                  ) : link.icon ? (
                    <link.icon className="h-10" />
                  ) : (
                    <LinkIcon className="mx-auto h-10" />
                  )}
                </div>
                <div className="mt-1">
                  <p className="w-full text-center">{link.name}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;
