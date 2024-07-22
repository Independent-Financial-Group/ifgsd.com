import { render } from "@react-email/render";
import sendgrid from "@sendgrid/mail";

// import OrderFormSubmission from "/emails/orderFormSubmission.jsx";
import StorySubmissionInternal from "emails/storySubmissionEmail.jsx";

export default async function (req, res) {
  sendgrid.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

  const internalEmail = render(<StorySubmissionInternal formData={req.body} />);

  const attachments = req.body.convertedFiles.map((convertedFile) => {
    return {
      content: convertedFile.base64File,
      filename: convertedFile.fileMeta.fileName,
      type: convertedFile.fileMeta.fileType,
      disposition: "attachment",
      content_id: convertedFile.fileMeta.fileName,
    };
  });

  const sendOptionsInternal = {
    from: "noreply@ifgsd.com",
    to: "corpcomm@ifgsd.com",
    subject: `New Story Submission from ${req.body.firstName} ${req.body.lastName}`,
    html: internalEmail,
    attachments: attachments,
  };

  try {
    await sendgrid.send(sendOptionsInternal);
    res.status(200).send(`Message Sent Successfully`);
  } catch (error) {
    res.status(400).send(`ERROR: ${error}`);
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb", // Set desired value here
    },
  },
};
