import React from "react";
import Link from "next/link";

const Pagination = ({
  currentPage,
  totalPages,
  prevDisabled,
  nextDisabled,
  path,
}) => {
  const prevPageUrl =
    currentPage === "2"
      ? `/press-and-media/${path}/`
      : `/press-and-media/${path}/page/${parseInt(currentPage, 10) - 1}`;

  const nextPageUrl = `/press-and-media/${path}/page/${
    parseInt(currentPage, 10) + 1
  }`;

  return (
    <div className="my-10 flex justify-center gap-5">
      <div>
        {prevDisabled && <></>}
        {!prevDisabled && (
          <Link href={prevPageUrl} passHref>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6 text-neon-orange-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </Link>
        )}
      </div>
      <div>
        <p>{`${currentPage} of ${totalPages}`}</p>
      </div>
      <div>
        {nextDisabled && <></>}
        {!nextDisabled && (
          <Link href={nextPageUrl} passHref>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6 text-neon-orange-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Pagination;
