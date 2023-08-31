import Head from "next/head";
import "../styles/globals.css";
import Script from "next/script";
import NextNProgress from 'nextjs-progressbar';
import { ClerkProvider } from '@clerk/nextjs'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/logo.ico" />
      </Head>
      <NextNProgress />
      <ClerkProvider {...pageProps}>
        <Component className="box-border" {...pageProps} />
      </ClerkProvider>
      <Script src='../node_modules/flowbite/dist/flowbite.min.js' />
    </>
  );
}

export default MyApp;
