import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";

// CONTENTFUL
const contenful = require("contentful");

const client = contenful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export default function AdvisorEmailForm({ open, setOpen, selectedId }) {
  const initialFormState = {
    formName: "advisor lookup",
    advisorName: "",
    userName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [entryData, setEntryData] = useState();
  const [formData, setFormData] = useState(initialFormState);

  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  // THEN I NEED TO HANDLE THE ONCHANGE FOR EACH FIELD TO UPDATE THE FORMDATA KEY VALUES
  // FINALLY I NEED TO SETUP THE SENDGRID API POST REQUEST TO SEND THE EMAIL TO INFO@IFGSD.COM
  useEffect(() => {
    const fetchData = async () => {
      const data = await client.getEntry(selectedId);

      setEntryData(data);

      setFormData((prevState) => ({
        ...prevState,
        advisorName: data.fields.firstName + " " + data.fields.lastName,
      }));
    };

    if (selectedId !== "") {
      fetchData();
    }
  }, [selectedId]);

  const handleChange = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value;
    switch (fieldName) {
      case "userName":
        setFormData((prevState) => ({ ...prevState, userName: value }));
        break;
      case "phone":
        setFormData((prevState) => ({ ...prevState, phone: value }));
        break;
      case "email":
        setFormData((prevState) => ({ ...prevState, email: value }));
        break;
      case "message":
        setFormData((prevState) => ({ ...prevState, message: value }));
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    const res = await fetch("/api/public/sendgrid", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.status == 200) {
      setIsSending(false);
      setIsSent(true);
    }
  };

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
          <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          {isSent && (
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
                  <div className="mx-auto h-64 w-64 rounded-full bg-green-500 text-center text-seabreeze-500">
                    <CheckIcon />
                  </div>
                  <p className="my-5 text-center font-semibold text-gray-500">
                    Email Sent to {formData.advisorName}!
                  </p>
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-neon-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-neon-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neon-orange-600"
                    onClick={() => {
                      setFormData(initialFormState);
                      setIsSent(false);
                      setOpen(false);
                    }}
                  >
                    Close
                  </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          )}
          {!isSent && (
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
                  <p className="text-center font-semibold text-gray-500">
                    Send an email to {entryData && entryData.fields.firstName}
                  </p>
                  <div>
                    <label
                      htmlFor="userName"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="userName"
                        id="userName"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-neon-orange-600 sm:text-sm sm:leading-6"
                        placeholder="John Smith"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="my-5">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Email
                      </label>
                      <div className="relative mt-2 rounded-md shadow-sm">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <EnvelopeIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </div>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-neon-orange-600 sm:text-sm sm:leading-6"
                          placeholder="you@example.com"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="my-5">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Phone
                      </label>
                      <div className="relative mt-2 rounded-md shadow-sm">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <PhoneIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </div>
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-neon-orange-600 sm:text-sm sm:leading-6"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="my-5">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Your message
                    </label>
                    <div className="mt-2">
                      <textarea
                        rows={4}
                        name="message"
                        id="message"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-neon-orange-600 sm:text-sm sm:leading-6"
                        defaultValue={""}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6">
                    {!isSending && (
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md bg-neon-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-neon-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neon-orange-600"
                        onClick={handleSubmit}
                      >
                        Send Email
                      </button>
                    )}
                    {isSending && (
                      <button
                        type="button"
                        className=" flex w-full items-center justify-center gap-2 rounded-lg bg-neon-orange-400 px-4 py-3 font-bold text-seabreeze-400"
                        disabled
                      >
                        <div
                          className="border-current inline-block h-6 w-6 animate-spin rounded-full border-[3px] border-t-transparent"
                          role="status"
                          aria-label="loading"
                        >
                          <span className="sr-only">Sending Email...</span>
                        </div>
                        Sending Email
                      </button>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          )}
        </div>
      </Dialog>
    </Transition.Root>
  );
}
