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

export default function ContactFormSubmittedInternal({ cart }) {
  return (
    <Html>
      <Head />
      <Preview>New Retail Shop Order</Preview>
      <Tailwind>
        <Section style={{ backgroundColor: "#F3F3F3" }}>
          <Container
            style={{ backgroundColor: "#ffffff" }}
            className="my-4 rounded-lg shadow-2xl"
          >
            <Section className="rounded-t-lg">
              <Section
                className="rounded-t-lg px-2 py-4"
                style={{ backgroundColor: "#F47E50" }}
              >
                <Row>
                  <Img
                    src="https://images.ctfassets.net/9lvru9ro1ti1/5eDCWWALWZNRJcPH1f652F/5f75f3f20ca47fb399ec247d0cd19f80/IFG-LOGO-FULL-WHITE.png"
                    alt="IFG Logo"
                    style={image}
                    className="w-1/4"
                  />
                </Row>
              </Section>
              <Section className="pt-8" style={{ backgroundColor: "#F8F8F8" }}>
                <Row>
                  <Img
                    src="https://images.ctfassets.net/9lvru9ro1ti1/BOYkf1QhW73e0ZKPzGXxo/970563d2763511cbcf7fbe2ee23f439c/Artboard_80.png"
                    style={image}
                    className="w-1/2"
                  />
                  <Heading
                    as="h1"
                    style={h1}
                    className="mt-0 font-bold uppercase"
                  >
                    New Order Placed
                  </Heading>
                </Row>
              </Section>
            </Section>
            <Section className="pt-10">
              <Container className="px-10">
                <Row>
                  <Text>Customer Information:</Text>
                  <Text>
                    <strong>Name</strong>: {cart.fullName}
                  </Text>
                  <Text>
                    <strong>Email</strong>: {cart.email}
                  </Text>
                  <Text>
                    <strong>Shipping Address</strong>: {cart.shippingAddress}
                  </Text>
                </Row>
                <Hr />
                <Row>
                  <Text>Order Details:</Text>
                </Row>
                {cart.items.map((item) => (
                  <Row className="mt-5 first:mt-0">
                    <Column>
                      <Img
                        src={`https:${item.fields.mainProductImage.fields.file.url}`}
                        className="h-24 w-24"
                      />
                    </Column>
                    <Column>
                      <Text className="text-left">
                        {item.quantity} x {item.fields.productName}
                      </Text>
                    </Column>
                  </Row>
                ))}
                <Hr />
                <Row>
                  <Text className="text-right">
                    Subtotal: <strong>${cart.subtotal}</strong>
                  </Text>
                </Row>
              </Container>
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
