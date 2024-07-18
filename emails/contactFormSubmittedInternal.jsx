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

// import logo from "../public/logo-full-color.png";

export default function ContactFormSubmittedInternal({
  formData = {
    name: "N/A",
    email: "N/A",
    phone: "N/A",
    isFinancialAdvisor: false,
    company: "N/A",
    city: "N/A",
    state: "N/A",
    aum: "N/A",
    businessMix: "N/A",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras semper auctor neque vitae tempus quam pellentesque. Aliquam sem fringilla ut morbi.",
  },
}) {
  return (
    <Html>
      <Head />
      <Preview>
        The contact form on the website has been filled and submitted...
      </Preview>
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
                  The contact form on the website has been filled and submitted
                  with the following details:
                </Text>
              </Row>
              <Hr />
              <Row>
                <Text style={text}>
                  <span className="font-semibold">Name</span>: {formData.name}
                </Text>
                <Text style={text}>
                  <span className="font-semibold">Email</span>: {formData.email}
                </Text>
                <Text style={text}>
                  <span className="font-semibold">Phone</span>: {formData.phone}
                </Text>
                <Text style={text}>
                  <span className="font-semibold">Is Financial Advisor</span>:{" "}
                  {formData.isFinancialAdvisor ? "Yes" : "No"}
                </Text>
                {formData.isFinancialAdvisor && (
                  <>
                    <Text style={text}>
                      <span className="font-semibold">Company</span>:{" "}
                      {formData.company}
                    </Text>{" "}
                    <Text style={text}>
                      <span className="font-semibold">City</span>:{" "}
                      {formData.city}
                    </Text>
                    <Text style={text}>
                      <span className="font-semibold">State</span>:{" "}
                      {formData.state}
                    </Text>
                    <Text style={text}>
                      <span className="font-semibold">AUM</span>: {formData.aum}
                    </Text>
                    <Text style={text}>
                      <span className="font-semibold">Business Mix</span>:{" "}
                      {formData.businessMix}
                    </Text>
                  </>
                )}
                <Text style={text} className="bg-gray-100 p-4">
                  <span className="font-semibold">Message</span>: <br />
                  <span className="italic">{formData.message}</span>
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
