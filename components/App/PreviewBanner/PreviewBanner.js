import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const PreviewBanner = () => {
  const router = useRouter();
  console.log(router.asPath);

  return (
    <div className="sticky top-0 z-50 bg-red-600 px-4 py-3 text-white">
      <p className="text-center text-sm font-medium">
        You are in preview mode. Any items in draft status in contentful will
        now show.{" "}
        <a
          href={`/api/public/clear-preview?path=${router.asPath}`}
          className="inline-block underline"
        >
          Click here to exit preview mode.
        </a>
      </p>
    </div>
  );
};

export default PreviewBanner;
