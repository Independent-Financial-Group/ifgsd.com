import { Button } from "@react-email/button";
import { Container } from "@react-email/container";
import { Head } from "@react-email/head";
import { Html } from "@react-email/html";
import { Preview } from "@react-email/preview";
import { Section } from "@react-email/section";
import { Text } from "@react-email/text";
import { Img } from "@react-email/img";
import { Heading } from "@react-email/heading";
import {Row} from "@react-email/row"

import logo from "../public/logo-full-color.png"

export default function ContactFormSubmittedInternal({formData}) {
  const escapedHost = host.replace(/\./g, "&#8203;.");

  return (
    <Html>
      <Head />
      <Preview>{`Contact form submitted on ifgsd.com`}</Preview>
      <Section style={main}>
        <Container style={container}>
          <Section style={{ textAlign: "center" }}>
          <Row>
          <Img src="https://dev.ifgsd.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-full-color.294133a8.png&w=640&q=75" alt="IFG Logo" width="250" height="80" style={image}/>
          <Heading as="h1" style={h1}>The Contact Form on ifgsd.com has been submitted</Heading>
          </Row>
          <Row>
          <Text style={text}>
              Hello, the contact form on the ifgsd.com marketing site has been submitted. Please review the details below:
            </Text>
            <Text style={text}>
              Name: {formData.name}
            </Text>
            <Text style={text}>
              Email: {formData.email}
            </Text>
            <Text style={text}>
              Phone: {formData.phone}
            </Text>
            <Text style={text}>
              City: {formData.city}
            </Text>
            <Text style={text}>
              State: {formData.state}
            </Text>
            <Text style={text}>
              {formData.message}
            </Text>
          </Row>
          </Section>
        </Container>
      </Section>
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
  padding: "3px 6px"
};

const image = {
    margin: "auto"
}