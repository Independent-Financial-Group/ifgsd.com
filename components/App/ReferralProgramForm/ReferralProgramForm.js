import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ReferralProgramForm = () => {
  const formInitialState = {
    formName: "referral program form",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    currentFirm: "",
    reasonForSwitch: "",
    notes: "",
    advisorFirstName: "",
    advisorLastName: "",
    advisorEmail: "",
  };

  const [currentGDC, setCurrentGDC] = useState(0);
  const [openForm, setOpenForm] = useState(false);
  const [formData, setFormData] = useState(formInitialState);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleFormReset = (e) => {
    setCurrentGDC(0);
    setOpenForm(false);
    setFormData(formInitialState);
    setFormSubmitted(false);
  };

  const handleRangeChange = (e) => {
    const value = e.target.value;

    setFormData((prevState) => ({ ...prevState }));
    setCurrentGDC(value);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setOpenForm(false);
    setFormSubmitted(true);

    const res = await fetch("/api/public/sendgrid", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.status == 200) {
      setIsSending(false);
      setFormSubmitted(true);
    }
  };

  return (
    <>
      {formSubmitted && (
        <div className="mt-5">
          <h2 className=" mb-5 font-semibold text-green-500">
            THE FORM HAS BEEN SUBMITTED!
          </h2>
          <p>
            If you are referring advisors from multiple firms, please click
            below.
          </p>
          <button
            className="mt-5 rounded bg-neon-orange-500 p-2 text-white"
            onClick={handleFormReset}
          >
            Refer More Advisors
          </button>
        </div>
      )}

      {!formSubmitted && (
        <div className="mt-5">
          <div>
            <div className="relative">
              <label className="text-sm font-semibold text-gray-500">
                Prospects Current GDC
              </label>
              <p className="font-bold text-bright-blue-500">
                ${currentGDC.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </p>
              <input
                onChange={handleRangeChange}
                className="w-full"
                type="range"
                value={currentGDC}
                min={0}
                max={3000000}
              />
              <span class="absolute -bottom-6 start-0 text-sm text-gray-500 dark:text-gray-400">
                Min ($0)
              </span>
              <span class="absolute -bottom-6 end-0 text-sm text-gray-500 dark:text-gray-400">
                Max ($300,000,000)
              </span>
            </div>
            {currentGDC > 150000 && (
              <div className="mt-10 ">
                <p className="text-lg font-semibold text-neon-orange-500">
                  Your Potential Commission
                </p>
                <p className="font-semibold">
                  $
                  {Math.floor(currentGDC * 0.02)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </p>
              </div>
            )}
          </div>
          {currentGDC > 150000 && (
            <div className="mt-5">
              <button
                onClick={() => setOpenForm(true)}
                className="rounded-lg bg-neon-orange-500 p-2 font-bold text-seabreeze-500"
              >
                fill out form
              </button>
            </div>
          )}
        </div>
      )}

      {!formSubmitted && openForm && currentGDC > 150000 ? (
        <AnimatePresence>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 300, opacity: 0 }}
            className="mt-5"
          >
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-neon-orange-500">
                Prospects Information
              </h2>

              {/* PROSPECT INFORMATION SECTION */}
              <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    First name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      autoComplete="given-name"
                      onChange={handleInputChange}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-neon-orange-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Last name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      onChange={handleInputChange}
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-neon-orange-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Phone
                  </label>
                  <div className="mt-2">
                    <input
                      onChange={handleInputChange}
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-neon-orange-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      onChange={handleInputChange}
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-neon-orange-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="currentFirm"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Current Firm
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="currentFirm"
                      onChange={handleInputChange}
                      id="currentFirm"
                      autoComplete="currentFirm"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-neon-orange-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="reasonForSwitch"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Interests for switching
                  </label>
                  <div className="mt-2">
                    <textarea
                      type="text"
                      name="reasonForSwitch"
                      id="reasonForSwitch"
                      onChange={handleInputChange}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-neon-orange-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-full">
                  <label
                    htmlFor="notes"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Notes
                  </label>
                  <div className="mt-2">
                    <textarea
                      type="text"
                      name="notes"
                      onChange={handleInputChange}
                      id="notes"
                      placeholder="Please include some context for your referral. Referring a group? Please include all advisor names here."
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-neon-orange-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>

              <h2 className=" mt-5 text-base font-semibold leading-7 text-neon-orange-500">
                Your Information
              </h2>

              {/* ADVISOR INFORMATION SECTION */}

              <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="advisorFirstName"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    First name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="advisorFirstName"
                      onChange={handleInputChange}
                      id="advisorFirstName"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-neon-orange-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="advisorLastName"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Last name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="advisorLastName"
                      onChange={handleInputChange}
                      id="advisorLastName"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-neon-orange-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-full">
                  <label
                    htmlFor="advisorEmail"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="advisorEmail"
                      name="advisorEmail"
                      type="email"
                      onChange={handleInputChange}
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-neon-orange-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <button
                    onClick={handleSubmit}
                    className="mx-auto mt-5 block rounded bg-neon-orange-500 p-2 text-white"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      ) : null}
    </>
  );
};

export default ReferralProgramForm;
