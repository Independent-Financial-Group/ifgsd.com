import { render } from "@react-email/render";
import sendgrid from "@sendgrid/mail";
import ContactFormSubmittedInternal from "../../../emails/contactFormSubmittedInternal";
import ContactFormSubmittedExternal from "../../../emails/contactFormSubmittedExternal";
import AdvisorDirectoryContactForm from "../../../emails/advisorDirectoryContactForm";
import InternshipProgramEmailInternal from "../../../emails/internshipProgramEmailInternal";

// const fs = require("fs");

export default async function (req, res) {
  sendgrid.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

  if (req.body.formName == "advisor lookup") {
    const { advisorName, userName, email, phone, message } = req.body;

    const advisorContactEmailHtml = render(
      <AdvisorDirectoryContactForm formData={req.body} />,
    );

    const sendOptionsInternal = {
      from: "noreply@ifgsd.com",
      to: "info@ifgsd.com",
      subject: `${userName} wants to get in contact with ${advisorName}`,
      html: advisorContactEmailHtml,
    };

    try {
      await sendgrid.send(sendOptionsInternal);
      res.status(200).send(`Message Sent Successfully`);
    } catch (error) {
      res.status(400).send(`ERROR: ${error}`);
    }
  } else if (req.body.formName == "internship program form") {
    const { firstName, lastName, email } = req.body;

    // const toBase64 = (file) =>
    //   new Promise((resolve, reject) => {
    //     const reader = new FileReader();
    //     reader.readAsDataURL(file);
    //     reader.onload = () => {
    //       let encoded = reader.result.toString().replace(/^data:(.*,)?/, "");
    //       if (encoded.length % 4 > 0) {
    //         encoded += "=".repeat(4 - (encoded.length % 4));
    //       }
    //       resolve(encoded);
    //     };
    //     reader.onerror = (error) => reject(error);
    //   });

    // const convertedResumeFile = await toBase64(req.body.resumeFile);
    // const convertedCoverLetterFile = await toBase64(req.body.coverLetterFile);

    // RENDER EMAIL GOING TO APPLICANT
    const externalEmailHtml = render();

    // RENDER EMAIL GOING TO HR
    const internalEmailHtml = render(
      <InternshipProgramEmailInternal formData={req.body} />,
    );

    // EMAIL OPTIONS FOR EMAIL GOING TO HR
    const sendOptionsInternal = {
      from: "noreply@ifgsd.com",
      to: "agarcia@ifgsd.com",
      subject: `${firstName} ${lastName} has applied for an Internship`,
      html: internalEmailHtml,
      attachments: [
        {
          content: req.body.base64Resume,
          filename: "Resume.pdf",
          type: "application/pdf",
          disposition: "attachment",
        },
        {
          content: req.body.base64CoverLetter,
          filename: "Cover Letter.pdf",
          type: "application/pdf",
          disposition: "attachment",
        },
      ],
    };

    try {
      await sendgrid.send(sendOptionsInternal);
      res.status(200).send(`Message Sent Successfully`);
    } catch (error) {
      console.log(error);
      res.status(400).send(`ERROR: ${error}`);
    }
  } else {
    const {
      name,
      email,
      phone,
      isFinancialAdvisor,
      company,
      city,
      state,
      message,
    } = req.body;

    const externalEmailHtml = render(
      <ContactFormSubmittedExternal formData={req.body} />,
    );

    const internalEmailHtml = render(
      <ContactFormSubmittedInternal formData={req.body} />,
    );

    const sendOptionsInternal = {
      from: "noreply@ifgsd.com",
      to: "info@ifgsd.com",
      subject: `Contact form submitted on ifgsd.com by ${name}`,
      html: internalEmailHtml,
    };

    const sendOptionsExternal = {
      from: "noreply@ifgsd.com",
      to: email,
      subject: `${name}, we have your email!`,
      html: externalEmailHtml,
    };

    try {
      await sendgrid.send(sendOptionsExternal);
      await sendgrid.send(sendOptionsInternal);
      res.status(200).send(`Message Sent Successfully`);
    } catch (error) {
      res.status(400).send(`ERROR: ${error}`);
    }
  }
}
