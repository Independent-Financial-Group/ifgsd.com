import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";

import Image from "next/image";

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import conferenceLocationImage from "../../public/_conferences/images/rosewood.webp";

const contenful = require("contentful");

const client = contenful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

const Modal = ({ open, setOpen, id }) => {
  const [data, setData] = useState();

  useEffect(() => {
    if (id) {
      const getConferenceData = async () => {
        setData(await client.getEntry(id));
      };

      getConferenceData();
    } else if (!open) {
      setData(null);
    }
  }, [id, open]);

  if (data == null) {
    return null;
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <div>
                  {data.fields.locationImage && (
                    <div className="mx-auto flex items-center justify-center bg-hazard-blue-100 px-4 py-4">
                      <Image
                        src={`https:${data.fields.locationImage.fields.file.url}`}
                        width={
                          data.fields.locationImage.fields.file.details.image
                            .width
                        }
                        height={
                          data.fields.locationImage.fields.file.details.image
                            .height
                        }
                        alt={data.fields.conferenceDescription}
                        className="h-[280px] rounded-t-xl md:w-full md:object-cover"
                      />
                    </div>
                  )}

                  <div className="mt-3 sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-base font-semibold leading-6 text-gray-900"
                    >
                      {data.fields.conferenceName}
                      {data.fields.name}
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        {data.fields.conferenceDescription}
                        <ReactMarkdown>{data.fields.fullDetails}</ReactMarkdown>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-neon-orange-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-neon-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={() => setOpen(false)}
                  >
                    Back to page
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Modal;
