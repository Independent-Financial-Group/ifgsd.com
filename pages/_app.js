import Head from "next/head";
import "../styles/globals.css";
import Script from "next/script";
import NextNProgress from "nextjs-progressbar";
import { ClerkProvider } from "@clerk/nextjs";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/logo.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NextNProgress color="#F47E50" />
      <ClerkProvider
        {...pageProps}
        appearance={{ elements: { footer: "hidden" } }}
      >
        <Component className="box-border" {...pageProps} />
        <Analytics />
      </ClerkProvider>
    </>
  );
}

export default MyApp;
