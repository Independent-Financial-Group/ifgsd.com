import { render } from "@react-email/render";
import sendgrid from "@sendgrid/mail";

// import OrderFormSubmission from "/emails/orderFormSubmission.jsx";
import StorySubmissionInternal from "emails/storySubmissionEmail.jsx";

export default async function (req, res) {
  sendgrid.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

  const internalEmail = render(<StorySubmissionInternal formData={req.body} />);

  const sendOptionsInternal = {
    from: "noreply@ifgsd.com",
    to: "agarcia@ifgsd.com",
    subject: `New Story Submission from ${req.body.firstName} ${req.body.lastName}`,
    html: internalEmail,
  };

  try {
    await sendgrid.send(sendOptionsInternal);
    res.status(200).send(`Message Sent Successfully`);
  } catch (error) {
    res.status(400).send(`ERROR: ${error}`);
  }
}