import {
  Button,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Text,
  Img,
  Heading,
  Row,
  Tailwind,
  Hr,
  Column,
} from "@react-email/components";

export default function StorySubmissionInternal({
  formData = {
    firstName: "N/A",
    lastName: "N/A",
    email: "N/A",
    phone: "N/A",
    address: "N/A",
    city: "N/A",
    state: "N/A",
    zip: "N/A",
    details: "N/A",
    category: "N/A",
    link: "N/A",
    files: [],
    convertedFiles: [],
  },
}) {
  return (
    <Html>
      <Head />
      <Preview>A new story has been submitted by an IFG rep</Preview>
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
                  src="https://images.ctfassets.net/9lvru9ro1ti1/5PyKI2IXxQLESFyzvSl0BL/d94d9e5be2009f854f15f2c86e18117f/email-sent-internal-illustration.png"
                  style={image}
                  className="w-1/3"
                />
                <Heading as="h1" style={h1} className="text-white">
                  New Email Submitted
                </Heading>
              </Row>
            </Section>
            <Section className="px-4">
              <Row>
                <Text style={text}>Hello,</Text>
                <Text style={text}>
                  Hello, a new story has been submitted by {formData.firstName}{" "}
                  {formData.lastName}. Below are the details.
                </Text>
              </Row>
              <Hr />
              <Row>
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
                  <span className="font-semibold">Address</span>:{" "}
                  {formData.address}, {formData.city}, {formData.state}{" "}
                  {formData.zip}
                </Text>
                <Text style={text}>
                  <span className="font-semibold">Category</span>:{" "}
                  {formData.category}
                </Text>
                <Text style={text}>
                  <span className="font-semibold">Link</span>: {formData.link}
                </Text>
                <Text style={text} className="bg-gray-100 p-4">
                  <span className="font-semibold">Details</span>: <br />
                  <span className="italic">{formData.details}</span>
                </Text>
              </Row>
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
