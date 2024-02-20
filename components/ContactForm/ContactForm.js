import React, { useState } from "react";

const ContactForm = () => {
  const [states, setStates] = useState([
    "AL",
    "AK",
    "AS",
    "AZ",
    "AR",
    "CA",
    "CO",
    "CT",
    "DE",
    "DC",
    "FM",
    "FL",
    "GA",
    "GU",
    "HI",
    "ID",
    "IL",
    "IN",
    "IA",
    "KS",
    "KY",
    "LA",
    "ME",
    "MH",
    "MD",
    "MA",
    "MI",
    "MN",
    "MS",
    "MO",
    "MT",
    "NE",
    "NV",
    "NH",
    "NJ",
    "NM",
    "NY",
    "NC",
    "ND",
    "MP",
    "OH",
    "OK",
    "OR",
    "PW",
    "PA",
    "PR",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VT",
    "VI",
    "VA",
    "WA",
    "WV",
    "WI",
    "WY",
  ]);

  const initialFormState = {
    name: "",
    email: "",
    phone: "",
    isFinancialAdvisor: false,
    company: "",
    city: "",
    state: "",
    aum: "",
    businessMix: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormState);

  const [isSending, setIsSending] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleChange = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value;
    switch (fieldName) {
      case "name":
        setFormData((prevState) => ({ ...prevState, name: value }));
        break;
      case "email":
        setFormData((prevState) => ({ ...prevState, email: value }));
        break;
      case "phone":
        setFormData((prevState) => ({ ...prevState, phone: value }));
        break;
      case "isFinancialAdvisor":
        if (value === "yes") {
          setFormData((prevState) => ({
            ...prevState,
            isFinancialAdvisor: true,
          }));
        } else if (value === "no") {
          setFormData((prevState) => ({
            ...prevState,
            isFinancialAdvisor: false,
          }));
        }
        break;
      case "company":
        setFormData((prevState) => ({ ...prevState, company: value }));
        break;
      case "city":
        setFormData((prevState) => ({ ...prevState, city: value }));
        break;
      case "state":
        setFormData((prevState) => ({ ...prevState, state: value }));
        break;
      case "aum":
        setFormData((prevState) => ({ ...prevState, aum: value }));
        break;
      case "businessMix":
        setFormData((prevState) => ({ ...prevState, businessMix: value }));
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
      setFormData(initialFormState);
      setEmailSent(true);
    }
  };

  return (
    <div className="rounded-3xl bg-white p-8">
      {emailSent && (
        <>
          <img
            alt="email sent illustration"
            className="mx-auto w-1/2"
            src="https://images.ctfassets.net/9lvru9ro1ti1/3Q1eK8OEwne3BxXGwhZ6Eg/7ad8fccd1288cb7b602711be861baf56/email-sent-external-illustration.png"
          />
          <h2 className="my-5 mb-5 text-center text-3xl font-bold text-neon-orange-500">
            Your Email has been Sent!
          </h2>
          <p className="text-center text-gray-500">
            A member of our team will be in touch with you!
          </p>
        </>
      )}
      {!emailSent && (
        <>
          <h2 className="my-5 mb-5 text-center text-3xl font-bold text-neon-orange-500">
            Send us a message
          </h2>
          <p className="mb-5 text-xs italic leading-5 text-gray-700">
            **If you are an existing client of an advisor affiliated with
            Independent Financial Group with an inquiry related to updating
            information on your account, online access, statement or tax form
            requests, or general questions on your account, please contact your
            financial advisor directly.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="sr-only" htmlFor="name">
                Name
              </label>
              <input
                className="w-full rounded-lg border border-gray-200 p-3 text-sm focus:border-neon-orange-500 focus:outline-none focus:ring-1 focus:ring-neon-orange-500"
                placeholder="Name"
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
                value={formData.name}
              />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm focus:border-neon-orange-500 focus:outline-none focus:ring-1 focus:ring-neon-orange-500"
                  placeholder="Email address"
                  type="email"
                  id="email"
                  onChange={handleChange}
                  name="email"
                  value={formData.email}
                />
              </div>

              <div>
                <label className="sr-only" htmlFor="phone">
                  Phone
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm focus:border-neon-orange-500 focus:outline-none focus:ring-1 focus:ring-neon-orange-500"
                  placeholder="Phone Number"
                  type="tel"
                  id="phone"
                  onChange={handleChange}
                  name="phone"
                  value={formData.phone}
                />
              </div>
            </div>
            <div>
              <fieldset
                onChange={handleChange}
                className="sm:col-span-2"
                name="isFinancialAdvisor"
                defaultValue={false}
              >
                <legend className="block text-sm font-semibold leading-6 text-gray-900">
                  Are you a financial advisor?
                </legend>
                <div className="mt-4 flex items-center gap-5 text-sm leading-6 text-gray-600">
                  <div className="flex gap-x-2.5">
                    <input
                      id="isFinancialAdvisor"
                      name="isFinancialAdvisor"
                      defaultValue="yes"
                      type="radio"
                      className="mt-1 h-4 w-4 border-gray-300 text-neon-orange-600 shadow-sm focus:ring-neon-orange-600"
                      checked={formData.isFinancialAdvisor == true}
                    />
                    <label>Yes</label>
                  </div>
                  <div className="flex gap-x-2.5 ">
                    <input
                      id="isNotFinancialAdvisor"
                      name="isFinancialAdvisor"
                      defaultValue="no"
                      type="radio"
                      className="mt-1 h-4 w-4 border-gray-300 text-neon-orange-500 shadow-sm focus:ring-neon-orange-600"
                      checked={formData.isFinancialAdvisor == false}
                    />
                    <label>No</label>
                  </div>
                </div>
              </fieldset>
            </div>
            {formData.isFinancialAdvisor && (
              <>
                <div>
                  <label className="sr-only" htmlFor="name">
                    Company/Organization
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm focus:border-neon-orange-500 focus:outline-none focus:ring-1 focus:ring-neon-orange-500"
                    placeholder="Company/Organization"
                    type="text"
                    id="name"
                    name="company"
                    onChange={handleChange}
                    value={formData.company}
                  />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">
                      City
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm focus:border-neon-orange-500 focus:outline-none focus:ring-1 focus:ring-neon-orange-500"
                      placeholder="City"
                      type="text"
                      id="city"
                      name="city"
                      onChange={handleChange}
                      value={formData.city}
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="state">
                      State
                    </label>
                    <select
                      id="state"
                      className="w-full rounded-lg border-gray-200 p-3 text-sm focus:border-neon-orange-500 focus:outline-none focus:ring-1 focus:ring-neon-orange-500"
                      onChange={handleChange}
                      name="state"
                      value={formData.state}
                    >
                      {states.map((state) => {
                        return (
                          <option key={state} value={state}>
                            {state}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="aum">
                      AUM
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm focus:border-neon-orange-500 focus:outline-none focus:ring-1 focus:ring-neon-orange-500"
                      placeholder="AUM"
                      type="text"
                      id="aum"
                      name="aum"
                      onChange={handleChange}
                      value={formData.aum}
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="businessMix">
                      Business Mix
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm focus:border-neon-orange-500 focus:outline-none focus:ring-1 focus:ring-neon-orange-500"
                      placeholder="Business Mix"
                      type="text"
                      id="businessMix"
                      name="businessMix"
                      onChange={handleChange}
                      value={formData.businessMix}
                    />
                  </div>
                </div>
              </>
            )}

            <div>
              <label className="sr-only" htmlFor="message">
                Message
              </label>

              <textarea
                className="w-full rounded-lg border-gray-200 p-3 text-sm focus:border-neon-orange-500 focus:outline-none focus:ring-1 focus:ring-neon-orange-500"
                placeholder="Message"
                rows="8"
                id="message"
                name="message"
                onChange={handleChange}
                value={formData.message}
              ></textarea>
            </div>

            <div className="mt-4 w-full">
              {!isSending && (
                <button className="w-full rounded-lg bg-gradient-to-r from-neon-orange-500 to-neon-orange-600 px-4 py-3 font-bold text-seabreeze-500 hover:bg-neon-orange-600">
                  Send
                </button>
              )}
              {isSending && (
                <button
                  type="button"
                  class=" flex w-full items-center justify-center gap-2 rounded-lg bg-neon-orange-400 px-4 py-3 font-bold text-seabreeze-400"
                  disabled
                >
                  <div
                    class="border-current inline-block h-6 w-6 animate-spin rounded-full border-[3px] border-t-transparent"
                    role="status"
                    aria-label="loading"
                  >
                    <span class="sr-only">Sending Email...</span>
                  </div>
                  Sending Email
                </button>
              )}
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default ContactForm;
