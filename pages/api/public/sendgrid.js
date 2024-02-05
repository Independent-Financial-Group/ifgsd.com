import { render } from "@react-email/render";
import sendgrid from "@sendgrid/mail";
import ContactFormSubmittedInternal from "../../../emails/contactFormSubmittedInternal";
import ContactFormSubmittedExternal from "../../../emails/contactFormSubmittedExternal";
import AdvisorDirectoryContactForm from "../../../emails/advisorDirectoryContactForm";
import PodcastQuestionForm from "../../../emails/podcastQuestionForm";

export default async function (req, res) {
  sendgrid.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);
  const { formName } = req.body;

  if (formName == "advisor lookup") {
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
  } else if (formName == "Podcast Question") {
    const { firstName, lastName, email, question } = req.body;

    const internalEmailHtml = render(
      <PodcastQuestionForm formData={req.body} />,
    );

    const sendOptionsInternal = {
      from: "noreply@ifgsd.com",
      to: "questions@ifgsd.com",
      subject: `New Podcast Question submitted by ${firstName} ${lastName}`,
      html: internalEmailHtml,
    };

    try {
      await sendgrid.send(sendOptionsInternal);
      res.status(200).send(`Message Sent Successfully`);
    } catch (error) {
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
