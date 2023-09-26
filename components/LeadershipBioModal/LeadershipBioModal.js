import React, { useEffect, useState } from "react";

import { Button, Modal } from "flowbite-react";

const contenful = require("contentful");

const client = contenful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

const LeadeshipBioModal = ({openModal, setOpenModal, entryId}) => {

  const [bio, setBio] = useState(null)

  useEffect(() => {

    if(entryId) {
      const getBio = async () => {
        const bio = await client.getEntry(entryId);
        setBio({...bio.fields})
      }

      getBio();
    }

    if(openModal !== "default"){
      setBio(null)
    }

    console.log(openModal)
  }, [entryId, openModal])

  console.log(bio)

  if(bio === null) {
    return (
      null
    )
  }

  return (
    <>
      <Modal
        show={openModal === "default"}
        onClose={() => setOpenModal(null)}
      >
        <Modal.Header>
          <img className="mx-auto mb-5 rounded-[20px]" src={`https:${bio.headshot.fields.file.url}`} />
          <p className="font-bold text-hazard-blue-500 text-3xl">{bio.name}</p>
          <p className="text-dunkel-blue-300 ">{bio.title}</p>
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p>
              {bio.biography}
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <a className="text-right" href={bio.linkedInProfile} target="_blank">
            LinkedIn
          </a>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LeadeshipBioModal;
