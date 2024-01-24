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
      name: "Gateway",
      imageUrl:
        "https://images.ctfassets.net/9lvru9ro1ti1/5SNN2i1X9MJyXkmG4aHYvP/8e21059c7aecf3ef73eddb66353e6966/gateway-icon.webp",
    },
    {
      name: "Form CRS",
      icon: CheckCircleIcon,
    },
    {
      name: "Podcast",
      icon: MicrophoneIcon,
    },
    {
      name: "Alt. Investments",
      imageUrl:
        "https://images.ctfassets.net/9lvru9ro1ti1/25J0MM51vIn1eB14u4Jzgd/1e044fcd747afd3c7fc0ae234d9c4885/Alternative-Investments-icon.webp",
    },
    {
      name: "Advisory",
      imageUrl:
        "https://images.ctfassets.net/9lvru9ro1ti1/60C0i3TDN20P3F4CU0R6bL/0ed3a1a19ff49baf53704175b8e064d5/advisory-icon.webp",
    },
    {
      name: "Annuities",
      imageUrl:
        "https://images.ctfassets.net/9lvru9ro1ti1/7JiMv3yZDvr33jocks00GQ/7dd57d3eb260faf1e6787bddd9e8b904/annuities-icon.webp",
    },
    {
      name: "Market Linked Products",
      imageUrl:
        "https://images.ctfassets.net/9lvru9ro1ti1/4opgkt22bfKCzjmwqOzw79/a9a8e9c6b36a9bfab29bdd9869cdd345/market-linked-products-icon.webp",
    },
    {
      name: "Commissions & Fees",
      imageUrl:
        "https://images.ctfassets.net/9lvru9ro1ti1/1MNqX3GjYc0CjRGlbetXbR/8a92af5e7e429b96051c4eec22707a42/Commissions-icon.jpg",
    },
    {
      name: "Technology",
      icon: CodeBracketIcon,
    },
    {
      name: "Retirement Services",
      imageUrl:
        "https://images.ctfassets.net/9lvru9ro1ti1/PAggjtxvHkeaBbz7YfWb4/ada6cdfbef0679416361f84f7d9ee3ce/Retirement-Services-icon.webp",
    },
    {
      name: "Mutual Funds",
      imageUrl:
        "https://images.ctfassets.net/9lvru9ro1ti1/5TD3gzmt0rQ9zqYRkffnIT/cbc208979eeeb638eee75aeeeda287b4/Mutual-Funds-Icon.webp",
    },
    {
      name: "Insurance",
      imageUrl:
        "https://images.ctfassets.net/9lvru9ro1ti1/1S2BA2dhHJtFTsgZiTYfAn/bcfae58625adda34e907a3546282c286/Insurance-icon.webp",
    },
  ];

  return (
    <div className="col-span-6 rounded-lg bg-white shadow">
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
              <a
                href="#"
                className="flex flex-col items-center justify-center rounded-lg p-2 font-semibold text-gray-900"
                key={link.name}
              >
                <div>
                  {link.imageUrl ? (
                    <img src={link.imageUrl} alt={link.name} className="h-11" />
                  ) : link.icon ? (
                    <link.icon className="h-10" />
                  ) : (
                    <LinkIcon className="mx-auto h-10" />
                  )}
                </div>
                <div className="mt-5">
                  <p className="w-full text-center">{link.name}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;
