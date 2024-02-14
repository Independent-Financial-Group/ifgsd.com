import { useState } from "react";
import React from "react";

const PodcastQuestionForm = () => {
  const initialFormState = {
    formName: "Podcast Question",
    firstName: "",
    lastName: "",
    email: "",
    question: "",
  };

  const [formData, setFormData] = useState(initialFormState);

  const [isSending, setIsSending] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleChange = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value;
    switch (fieldName) {
      case "first-name":
        setFormData((prevState) => ({ ...prevState, firstName: value }));
        break;
      case "last-name":
        setFormData((prevState) => ({ ...prevState, lastName: value }));
        break;
      case "email":
        setFormData((prevState) => ({ ...prevState, email: value }));
        break;
      case "question":
        setFormData((prevState) => ({ ...prevState, question: value }));
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
      setFormData(initialFormState);
      setEmailSent(true);
    }
  };

  return (
    <>
      {!emailSent && (
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2"
        >
          <div className="px-4 py-6 sm:p-8">
            <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  First name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-neon-orange-600 sm:text-sm sm:leading-6"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-neon-orange-600 sm:text-sm sm:leading-6"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="sm:col-span-full">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-neon-orange-600 sm:text-sm sm:leading-6"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="sm:col-span-full">
                <label
                  htmlFor="question"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Your Question
                </label>
                <div className="mt-2">
                  <textarea
                    id="question"
                    name="question"
                    type="text"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-neon-orange-600 sm:text-sm sm:leading-6"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
            {!isSending && (
              <button className="w-full rounded-lg bg-gradient-to-r from-neon-orange-500 to-neon-orange-600 px-4 py-3 font-bold text-seabreeze-500 hover:bg-neon-orange-600">
                Send Your Question
              </button>
            )}
            {isSending && (
              <button
                type="button"
                className=" flex w-full items-center justify-center gap-2 rounded-lg bg-neon-orange-400 px-4 py-3 font-bold text-seabreeze-500"
                disabled
              >
                <div
                  className="border-current inline-block h-6 w-6 animate-spin rounded-full border-[3px] border-t-transparent"
                  role="status"
                  aria-label="loading"
                >
                  <span className="sr-only">Sending Email...</span>
                </div>
                Sending Your Question
              </button>
            )}
          </div>
        </form>
      )}
      {emailSent && (
        <div className="flex h-[400px] flex-col items-center justify-center bg-white">
          <img
            alt="email sent illustration"
            className="mx-auto w-1/2"
            src="https://images.ctfassets.net/9lvru9ro1ti1/3Q1eK8OEwne3BxXGwhZ6Eg/7ad8fccd1288cb7b602711be861baf56/email-sent-external-illustration.png"
          />
          <p className="text-lg font-semibold text-gray-400">
            Thank You! Your question has been submitted.
          </p>
        </div>
      )}
    </>
  );
};

export default PodcastQuestionForm;
