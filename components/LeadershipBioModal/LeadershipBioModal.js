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

    console.log(openModal);
  }, [entryId, openModal]);

  console.log(bio);

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
              className="text-right"
              href={bio.linkedInProfile}
              target="_blank"
            >
              LinkedIn
            </a>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LeadeshipBioModal;
