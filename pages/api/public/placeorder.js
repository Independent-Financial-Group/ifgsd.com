import { render } from "@react-email/render";
import sendgrid from "@sendgrid/mail";

import OrderFormSubmission from "/emails/orderFormSubmission.jsx";

export default async function (req, res) {
  sendgrid.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);
  const { formName } = req.body;

  const internalEmail = render(<OrderFormSubmission cart={req.body} />);

  const sendOptionsInternal = {
    from: "noreply@ifgsd.com",
    to: "CorpComm@ifgsd.com",
    subject: `New Retail Shop Order`,
    html: internalEmail,
  };

  try {
    await sendgrid.send(sendOptionsInternal);
    res.status(200).send(`Message Sent Successfully`);
  } catch (error) {
    res.status(400).send(`ERROR: ${error}`);
  }
}
