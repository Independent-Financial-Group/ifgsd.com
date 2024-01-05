import { render } from "@react-email/render";
import sendgrid from "@sendgrid/mail";
import ContactFormSubmittedInternal from "../../../emails/contactFormSubmittedInternal";
import ContactFormSubmittedExternal from "../../../emails/contactFormSubmittedExternal";

export default async function (req, res) {
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

  sendgrid.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

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
  // sendgrid.send(sendOptionsInternal);
}
