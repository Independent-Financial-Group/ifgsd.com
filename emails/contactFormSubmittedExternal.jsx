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
} from "@react-email/components";

export default function ContactFormSubmittedExternal({
  formData = { name: "user" },
}) {
  return (
    <Html>
      <Head />
      <Preview>We have your email!</Preview>
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
                  Thanks for contacting us!
                </Heading>
              </Row>
            </Section>
            <Section className="px-4">
              <Text style={text}>Hi {formData.name},</Text>
              <Text style={text}>
                Thank you for filling out the contact form on our website! We
                have received your email and a member from our team will reach
                out soon.
              </Text>
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
