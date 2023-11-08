import React, { useEffect, useState } from "react";

import { Modal, Spinner } from "flowbite-react";

const contenful = require("contentful");

const client = contenful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

const LeadeshipBioModal = ({ openModal, setOpenModal, entryId }) => {
  const [bio, setBio] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (entryId) {
      const getBio = async () => {
        setIsLoading(true);
        const bio = await client.getEntry(entryId);
        setBio({ ...bio.fields });
        setIsLoading(false);
      };

      getBio();
    }

    if (openModal !== "default") {
      setBio(null);
    }
  }, [entryId, openModal]);

  if (bio === null) {
    return null;
  }

  return (
    <>
      <Modal
        show={openModal === "default"}
        onClose={() => setOpenModal(null)}
        className="transition-all"
      >
        <Modal.Header>
          {isLoading ? (
            <Spinner />
          ) : (
            <>
              <img
                className="mx-auto mb-5 rounded-[20px]"
                src={`https:${bio.headshot.fields.file.url}`}
              />
              <p className="text-3xl font-bold text-hazard-blue-500">
                {bio.name}
              </p>
              <p className="text-dunkel-blue-300 ">{bio.title}</p>
            </>
          )}
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            {isLoading ? <Spinner /> : <p>{bio.biography}</p>}
          </div>
        </Modal.Body>
        <Modal.Footer>
          {isLoading ? (
            <Spinner />
          ) : (
            <a
              className="flex w-full justify-end gap-2 font-bold text-neon-orange-500"
              href={bio.linkedInProfile}
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                />
              </svg>
              LinkedIn
            </a>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LeadeshipBioModal;
