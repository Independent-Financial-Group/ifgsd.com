import Head from "next/head";
import "../styles/globals.css";
import Script from "next/script";
import NextNProgress from "nextjs-progressbar";
import { SessionProvider } from "next-auth/react";

import { Analytics } from "@vercel/analytics/react";
import { ContentfulLivePreviewProvider } from "@contentful/live-preview/react";

import { ApolloProvider } from "@apollo/client";
import apolloClient from "utils/apollo";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/logo.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NextNProgress color="#F47E50" />
      <SessionProvider session={session}>
        <ApolloProvider client={apolloClient} suppressHydrationWarning>
          <ContentfulLivePreviewProvider
            locale="en-US"
            enableInspectorMode={pageProps.preview}
            enableLiveUpdates={pageProps.preview}
          >
            <Component className="box-border" {...pageProps} />
            <Analytics />
          </ContentfulLivePreviewProvider>
        </ApolloProvider>
      </SessionProvider>
    </>
  );
}

export default MyApp;
