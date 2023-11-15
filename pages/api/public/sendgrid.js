import { render } from "@react-email/render";
import sendgrid from "@sendgrid/mail";
import ContactFormConfirmationEmail from "../../../emails/contactFormConfirmationEmail";
import ContactFormSubmittedInternal from "../../../emails/contactFormSubmittedInternal";

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

  const externalEmailHtml = render(<ContactFormConfirmationEmail />);

  const internalEmailHtml = render(
    <ContactFormSubmittedInternal formData={req.body} />,
  );

  const sendOptionsInternal = {
    from: "noreply@ifgsd.com",
    to: "info@ifgsd.com",
    subject: "Contact form submitted on ifgsd.com",
    html: internalEmailHtml,
  };

  const sendOptionsExternal = {
    from: "noreply@ifgsd.com",
    to: to,
    subject: "We have your email",
    html: externalEmailHtml,
  };

  sendgrid.send(sendOptionsExternal);
  sendgrid.send(sendOptionsInternal);
}
