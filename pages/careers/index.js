import React, { useEffect, useState } from "react";

// IMPORT NEXT
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

// IMPORT COMPONENTS
import JobBoard from "../../components/JobBoard/JobBoard";
import PublicLayout from "../../components/PublicLayout/PublicLayout";
import Container from "../../components/Container/Container";
import PageHeader from "../../components/PageHeader/PageHeader";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Button from "../../components/Button/Button";

// IMPORT ASSETS
import highlight from "../../public/_global-graphics/highlight.png";
import highlightWhite from "../../public/_global-graphics/highlight-white.png";
import highlightBlue from "../../public/_global-graphics/highlight-blue.png";
import section1Image from "../../public/_careers/images/section1.png";
import section2Image from "../../public/_careers/images/section2.webp";
import section3Image from "../../public/_careers/images/section3.png";
import checkmarkOrange from "../../public/_global-graphics/checkmark-orange.png";
import InternshipImage from "../../public/_careers/images/internship-image-compressed.webp";

import * as contentful from "../../utils/contentful";

// IMPORT HEADLESS UI COMPONENTS
import { Disclosure, Transition } from "@headlessui/react";
import {
  ChevronUpIcon,
  MapPinIcon,
  CalendarIcon,
} from "@heroicons/react/20/solid";

// IMPORT FRAMER
import { motion } from "framer-motion";

import { PhotoIcon, DocumentIcon } from "@heroicons/react/24/outline";

import ReCAPTCHA from "react-google-recaptcha";

export const getServerSideProps = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      authorization: `Basic ${process.env.NEXT_PUBLIC_BAMBOOHR_KEY_MERCEDES}`,
    },
  };

  const res = await fetch(
    "https://api.bamboohr.com/api/gateway.php/ifgsd/v1/applicant_tracking/jobs?statusGroups=Open&sortBy=department",
    options,
  );
  const data = await res.json();

  const client = contentful.client;

  const newHires = await client.getEntries({
    content_type: "companyDirectory",
    "fields.newHire": true,
    order: "fields.lastName",
  });

  return { props: { data, newHires: [...newHires.items] } };
};

const index = ({ data, newHires }) => {
  const recaptchaRef = React.createRef();

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.4,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  const [isSending, setIsSending] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const initialFormState = {
    formName: "internship program form",
    firstName: "",
    lastName: "",
    email: "",
    resumeFile: "",
    coverLetterFile: "",
    base64Resume: null,
    base64CoverLetter: null,
  };
  const [formData, setFormData] = useState(initialFormState);

  const toBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = function (event) {
        const selectedFile = file;

        // Convert the file to Base64
        const selectedFileBase64 = event.target.result.split(",")[1];

        resolve(selectedFileBase64);

        console.log(selectedFileBase64);
      };

      reader.readAsDataURL(file);
    });
  };

  const handleChange = (e) => {
    const inputName = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [inputName]: e.target.value,
    }));
  };

  const handleFileUpload = async (e) => {
    const inputName = e.target.name;

    const convertedFile = await toBase64(e.target.files[0]);

    if (inputName == "resumeFile") {
      setFormData((prevState) => ({
        ...prevState,
        [inputName]: e.target.files[0],
        base64Resume: convertedFile,
      }));
    } else if (inputName == "coverLetterFile") {
      setFormData((prevState) => ({
        ...prevState,
        [inputName]: e.target.files[0],
        base64CoverLetter: convertedFile,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    const token = await recaptchaRef.current.executeAsync();

    const res = await fetch("/api/public/sendgrid", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.status == 200) {
      console.log(res.statu);
      setFormData(initialFormState);
      setEmailSent(true);
    }
  };

  useEffect(() => console.log(formData), [formData]);

  const jobsGroupedByDepartment =
    data &&
    data.reduce((acc, currVal) => {
      let groupKey = currVal.department.label;

      if (!acc[groupKey]) {
        acc[groupKey] = { departmentLabel: groupKey, data: [] };
      }

      acc[groupKey].data.push(currVal);

      return acc;
    }, {});

  const options = { year: "numeric", month: "long", day: "numeric" };

  return (
    <>
      <Head>
        <title>Work at IFG | Independent Financial Group San Diego</title>
        <meta
          name="description"
          content="Find your next career at the IFG Home Office."
        />
        <meta name="robots" content="follow, index" />
      </Head>
      <PublicLayout>
        <PageHeader bgPath={"bg-[url(/_careers/images/hero.webp)] bg-top"}>
          <p className="flex items-center gap-2 text-3xl font-bold text-seabreeze-500">
            <Image src={highlight} alt="decorative heading highlight" />
            Endless Opportunities
          </p>
          <h1 className="text-5xl font-medium text-seabreeze-500">
            Find Your Next Career with IFG
          </h1>
        </PageHeader>
        <section className="my-10 lg:my-32 ">
          <Container>
            <Breadcrumb />
            <div className="lg:grid lg:grid-cols-2 lg:gap-5">
              <div className="mb-10 lg:mb-0">
                <h2 className="flex items-center gap-2 text-3xl font-bold text-neon-orange-500">
                  <Image
                    src={highlightBlue}
                    alt="decorative heading highlight"
                  />
                  Perks & Benefits
                </h2>
                <p className="my-5 text-xl">
                  IFG offers a competitive benefits package with:
                </p>
                <motion.ul
                  variants={container}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex flex-col justify-center divide-y-2 divide-neon-orange-500 text-xl [&>li]:py-5 [&_li>img]:w-6"
                >
                  <motion.li
                    variants={item}
                    className="flex items-center gap-2"
                    viewport={{ once: true, margin: "-300px" }}
                  >
                    <Image src={checkmarkOrange} alt="orange checkmark" />
                    <p className="font-semibold text-hazard-blue-500">
                      Company Paid Medical, Dental, and Vision.
                    </p>
                  </motion.li>
                  <motion.li
                    variants={item}
                    className="flex items-center gap-2 "
                  >
                    <Image src={checkmarkOrange} alt="orange checkmark" />
                    <p className="font-semibold text-hazard-blue-500">
                      Paid time off (Including all stock market holidays).
                    </p>
                  </motion.li>
                  <motion.li
                    variants={item}
                    className="flex items-center gap-2 "
                  >
                    <Image src={checkmarkOrange} alt="orange checkmark" />
                    <p className="font-semibold text-hazard-blue-500">
                      401k Matching Program.
                    </p>
                  </motion.li>
                  <motion.li
                    variants={item}
                    className="flex items-center gap-2 "
                  >
                    <Image src={checkmarkOrange} alt="orange checkmark" />
                    <p className="font-semibold text-hazard-blue-500">
                      Professional Development Reimbursement Program.
                    </p>
                  </motion.li>
                  <motion.li
                    variants={item}
                    className="flex items-center gap-2 "
                  >
                    <Image src={checkmarkOrange} alt="orange checkmark" />
                    <p className="font-semibold text-hazard-blue-500">
                      Market-level Compensation Based on Experience.
                    </p>
                  </motion.li>
                  <motion.li
                    variants={item}
                    className="flex items-center gap-2 "
                  >
                    <Image src={checkmarkOrange} alt="orange checkmark" />
                    <p className="font-semibold text-hazard-blue-500">
                      Employee Events.
                    </p>
                  </motion.li>
                  <motion.li
                    variants={item}
                    className="flex items-center gap-2 "
                  >
                    <Image src={checkmarkOrange} alt="orange checkmark" />
                    <p className="font-semibold text-hazard-blue-500">
                      On-site Gym.
                    </p>
                  </motion.li>
                  <motion.li
                    variants={item}
                    className="flex items-center gap-2 "
                  >
                    <Image src={checkmarkOrange} alt="orange checkmark" />
                    <p className="font-semibold text-hazard-blue-500">
                      Employee Tenure Recognition.
                    </p>
                  </motion.li>
                </motion.ul>
              </div>
              <div>
                <Image
                  src={section3Image}
                  alt="ifg employees at company events"
                  className="mx-auto"
                />
              </div>
            </div>
          </Container>
        </section>
        <section className="my-20 bg-gradient-to-r from-hazard-blue-500 to-blue-wave-300 py-10 lg:my-32 lg:rounded-[40px]">
          <Container>
            <div className="lg:grid lg:grid-cols-2 lg:gap-5">
              <div className="mb-10 lg:mb-0">
                <Image
                  src={section2Image}
                  alt="Employees learning"
                  className="rounded-xl"
                />
              </div>
              <div className="lg:self-center">
                <h2 className="flex items-center gap-2 text-3xl font-bold text-seabreeze-500">
                  <Image
                    src={highlightWhite}
                    alt="decorative heading highlight"
                  />{" "}
                  Professional Development
                </h2>
                <p className="my-5 text-xl text-seabreeze-500">
                  Our team members are our most valuable resources. We are
                  committed to nurturing your potential by providing support
                  through a professional development reimbursement program,
                  comprehensive training, and mentorship initiatives.
                </p>
              </div>
            </div>
          </Container>
        </section>
        <section className="relative my-10 lg:my-32">
          <Container>
            <div className="rounded bg-white shadow">
              <div className="bg-[url('/_careers/images/wave-background.png')] bg-cover bg-bottom py-8 lg:grid lg:grid-cols-2 lg:gap-5">
                <div className="col-span-2">
                  <h2 className="text-center text-3xl font-bold uppercase text-neon-orange-500">
                    New Hire Spotlight
                  </h2>
                </div>
                <ul className="col-span-2 flex justify-around gap-5">
                  {newHires.map((newHire) => (
                    <li key={newHire.sys.id}>
                      {console.log(
                        JSON.stringify(newHire.fields.headshot, null, 3),
                      )}
                      <Image
                        src={`https:${newHire.fields.headshot.fields.file.url}`}
                        height={
                          newHire.fields.headshot.fields.file.details.image
                            .height
                        }
                        width={
                          newHire.fields.headshot.fields.file.details.image
                            .width
                        }
                        className="h-72 w-72 rounded-full"
                      />
                      <h3 className="text-center text-2xl font-bold text-hazard-blue-500">
                        {newHire.fields.fullName} {newHire.fields.lastName}
                      </h3>
                      <p className="text-center">{newHire.fields.title}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </section>
        <section className="relative my-10 lg:my-32">
          <Container>
            <div className="lg:grid lg:grid-cols-2 lg:gap-5">
              <div className="mb-10">
                <h2 className="flex items-center gap-2 text-3xl font-bold text-hazard-blue-500">
                  <Image src={highlight} alt="decorative heading highlight" />
                  Find Open Positions
                </h2>
                <p className="my-5 text-xl">
                  Explore our current job openings to discover exciting career
                  opportunities. Start your journey with us by browsing
                  available positions that match your skills and interests.
                  Whether you're seeking a new challenge or looking to join a
                  dynamic team, we have a variety of roles waiting for talented
                  individuals like you.
                </p>
                {data && (
                  <>
                    <h3 className="mt-6 text-2xl font-semibold text-neon-orange-500">
                      Browse Openings by Department
                    </h3>
                    <motion.ul
                      initial={{ y: 100, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true, margin: "-300px" }}
                      transition={{ duration: 0.5 }}
                      className="my-3 space-y-6 rounded-lg bg-white px-4 py-2 shadow"
                    >
                      {Object.keys(jobsGroupedByDepartment).map((objectKey) => {
                        return (
                          <li key={objectKey}>
                            <h4 className="font-bold text-hazard-blue-300">
                              {
                                jobsGroupedByDepartment[objectKey]
                                  .departmentLabel
                              }
                            </h4>
                            <ol>
                              {jobsGroupedByDepartment[objectKey].data.map(
                                (posting) => (
                                  <Disclosure as="li" key={posting.id}>
                                    {({ open }) => (
                                      <>
                                        <Disclosure.Button className="flex w-full justify-between rounded-lg bg-hazard-blue-300 px-4 py-2 font-bold text-white">
                                          <span>{posting.title.label}</span>
                                          <ChevronUpIcon
                                            className={`${
                                              open ? "rotate-180 transform" : ""
                                            } h-5 w-5 `}
                                          />
                                        </Disclosure.Button>
                                        <Transition
                                          enter="transition duration-100 ease-out"
                                          enterFrom="transform scale-95 opacity-0"
                                          enterTo="transform scale-100 opacity-100"
                                          leave="transition duration-75 ease-out"
                                          leaveFrom="transform scale-100 opacity-100"
                                          leaveTo="transform scale-95 opacity-0"
                                        >
                                          <Disclosure.Panel className="px-4 py-2">
                                            <div>
                                              <div className="flex justify-between">
                                                <div>
                                                  <p className="flex items-center gap-2">
                                                    <CalendarIcon className="h-5 w-5 text-neon-orange-500" />
                                                    {new Date(
                                                      posting.postedDate,
                                                    ).toLocaleString(
                                                      "en-US",
                                                      options,
                                                    )}
                                                  </p>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                  <MapPinIcon className="h-5 w-5 text-neon-orange-500" />
                                                  <span>
                                                    {posting.location.label}
                                                  </span>
                                                </div>
                                              </div>
                                              <div className="mt-6">
                                                <a
                                                  href={posting.postingUrl}
                                                  target="_blank"
                                                  className="block rounded bg-neon-orange-500 px-4 py-2 text-center font-bold text-white"
                                                >
                                                  Learn More
                                                </a>
                                              </div>
                                            </div>
                                          </Disclosure.Panel>
                                        </Transition>
                                      </>
                                    )}
                                  </Disclosure>
                                ),
                              )}
                            </ol>
                          </li>
                        );
                      })}
                    </motion.ul>
                  </>
                )}

                {!data && (
                  <div className="mt-6 flex min-h-40 items-center justify-center rounded-lg bg-white px-4 py-2 shadow">
                    <p className="text-xl font-bold text-gray-500">
                      No Current Open Positions
                    </p>
                  </div>
                )}
              </div>
              <Image
                src={section1Image}
                alt="Employees and Founders at different IFG events"
                className="sticky top-11 self-baseline"
              />
            </div>
          </Container>
        </section>
        <section className="relative my-10 bg-blue-wave-500 py-12 lg:my-32">
          <Container>
            <div className="lg:grid lg:grid-cols-2 lg:gap-5">
              <div className="space-y-6 text-blue-wave-0">
                <h2 className="gap-2 text-3xl font-bold">Internship Program</h2>
                <p>
                  Are you looking for short-term work experience, to get
                  entry-level exposure to the financial industry? This may be
                  for you.
                </p>
                <p>
                  Duties must be performed in office. The internship will have a
                  defined beginning and end date, job description with desired
                  qualifications.
                </p>
                <p>
                  If interested, please submit a cover letter and resume and
                  someone from the team will be in touch.
                </p>
                <div>
                  <form
                    className="group rounded bg-white px-2 py-4 text-dunkel-blue-900 shadow lg:grid lg:grid-cols-2 lg:gap-5"
                    onSubmit={handleSubmit}
                  >
                    {!emailSent ? (
                      <>
                        <div className="sm:col-span-1">
                          <label
                            htmlFor="firstName"
                            className="block text-sm font-medium leading-6"
                          >
                            First name<sup className="text-red-500">*</sup>
                          </label>
                          <div className="mt-2">
                            <input
                              id="firstName"
                              name="firstName"
                              type="text"
                              className="py-1.5shadow-sm block w-full rounded-md border-0 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-neon-orange-500 sm:text-sm sm:leading-6"
                              required
                              onChange={handleChange}
                              value={formData.firstName}
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-1">
                          <label
                            htmlFor="lastName"
                            className="block text-sm font-medium leading-6"
                          >
                            Last name<sup className="text-red-500">*</sup>
                          </label>
                          <div className="mt-2">
                            <input
                              id="lastName"
                              name="lastName"
                              type="text"
                              className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-neon-orange-500 sm:text-sm sm:leading-6"
                              required
                              onChange={handleChange}
                              value={formData.lastName}
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-2">
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium leading-6"
                          >
                            Email address
                            <sup className="text-red-500">*</sup>
                          </label>
                          <div className="mt-2">
                            <input
                              id="email"
                              name="email"
                              type="email"
                              autoComplete="email"
                              className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-neon-orange-500 sm:text-sm sm:leading-6"
                              required
                              onChange={handleChange}
                              value={formData.email}
                            />
                          </div>
                        </div>
                        <div className="col-span-1 rounded">
                          <label
                            htmlFor="cover-letter-upload"
                            className="block text-sm font-medium leading-6"
                          >
                            Cover Letter<sup className="text-red-500">*</sup>
                          </label>
                          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                            <div className="text-center">
                              <DocumentIcon
                                aria-hidden="true"
                                className="mx-auto h-12 w-12 text-gray-300"
                              />
                              <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                <label
                                  htmlFor="coverLetterFile"
                                  className="relative cursor-pointer rounded-md bg-white font-semibold text-neon-orange-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-neon-orange-600 focus-within:ring-offset-2 hover:text-neon-orange-500"
                                >
                                  {formData.coverLetterFile && (
                                    <>
                                      <span>
                                        {formData.coverLetterFile.name}
                                      </span>
                                    </>
                                  )}
                                  {!formData.coverLetterFile && (
                                    <span>Upload Cover Letter</span>
                                  )}
                                  <input
                                    id="coverLetterFile"
                                    name="coverLetterFile"
                                    type="file"
                                    className="sr-only"
                                    accept=".pdf"
                                    onChange={handleFileUpload}
                                  />
                                </label>
                              </div>
                              <p className="text-xs leading-5 text-gray-600">
                                PDF up to 10MB
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-span-1 rounded">
                          <label
                            htmlFor="resumeFile"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Resume<sup className="text-red-500">*</sup>
                          </label>
                          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                            <div className="text-center">
                              <DocumentIcon
                                aria-hidden="true"
                                className="mx-auto h-12 w-12 text-gray-300"
                              />
                              <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                <label
                                  htmlFor="resumeFile"
                                  className="relative cursor-pointer rounded-md bg-white font-semibold text-neon-orange-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-neon-orange-600 focus-within:ring-offset-2 hover:text-neon-orange-500"
                                >
                                  {formData.resumeFile && (
                                    <>
                                      <span>{formData.resumeFile.name}</span>
                                    </>
                                  )}
                                  {!formData.resumeFile && (
                                    <span>Upload Resume</span>
                                  )}
                                  <input
                                    id="resumeFile"
                                    name="resumeFile"
                                    type="file"
                                    className="sr-only"
                                    accept=".pdf"
                                    required
                                    onChange={handleFileUpload}
                                  />
                                </label>
                              </div>
                              <p className="text-xs leading-5 text-gray-600">
                                PDF up to 10MB
                              </p>
                            </div>
                          </div>
                        </div>
                        <input
                          type="submit"
                          className={`${
                            isSending
                              ? "bg-gray-500"
                              : "bg-neon-orange-500 hover:cursor-pointer"
                          } col-span-full rounded px-1 py-2 text-white group-invalid:bg-gray-300`}
                        />
                      </>
                    ) : (
                      <div className="col-span-full">
                        <p className="mx-auto text-center font-bold text-gray-500">
                          Application Submitted!
                        </p>
                        <p>
                          Thank you for expressing your interest to internship
                          at IFG! If we have an opportunity available we will
                          reach out to you for further instructions.
                        </p>
                      </div>
                    )}
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      size="invisible"
                      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                    />
                  </form>
                </div>
              </div>
              <div className="sticky top-10 self-start">
                <Image
                  src={InternshipImage}
                  className="rounded-lg border-4 border-white shadow"
                />
              </div>
            </div>
          </Container>
        </section>
      </PublicLayout>
    </>
  );
};

export default index;
