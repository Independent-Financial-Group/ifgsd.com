import React, { useEffect, useState } from "react";

import Head from "next/head";
import Link from "next/link";

import Layout from "components/App/Layout/Layout";
import PageHeader from "components/App/InternalPages/PageHeader/PageHeader";
import ContentContainer from "components/App/ContentContainer/ContentContainer";

import { DocumentArrowUpIcon, DocumentIcon } from "@heroicons/react/24/solid";

const StorySubmissionForm = () => {
  const states = [
    "AL",
    "AK",
    "AZ",
    "AR",
    "CA",
    "CO",
    "CT",
    "DE",
    "FL",
    "GA",
    "HI",
    "ID",
    "IL",
    "IN",
    "IA",
    "KS",
    "KY",
    "LA",
    "ME",
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
    "OH",
    "OK",
    "OR",
    "PA",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VT",
    "VA",
    "WA",
    "WV",
    "WI",
    "WY",
  ];

  const initialFormState = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    details: "",
    category: "",
    link: "",
    files: [],
  };

  const [formData, setFormData] = useState(initialFormState);
  const [emailSending, setEmailSending] = useState(false);

  const handleChange = (e) => {
    const key = e.target.name;

    setFormData((prevState) => ({ ...prevState, [key]: e.target.value }));
  };

  const handleFileUpload = (e) => {
    const files = e.target.files;

    setFormData((prevState) => ({ ...prevState, files: [...files] }));
  };

  const toBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = function (event) {
        // Convert the file to Base64
        const selectedFileBase64 = event.target.result.split(",")[1];

        resolve({ ...file, base64File: selectedFileBase64 });
      };

      reader.readAsDataURL(file);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const convertedFiles = await formData.files.forEach(async (file) => {
      const convertedFiles = [];

      const convertedFile = await toBase64(file);

      convertedFiles.push(convertedFile);
    });

    console.log(convertedFiles);

    // setFormData((prevState) => ({
    //   ...prevState,
    //   convertedFiles: convertedFiles,
    // }));

    // console.log(formData);

    // const res = await fetch("/api/public/submit-story", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     ...formData,
    //     convertedFiles: convertedFiles,
    //   }),
    // });

    // if (res.status == 200) {
    //   setEmailIsSending(false);
    // }
  };

  useEffect(() => console.log(formData), [formData]);

  return (
    <>
      <h3 className="mb-5 text-5xl font-bold text-hazard-blue-500">
        Submit your Story
      </h3>
      <form
        className="group rounded-xl bg-white px-2 py-4 shadow lg:grid lg:grid-cols-6 lg:gap-5"
        onSubmit={handleSubmit}
      >
        <div className="col-span-3 space-y-1">
          <label htmlFor="firstName" className="block text-xs">
            First Name<sup className="font-bold text-red-500">*</sup>
          </label>
          <input
            name="firstName"
            className="w-full rounded border-gray-300"
            type="text"
            required
            onChange={handleChange}
          />
        </div>
        <div className="col-span-3 space-y-1">
          <label htmlFor="lastName" className="block text-xs">
            Last Name<sup className="font-bold text-red-500">*</sup>
          </label>
          <input
            name="lastName"
            className="w-full rounded border-gray-300"
            type="text"
            required
            onChange={handleChange}
          />
        </div>
        <div className="col-span-3 space-y-1">
          <label htmlFor="email" className="block text-xs">
            Email<sup className="font-bold text-red-500">*</sup>
          </label>
          <input
            name="email"
            className="w-full rounded border-gray-300"
            type="email"
            required
            onChange={handleChange}
          />
        </div>
        <div className="col-span-3 space-y-1">
          <label htmlFor="phone" className="block text-xs">
            Phone<sup className="font-bold text-red-500">*</sup>
          </label>
          <input
            name="phone"
            className="w-full rounded border-gray-300"
            type="tel"
            required
            onChange={handleChange}
          />
        </div>
        <div className="col-span-6 space-y-2 lg:grid lg:grid-cols-3 lg:gap-5">
          <div className="col-span-3 space-y-1">
            <label htmlFor="address" className="block text-xs">
              Address<sup className="font-bold text-red-500">*</sup>
            </label>
            <input
              name="address"
              className="w-full rounded border-gray-300"
              type="text"
              required
              onChange={handleChange}
            />
          </div>
          <div className="space-y-1">
            <input
              name="city"
              className="w-full rounded border-gray-300"
              type="text"
              required
              onChange={handleChange}
            />
            <label htmlFor="city" className="block text-xs">
              City<sup className="font-bold text-red-500">*</sup>
            </label>
          </div>
          <div className="space-y-1">
            <select
              name="state"
              className="w-full rounded border-gray-300"
              required
              onChange={handleChange}
            >
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
            <label htmlFor="state" className="block text-xs">
              State<sup className="font-bold text-red-500">*</sup>
            </label>
          </div>
          <div className="space-y-1">
            <input
              name="zip"
              className="w-full rounded border-gray-300"
              type="text"
              required
              onChange={handleChange}
            />
            <label htmlFor="zip" className="block text-xs">
              Zip Code<sup className="font-bold text-red-500">*</sup>
            </label>
          </div>
        </div>
        <div className="col-span-full space-y-1">
          <label htmlFor="details" className="block text-xs">
            Tell Us More<sup className="font-bold text-red-500">*</sup>
          </label>
          <textarea
            name="details"
            className="w-full rounded border-gray-300 text-sm"
            required
            onChange={handleChange}
            rows={8}
          ></textarea>
        </div>
        <div className="col-span-3 space-y-1">
          <label htmlFor="category" className="block text-xs">
            Select a Category<sup className="font-bold text-red-500">*</sup>
          </label>
          <select
            name="category"
            className="w-full rounded border-gray-300"
            required
            onChange={handleChange}
          >
            <option value="New Hire">New Hire</option>
            <option value="License & Designations">
              New License or Designation
            </option>
            <option value="award">Award</option>
            <option value="media mention">Media Mention</option>
            <option value="social responsibility">Social Responsibility</option>
            <option value="mergers or acquisitions">
              Mergers or Acquisitions
            </option>
            <option value="team outings or events">
              Team Outings or Events
            </option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="col-span-3 space-y-1">
          <label htmlFor="link" className="block text-xs">
            Link
          </label>
          <input
            name="link"
            type="url"
            className="w-full rounded border-gray-300"
            onChange={handleChange}
          />
        </div>
        <div className="col-span-full">
          <label
            htmlFor="files"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Share Images or Files
          </label>
          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div className="text-center">
              <DocumentArrowUpIcon
                aria-hidden="true"
                className="mx-auto h-12 w-12 text-gray-300"
              />
              <div className="mt-4 flex text-sm leading-6 text-gray-600">
                <label
                  htmlFor="files"
                  className="relative w-full cursor-pointer rounded-md bg-white font-semibold text-neon-orange-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-neon-orange-600 focus-within:ring-offset-2 hover:text-neon-orange-500"
                >
                  <span className="">Click to Upload Files</span>
                  {formData.files.length > 0 && (
                    <ul className="flex flex-col items-center">
                      {formData.files.map((file) => (
                        <li className="text-ifg-turqoise-500 flex items-center gap-1">
                          <DocumentIcon className="h-4 w-4" />
                          <p>{file.name}</p>
                        </li>
                      ))}
                    </ul>
                  )}
                  <input
                    id="files"
                    name="files"
                    type="file"
                    className="sr-only"
                    multiple
                    onChange={handleFileUpload}
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <input
              type="submit"
              className="w-full rounded bg-gray-500 py-4 font-bold text-white group-valid:bg-green-500 group-valid:hover:cursor-pointer"
            />
          </div>
        </div>
      </form>
    </>
  );
};

const Page = () => {
  return (
    <>
      <Head>
        <title>Submit Your Story | IFG Rep Portal</title>
      </Head>
      <PageHeader pageName="Story Submission" breadCrumb="Resources" />
      <Layout>
        <ContentContainer>
          <section className="space-y-6 lg:col-span-6">
            <h3 className="text-ifg-turqoise-500 text-5xl font-bold">
              Share Your Story
            </h3>
            <p className="leading-7">
              Share your stories, experiences, insights, or achievements with
              your fellow advisors for a chance to be featured in one of our
              future IFG Connect newsletter!
            </p>
          </section>
          <section className="col-span-6 grid grid-cols-2 grid-rows-2 items-stretch justify-stretch gap-x-5 gap-y-5">
            <img
              src="https://images.ctfassets.net/9lvru9ro1ti1/6zkcuiK6qHkpjxvlVCgW0o/d424fc4c5716f7bd6e8de0cd3a9099b7/ifg_NYSE_visit.jpeg"
              className="h-full w-full rounded-xl object-cover"
            />
            <img
              src="https://images.ctfassets.net/9lvru9ro1ti1/5tyiA8LOCFvlJPcKLSYkiw/c813ee3bb1ad8796a10c6421f966efe4/chris_vizzi_advisor_of_the_year_2024.JPG"
              className="row-span-3 rounded-xl object-cover"
            />
            <img
              src="https://images.ctfassets.net/9lvru9ro1ti1/5Tf4wdbghBPVdbwuO8gTvS/3cf9a710bff73c34233405a6d78d6dbb/gold_swing_clinic_august_2023_RACs.webp"
              className="row-span-2 rounded-xl object-cover"
            />
          </section>
          <section className="col-span-full mt-10">
            <h3 className="mb-10 text-center text-5xl font-bold text-neon-orange-500">
              Featured Stories
            </h3>
            <ul className="lg:grid lg:grid-cols-3 lg:gap-5">
              <li className="bg-white shadow">
                <img
                  className="aspect-square h-[300px] w-full rounded-t object-cover"
                  src="https://images.ctfassets.net/9lvru9ro1ti1/5tyiA8LOCFvlJPcKLSYkiw/c813ee3bb1ad8796a10c6421f966efe4/chris_vizzi_advisor_of_the_year_2024.JPG"
                />
                <div className="space-y-4 px-2 py-4">
                  <div>
                    <h4 className="font-bold">
                      Chris Vizzi Wins Advisor of the Year
                    </h4>
                    <p className="text-xs text-gray-500">June 24th, 2024</p>
                  </div>
                  <p className="text-sm leading-6">
                    Chris's dedication to excellence in serving his clients is
                    truly inspiring, and he is an incredibly accomplished
                    philanthropist. This recognition from Investment News is a
                    testament to his hard work, expertise, and commitment to the
                    profession. Chris, we are incredibly proud to have you as
                    part of the IFG family.
                  </p>
                </div>
              </li>
              <li className="bg-white shadow">
                <img
                  className="aspect-square h-[300px] w-full rounded-t object-cover"
                  src="https://images.ctfassets.net/9lvru9ro1ti1/5tyiA8LOCFvlJPcKLSYkiw/c813ee3bb1ad8796a10c6421f966efe4/chris_vizzi_advisor_of_the_year_2024.JPG"
                />
                <div className="space-y-4 px-2 py-4">
                  <div>
                    <h4 className="font-bold">
                      Chris Vizzi Wins Advisor of the Year
                    </h4>
                    <p className="text-xs text-gray-500">June 24th, 2024</p>
                  </div>
                  <p className="text-sm leading-6">
                    Chris's dedication to excellence in serving his clients is
                    truly inspiring, and he is an incredibly accomplished
                    philanthropist. This recognition from Investment News is a
                    testament to his hard work, expertise, and commitment to the
                    profession. Chris, we are incredibly proud to have you as
                    part of the IFG family.
                  </p>
                </div>
              </li>
              <li className="bg-white shadow">
                <img
                  className="aspect-square h-[300px] w-full rounded-t object-cover"
                  src="https://images.ctfassets.net/9lvru9ro1ti1/5tyiA8LOCFvlJPcKLSYkiw/c813ee3bb1ad8796a10c6421f966efe4/chris_vizzi_advisor_of_the_year_2024.JPG"
                />
                <div className="space-y-4 px-2 py-4">
                  <div>
                    <h4 className="font-bold">
                      Chris Vizzi Wins Advisor of the Year
                    </h4>
                    <p className="text-xs text-gray-500">June 24th, 2024</p>
                  </div>
                  <p className="text-sm leading-6">
                    Chris's dedication to excellence in serving his clients is
                    truly inspiring, and he is an incredibly accomplished
                    philanthropist. This recognition from Investment News is a
                    testament to his hard work, expertise, and commitment to the
                    profession. Chris, we are incredibly proud to have you as
                    part of the IFG family.
                  </p>
                </div>
              </li>
            </ul>
          </section>
          <section className="col-span-full my-32">
            <StorySubmissionForm />
          </section>
        </ContentContainer>
      </Layout>
    </>
  );
};

export default Page;
