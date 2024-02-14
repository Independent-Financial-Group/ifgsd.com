import { Button } from "@react-email/button";
import { Container } from "@react-email/container";
import { Head } from "@react-email/head";
import { Html } from "@react-email/html";
import { Preview } from "@react-email/preview";
import { Section } from "@react-email/section";
import { Text } from "@react-email/text";
import { Img } from "@react-email/img";
import { Heading } from "@react-email/heading";
import { Tailwind } from "@react-email/tailwind";
import { Row } from "@react-email/row";
import { Hr } from "@react-email/hr";

export default function referralProgramEmailExternal({
  formData = {
    firstName: "N/A",
    lastName: "N/A",
    phone: "N/A",
    email: "N/A",
    currentFirm: "N/A",
    reasonForSwitch:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras semper auctor neque vitae tempus quam pellentesque. Aliquam sem fringilla ut morbi.",
    notes:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, delectus?",
    advisorFirstName: "N/A",
    advisorLastName: "N/A",
    advisorEmail: "N/A",
  },
}) {
  return (
    <Html>
      <Head />
      <Preview>Thanks for your referral!</Preview>
      <Tailwind>
        <Section style={{ backgroundColor: "#F3F3F3" }}>
          <Container
            style={{ backgroundColor: "#ffffff" }}
            className="my-4 rounded-lg shadow-2xl"
          >
            <Section
              style={{ backgroundColor: "#F47E50" }}
              className="rounded-t-lg !bg-neon-orange-500 px-2 py-8"
            >
              <Row>
                <Img
                  src="https://images.ctfassets.net/9lvru9ro1ti1/5eDCWWALWZNRJcPH1f652F/5f75f3f20ca47fb399ec247d0cd19f80/IFG-LOGO-FULL-WHITE.png"
                  alt="IFG Logo"
                  style={image}
                  className="w-1/4"
                />
              </Row>
              <Row>
                <Img
                  src="https://images.ctfassets.net/9lvru9ro1ti1/3Q1eK8OEwne3BxXGwhZ6Eg/7ad8fccd1288cb7b602711be861baf56/email-sent-external-illustration.png"
                  alt="Email Sent Illustration"
                  style={image}
                  className="w-1/3"
                />
                <Heading as="h1" style={h1} className="text-white">
                  Thanks for your referral!
                </Heading>
              </Row>
            </Section>
            <Section className="px-4">
              <Text style={text}>Hi {formData.firstName},</Text>
              <Text style={text}>
                Thank you for submitting a referral! We have received your
                email. Please hold on to this email as your reference. Below are
                the details:
              </Text>
              <Hr />
              <Row>
                <Heading as="h2" className="text-base">
                  Prospect Information
                </Heading>
                <Text style={text}>
                  <span className="font-semibold">Name</span>:{" "}
                  {formData.firstName} {formData.lastName}
                </Text>
                <Text style={text}>
                  <span className="font-semibold">Email</span>: {formData.email}
                </Text>
                <Text style={text}>
                  <span className="font-semibold">Phone</span>: {formData.phone}
                </Text>
                <Text style={text}>
                  <span className="font-semibold">Current Firm</span>:{" "}
                  {formData.currentFirm}
                </Text>
                <Text style={text} className="bg-gray-100 p-4">
                  <span className="font-semibold">Reason for Switching BD</span>
                  : <br />
                  <span className="italic">{formData.reasonForSwitch}</span>
                </Text>
                <Text style={text} className="bg-gray-100 p-4">
                  <span className="font-semibold">Notes</span>: <br />
                  <span className="italic">{formData.notes}</span>
                </Text>
              </Row>
              <Hr />
              <Hr />
            </Section>
          </Container>
        </Section>
      </Tailwind>
    </Html>
  );
}

const main = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
};

const container = {
  border: "1px solid #eaeaea",
  borderRadius: "5px",
  margin: "40px auto",
  padding: "20px",
  width: "465px",
};

const h1 = {
  color: "#FF7F4E",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "32px",
  fontWeight: "bold",
  textAlign: "center",
  margin: "30px 0",
  padding: "0",
};

const text = {
  color: "#000",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  lineHeight: "24px",
};

const btn = {
  backgroundColor: "#000",
  borderRadius: "5px",
  color: "#fff",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "12px",
  fontWeight: 500,
  lineHeight: "50px",
  textDecoration: "none",
  textAlign: "center",
  padding: "3px 6px",
};

const image = {
  margin: "auto",
};
